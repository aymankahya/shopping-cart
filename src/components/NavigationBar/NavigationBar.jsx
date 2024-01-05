import styled from "styled-components";
import SearchBar from "src/components/NavigationBar/SearchBar/SearchBar";
import Logo from "./SearchBar/Logo";
import LeftNavigation from "./Navigation/Left/LeftNavigation";
import RightNavigation from "./Navigation/Right/RightNavigation";

export default function NavigationBar({ cartContent = [] }) {
  return (
    <>
      <NavigationContainer>
        <Logo />
        <SearchBar />
        <NavigationBarRight>
          <LeftNavigation />
          <RightNavigation cartItems={cartContent} />
        </NavigationBarRight>
      </NavigationContainer>
    </>
  );
}

const NavigationContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr minmax(400px, 1fr) 1fr;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  padding: var(--app-padding-upper) var(--app-padding-side);
`;

const NavigationBarRight = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
  gap: 3rem;
`;
