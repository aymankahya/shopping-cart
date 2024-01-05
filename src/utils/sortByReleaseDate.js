export function sortByReleaseDate(data) {
  const copyData = data;
  copyData.sort((a, b) => b.releaseDate - a.releaseDate);
  return copyData;
}
