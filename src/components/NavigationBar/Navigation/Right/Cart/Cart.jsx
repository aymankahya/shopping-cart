import styled, { keyframes } from "styled-components";
import { CgClose } from "react-icons/cg";
import { useEffect, useState } from "react";
import Item from "./Item";

function Cart({
  cartItems,
  handleCloseCartOnOutsideClick,
  handleCloseCartOnIconClick,
}) {
  const [closeBtnState, setCloseBtnState] = useState(false);

  useEffect(() => {
    {
      setTimeout(
        () => window.addEventListener("click", handleCloseOutsideClick),
        300
      );
    }

    return () => {
      window.removeEventListener("click", handleCloseOutsideClick);
    };
  });

  const handleCloseOutsideClick = (event) => {
    handleCloseCartOnOutsideClick(event);
    setCloseBtnState(true);
  };

  const handleCloseIconOnClick = () => {
    handleCloseCartOnIconClick();
    setCloseBtnState(true);
  };

  return (
    <CartModal id="cart-modal">
      <CartContainer id="cart-container" $clicked={closeBtnState}>
        <UpperPart>
          <Title>
            Your Cart <ItemsNumber>({cartItems.length})</ItemsNumber>
          </Title>
          <CloseBtn onClick={handleCloseIconOnClick}>
            <CloseIcon></CloseIcon>
          </CloseBtn>
        </UpperPart>

        <Content>
          {cartItems.map((game) => {
            return <Item key={game.name} game={game} />;
          })}
        </Content>
      </CartContainer>
    </CartModal>
  );
}

export default Cart;

const CartSlideIn = keyframes`
from{
  right: -60%;
}
to{
  right: 0%
}
`;

const CartSlideOut = keyframes`
from{
  right: 0%;
}
to{
  right: -60%;
}
`;

const CartModal = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.4);
  backdrop-filter: ${(props) =>
    props.$clicked ? "blur(5px) opacity(0)" : "blur(5px) opacity(1)"};
  z-index: 100;
  cursor: pointer;
  overflow: hidden;
`;

const CartContainer = styled.div`
  width: 25%;
  height: 100%;
  position: absolute;
  right: 0;
  background-color: var(--background-color-black);
  border-radius: 2.5rem 0 0 2.5rem;
  padding: 0 1.5rem;
  box-sizing: border-box;
  cursor: default;
  animation: ${(props) => (props.$clicked ? CartSlideOut : CartSlideIn)} 300ms
    ease-in-out forwards;
`;

const UpperPart = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Title = styled.h1`
  font-size: 1.8rem;
  font-weight: 800;
  color: var(--background-color-orange);
`;
const ItemsNumber = styled.span`
  font-size: 1.5rem;
  font-weight: 400;
  color: var(--secondary-text-color);
`;

const CloseBtn = styled.button`
  background: none;
  border: none;
  outline: none;
`;

const CloseIcon = styled(CgClose)`
  color: rgba(var(--rgb-secondary-text-color), 0.5);
  font-size: 1.8rem;
  cursor: pointer;
  transition: all 300ms ease-in-out;

  &:hover {
    color: rgba(var(--rgb-secondary-text-color), 1);
    transition: all 300ms ease-in-out;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
`;
