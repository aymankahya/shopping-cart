import styled from "styled-components";
import { SiPlaystation, SiWindows10, SiXbox } from "react-icons/si";
import { FaCartPlus } from "react-icons/fa6";
import { gamePriceEstimate } from "src/utils/gamePriceEstimate";

function GameCard({ gameInfo, cartContent, handleAddToCart }) {
  return (
    <CardContainer>
      <GameImage $url={gameInfo.img}></GameImage>
      <GameTitle>{gameInfo.name}</GameTitle>
      <GamePlatform>
        {gameInfo.platform.includes("PC") && <SiWindows10 />}
        {gameInfo.platform.includes("PlayStation") && <SiPlaystation />}
        {gameInfo.platform.includes("Xbox") && <SiXbox />}
      </GamePlatform>
      <GameBottomContainer>
        <GamePrice>{`$${gamePriceEstimate(
          gameInfo.rating,
          gameInfo.releaseDateObject
        )}`}</GamePrice>
        <AddToCartBtn
          disabled={cartContent
            .map((game) => game.name)
            .includes(gameInfo.name)}
          onClick={() => handleAddToCart([...cartContent, { ...gameInfo }])}
        >
          <FaCartPlus />

          {cartContent.map((game) => game.name).includes(gameInfo.name)
            ? "Added"
            : "Add to Cart"}
        </AddToCartBtn>
      </GameBottomContainer>
    </CardContainer>
  );
}

export default GameCard;

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0.8rem;
  max-height: 300px;
  border-radius: 1.5rem;
  box-sizing: border-box;
  background-color: rgba(var(--rgb-secondary-text-color), 0.1);
  transition: all 200ms ease-in-out;

  &:hover {
    transform: scale(1.03);
    transition: all 200ms ease-in-out;
  }
`;

const GameImage = styled.div`
  background-image: ${(props) => `url(${props.$url})`};
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 0.8rem;

  width: 100%;
  height: 150px;
`;

const GameTitle = styled.h1`
  color: var(--primary-text-color);
  font-size: 1.3rem;
  margin-bottom: 0.5rem;
`;

const GamePlatform = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.9rem;
  color: rgba(var(--rgb-secondary-text-color), 0.7);
`;

const GameBottomContainer = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: auto 1fr;
  gap: 1rem;
  margin-top: 1rem;
`;

const GamePrice = styled.h1`
  color: var(--background-color-orange);
  font-size: 1.7rem;
  font-weight: 700;
  margin: 0;
`;

const AddToCartBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  background-color: var(--background-color-black);
  border: none;
  outline: none;
  border-radius: 2rem;
  padding: 0.8rem;
  color: var(--primary-text-color);
  font-weight: 700;
  cursor: pointer;
  transition: all 300ms ease-in-out;

  &:disabled {
    cursor: not-allowed;

    &:hover {
      background-color: var(--background-color-black);
      color: var(--primary-text-color);
    }
  }

  &:hover {
    background-color: var(--background-color-orange);
    color: var(--background-color-black);
    transition: all 300ms ease-in-out;
  }
`;
