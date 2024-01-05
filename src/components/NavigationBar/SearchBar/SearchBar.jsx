import React from "react";
import { useState } from "react";
import styled, { keyframes } from "styled-components";
import { FiSearch } from "react-icons/fi";
import SearchResult from "./SearchResult";
import { useQuery } from "@tanstack/react-query";
import { filterGameInfo } from "src/utils/filterGameInfo";
import ResultNotFound from "./ResultNotFound";
import LoadingResult from "./LoadingResult";
import ErrorResult from "./ErrorResult";

export default function SearchBar() {
  const [userSearch, setUserSearch] = useState(null);
  const [resultContainerShown, setShowResultContainer] = useState(null);
  const [inputTimer, setTimer] = useState(null);

  const handleDelayInput = (e) => {
    e.target.value && e.target.value != ""
      ? setShowResultContainer(true)
      : setShowResultContainer(false);
    clearTimeout(inputTimer);
    const newTimer = setTimeout(() => {
      setUserSearch(e.target.value);
    }, 1500);

    setTimer(newTimer);
  };

  const searchResult = useQuery({
    queryKey: ["searchResult", userSearch],
    enabled: userSearch != null && userSearch != undefined && userSearch != "",
    queryFn: async () => {
      const searchKeyWord = userSearch.replaceAll(" ", "+");
      return await (
        await fetch(
          `${
            import.meta.env.VITE_API_URL
          }games?search=${searchKeyWord}&search_precise=true&parent_platforms=1,2,3&stores=1,2,3,7,11&key=${
            import.meta.env.VITE_API_KEY
          }`
        )
      ).json();
    },
  });

  return (
    <>
      <SearchBarContainer>
        <span>
          <FiSearch />
        </span>
        <input
          type="text"
          name="game-searched"
          placeholder="Looking for a game ?"
          onChange={handleDelayInput}
        ></input>

        {resultContainerShown && (
          <SearchResultContainer>
            {searchResult?.data?.count !== 0 ? (
              userSearch != "" &&
              (searchResult?.isPending ? (
                <LoadingResult />
              ) : searchResult?.isError ? (
                <ErrorResult />
              ) : (
                filterGameInfo(searchResult?.data?.results)
                  .slice(0, 3)
                  .map((game, index) => {
                    return (
                      <React.Fragment key={game.name}>
                        <SearchResult
                          key={game.name}
                          name={game.name}
                          cover={game.img}
                          releaseDate={game.releaseDate}
                          platforms={game.platform}
                        />
                        {index === 2 && <button>Load more ...</button>}
                      </React.Fragment>
                    );
                  })
              ))
            ) : (
              <ResultNotFound />
            )}
          </SearchResultContainer>
        )}
      </SearchBarContainer>
    </>
  );
}

const SearchBarContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  margin: auto;
  box-sizing: border-box;
  border-radius: 10rem;
  background-color: rgb(var(--rgb-secondary-text-color), 0.1);
  gap: 1rem;
  padding: 0.5rem 1rem;
  transition: all 300ms ease-in-out;

  span {
    font-size: 1rem;
    color: var(--secondary-text-color);
  }

  input {
    outline: none;
    background: none;
    border: none;
    color: var(--primary-text-color);
    width: 12rem;
    transition: all 700ms ease-in-out;

    &:hover {
      cursor: pointer;
    }

    &::placeholder {
      color: var(--secondary-text-color);
    }

    &:focus,
    &:not(:placeholder-shown) {
      width: 25rem;
      transition: all 700ms ease-in-out;
    }
  }
`;
const dropDown = keyframes`
    0%{
      transform: translateY(-100%);
      opacity: 0;
    }
    100%{
      transform: translateY(0);
      opacity: 1;
    }
`;

const SearchResultContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  width: 100%;
  height: 20rem;
  padding: 1rem 0;
  box-sizing: border-box;
  animation: ${dropDown} 400ms ease-in-out;
  background-color: rgb(var(--rgb-background-color-black));
  border-radius: 1rem;
  top: 120%;
  left: 0;
`;
