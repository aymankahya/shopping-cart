import { useQuery } from "@tanstack/react-query";
import { genresMapping } from "src/pages/Store/genresMappingAPI";
import {
  formatISO,
  startOfWeek,
  endOfWeek,
  startOfYear,
  endOfYear,
} from "date-fns";

export function useGames(currentCategory, currentFilterOption) {
  const games = useQuery({
    queryKey: ["games", currentCategory, currentFilterOption],
    queryFn: async () => {
      return await (
        await fetch(
          `${import.meta.env.VITE_API_URL}games?${
            Object.keys(genresMapping).includes(
              currentCategory?.toLocaleLowerCase()
            )
              ? `genres=${genresMapping[currentCategory?.toLocaleLowerCase()]}&`
              : ""
          }parent_platforms=${
            currentFilterOption[1] == "PC"
              ? "1"
              : currentFilterOption[1] == "PlayStation"
              ? "2"
              : currentFilterOption[1] == "Xbox"
              ? "3"
              : "1,2,3"
          }&${
            currentCategory == "popular this week"
              ? `dates=${formatISO(startOfWeek(new Date()), {
                  representation: "date",
                })},${formatISO(endOfWeek(new Date()), {
                  representation: "date",
                })}&`
              : currentCategory == "best of the year"
              ? `dates=${formatISO(startOfYear(new Date()), {
                  representation: "date",
                })},${formatISO(endOfYear(new Date()), {
                  representation: "date",
                })}&`
              : currentCategory == "all time top 20"
              ? `dates=1980-01-01,${formatISO(new Date(), {
                  representation: "date",
                })}&`
              : ""
          }${
            currentCategory === undefined
              ? ""
              : `ordering=-${
                  currentFilterOption[0] == "Rating" ? "rating" : "added"
                }&`
          }stores=1,2,3,7,11&key=${import.meta.env.VITE_API_KEY}`
        )
      ).json();
    },
  });

  return games;
}
