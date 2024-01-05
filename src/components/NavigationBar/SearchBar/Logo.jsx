import { Link } from "react-router-dom";
import styled from "styled-components";

export default function Logo() {
  return (
    <>
      <LogoContainer to="/">
        <LogoUncolored>Game</LogoUncolored>
        <LogoColored>Store</LogoColored>
      </LogoContainer>
    </>
  );
}

const LogoContainer = styled(Link)`
  cursor: pointer;
  text-decoration: none;
`;

const LogoUncolored = styled.span`
  font-size: 2rem;
  font-weight: 200;
  color: var(--primary-text-color);
`;

const LogoColored = styled.span`
  font-size: 2rem;
  font-weight: 800;
  color: var(--background-color-orange);
`;
