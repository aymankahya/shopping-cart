import styled from "styled-components";

export default function SearchResult({ name, cover, releaseDate, platforms }) {
  return (
    <SearchResultContainer>
      <GameRoaster $url={cover}></GameRoaster>
      <GameInfo>
        <h1>{name}</h1>
        <p>
          First Released <span>{releaseDate}</span>
        </p>
      </GameInfo>
    </SearchResultContainer>
  );
}

// Component styling

const SearchResultContainer = styled.div`
  display: flex;
  padding: 0.5rem 1rem;
  gap: 1rem;

  &:hover {
    cursor: pointer;
    background-color: rgba(var(--rgb-primary-text-color), 0.1);
    transition: background-color 150ms ease-in-out;
  }
`;

const GameRoaster = styled.div`
  flex-shrink: 0;
  background-image: ${(props) => `url(${props.$url})`};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 0.5rem;
  width: 5rem;
  height: 5rem;
`;

const GameInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  /* justify-content: space-between; */

  h1 {
    font-size: 1rem;
    font-weight: 700;
    color: var(--background-color-orange);
  }

  p {
    font-size: 0.8rem;
    color: var(--secondary-text-color);

    span {
      font-size: 0.8rem;
      color: var(--primary-text-color);
    }
  }

  h1,
  p {
    margin: 0;
  }
`;
