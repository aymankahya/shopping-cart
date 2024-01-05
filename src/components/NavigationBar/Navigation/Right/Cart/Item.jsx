import { gamePriceEstimate } from "src/utils/gamePriceEstimate";
import styled from "styled-components";

function Item({ game }) {
  return (
    <CartItem>
      <CartItemImg $url={game.img}></CartItemImg>
      <CartItemInfo>
        <CartItemTitle>{game.name}</CartItemTitle>
        <CartItemPrice>
          ${gamePriceEstimate(game.rating, game.releaseDateObject)}
        </CartItemPrice>
      </CartItemInfo>
    </CartItem>
  );
}

export default Item;

const CartItem = styled.div`
  display: flex;
  gap: 1rem;
  width: 100%;
  background-color: rgba(var(--rgb-secondary-text-color), 0.1);
  border-radius: 0.5rem;
  box-sizing: border-box;
  padding: 1rem;
  margin-bottom: 1rem;
`;

const CartItemInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const CartItemTitle = styled.h2`
  font-size: 1.3rem;
  color: var(--primary-text-color);
  margin: 0;
`;

const CartItemPrice = styled.p`
  font-size: 1rem;
  color: var(--background-color-orange);
`;

const CartItemImg = styled.div`
  width: 5rem;
  height: 5rem;
  border-radius: 10px;
  background-image: ${(props) => `url(${props.$url})`};
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;
