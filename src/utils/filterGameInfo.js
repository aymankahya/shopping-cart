export function filterGameInfo(apiResponse) {
  var filteredData = [];

  apiResponse?.map((gameResponse) =>
    filteredData.push({
      name: gameResponse.name,
      img: gameResponse.background_image,
      genres: gameResponse.genres.map((element) => element.name),
      platform: gameResponse.parent_platforms.map(
        (element) => element.platform.name
      ),
      console: gameResponse.platforms.map((element) => element.platform.name),
      releaseDate: gameResponse.released,
      releaseDateObject: new Date(gameResponse.released),
      rating: gameResponse.metacritic,
    })
  );

  return filteredData;
}
