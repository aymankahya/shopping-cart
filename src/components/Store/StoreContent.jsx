import styled from "styled-components";
import GameCard from "./GameCard";
import FilterBar from "./FilterBar";
import SideBar from "src/components/SideBar/SideBar";
import LoadingResult from "../NavigationBar/SearchBar/LoadingResult";
import { filterGameInfo } from "src/utils/filterGameInfo";
import { sortByReleaseDate } from "src/utils/sortByReleaseDate";
import { firstLetterToUpper } from "src/utils/firstLetterCapitalize";
import { useOutletContext } from "react-router-dom";
import { useGames } from "src/hooks/useGames";
import { useLoaderData } from "react-router-dom";

export function loader({ params }) {
  const currentLocation = params.genre;
  return { currentLocation };
}

function StoreContent() {
  const currentPath = useLoaderData();
  const currentCategory = currentPath?.currentLocation
    ? firstLetterToUpper(currentPath.currentLocation)
    : "All games";

  const [
    currentFilterOption,
    setFilterOption,
    handleCategory,
    cartContent,
    setCartContent,
  ] = useOutletContext();

  //Update games result based on filter options
  const handleFilterOption = (id, newOption) => {
    setFilterOption(
      currentFilterOption.map((option, index) => {
        if (index == id) return newOption;
        return option;
      })
    );
  };

  const games = useGames(
    currentPath?.currentLocation?.replaceAll("+", " "),
    currentFilterOption
  );

  // console.log(games?.data);

  return (
    <StoreMainContainer>
      <SideBar
        handleCategory={handleCategory}
        activeCategory={currentCategory}
      />
      <StoreContentContainer>
        <Title>{currentCategory}</Title>
        <FilterBar
          key={currentCategory}
          handleFilterOption={handleFilterOption}
        />

        <Container $loading={games?.isPending ? true : false}>
          {games?.isPending ? (
            <LoadingResult />
          ) : currentFilterOption[0] == "Release date" ? (
            sortByReleaseDate(filterGameInfo(games?.data?.results)).map(
              (game) => {
                return (
                  <GameCard
                    key={game.name}
                    gameInfo={game}
                    cartContent={cartContent}
                    handleAddToCart={setCartContent}
                  />
                );
              }
            )
          ) : (
            filterGameInfo(games?.data?.results).map((game) => {
              return (
                <GameCard
                  key={game.name}
                  gameInfo={game}
                  cartContent={cartContent}
                  handleAddToCart={setCartContent}
                />
              );
            })
          )}
        </Container>
      </StoreContentContainer>
    </StoreMainContainer>
  );
}

export default StoreContent;

const StoreMainContainer = styled.div`
  display: grid;
  grid-template-columns: minmax(300px, 1fr) 5fr;
  padding: var(--app-padding-upper) var(--app-padding-side);
  height: calc(100vh - 6 * var(--app-padding-upper));
  gap: 2rem;
`;

const StoreContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

const Title = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  color: var(--primary-text-color);
  margin: 1rem 0;
`;

const Container = styled.div`
  display: ${(props) => (props.$loading ? "flex" : "grid")};
  ${(props) => props.$loading && "align-items: center; justify-content:center;"}
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  padding: 5px;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    display: none;
  }
`;
