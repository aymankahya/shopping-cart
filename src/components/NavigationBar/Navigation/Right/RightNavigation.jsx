import { FaCartShopping } from "react-icons/fa6";
import styled from "styled-components";
import UserLogin from "./UserLogin";
import { useState } from "react";
import Cart from "./Cart/Cart";

export default function RightNavigation({ cartItems }) {
  const [cartVisible, setCartVisibility] = useState(false);

  const handleCloseCartOnOutsideClick = (event) => {
    event.target.id == "cart-modal" &&
      event.target.id != "cart-container" &&
      setTimeout(() => setCartVisibility(false), 150);
  };

  const handleCloseCartOnIconClick = () => {
    setTimeout(() => setCartVisibility(false), 150);
  };

  return (
    <>
      <RightNavContainer>
        <CartBtn onClick={() => setCartVisibility(true)}>
          <CartIcon></CartIcon>
          {cartItems.length != 0 && <CartItems>{cartItems.length}</CartItems>}
        </CartBtn>
        <UserLogin></UserLogin>
      </RightNavContainer>
      {cartVisible && (
        <Cart
          cartItems={cartItems}
          handleCloseCartOnOutsideClick={handleCloseCartOnOutsideClick}
          handleCloseCartOnIconClick={handleCloseCartOnIconClick}
        />
      )}
    </>
  );
}

const RightNavContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const CartBtn = styled.button`
  position: relative;
  display: grid;
  place-content: center;
  background: none;
  border: 1px solid var(--secondary-text-color);
  outline: none;
  border-radius: 100rem;
  box-sizing: border-box;
  padding: 7px;
  cursor: pointer;

  &:hover {
    border-color: var(--primary-text-color);
    transition: border-color 300ms ease-in-out;

    svg {
      fill: white;
      transition: all 300ms ease-in-out;
    }
  }
`;

const CartIcon = styled(FaCartShopping)`
  font-size: 1rem;
  color: var(--secondary-text-color);
  transition: all 300ms ease-in-out;
`;

const CartItems = styled.div`
  position: absolute;
  top: -20%;
  right: -20%;
  display: grid;
  place-content: center;
  background-color: var(--background-color-orange);
  border-radius: 100rem;
  font-size: 11px;
  font-weight: 900;
  color: var(--background-color-black);
  width: 12px;
  height: 12px;
  padding: 1px;
`;
