import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";

export default function LeftNavigation() {
  return (
    <>
      <PageNavContainer>
        <NavLink to="/">
          Home
          <LinkOutline />
        </NavLink>
        <NavLink to="/store">
          Store
          <LinkOutline />
        </NavLink>
      </PageNavContainer>
    </>
  );
}

const PageNavContainer = styled.nav`
  display: grid;
  grid-template-columns: repeat(2, minmax(5ch, 1fr));
  gap: 2rem;
  text-align: center;
`;

const NavLink = styled(Link)`
  position: relative;
  text-decoration: none;
  color: var(--secondary-text-color);
  transition: all 300ms ease-in-out;

  &:hover {
    color: var(--primary-text-color);
    font-weight: 600;
    transition: all 300ms ease-in-out;

    span {
      width: 100%;
      transition: width 300ms ease-in-out;
    }
  }
`;

const LinkOutline = styled.span`
  position: absolute;
  left: 0;
  bottom: -25%;
  border-bottom: 1px solid var(--primary-text-color);
  width: 0%;
`;
