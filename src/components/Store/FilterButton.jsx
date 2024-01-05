import styled from "styled-components";
import { FiChevronDown } from "react-icons/fi";
import { useEffect, useState } from "react";
import DropdownMenu from "./DropdownMenu";

function FilterButton({
  id,
  text,
  dropDown,
  handleOpen,
  handleSelection,
  clickElsewhere,
  options,
}) {
  const [unmount, setUnmout] = useState(false);

  useEffect(() => {
    dropDown ? setUnmout(true) : setTimeout(() => setUnmout(false), 50);
  }, [dropDown]);

  return (
    <>
      <Container>
        <FilterButtonContainer
          id="filter-button"
          onClick={() => handleOpen(id)}
        >
          {text}
          <DownArrowIcon />
        </FilterButtonContainer>
        {unmount && (
          <DropdownMenu
            dropDown={dropDown}
            options={options}
            clickElsewhere={clickElsewhere}
            handleSelection={handleSelection}
            btnId={id}
          />
        )}
      </Container>
    </>
  );
}

export default FilterButton;

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
`;

const FilterButtonContainer = styled.button`
  display: flex;
  align-items: center;
  background-color: rgba(var(--rgb-secondary-text-color), 0.1);
  outline: none;
  border: none;
  color: var(--secondary-text-color);
  font-size: 0.9rem;
  padding: 0.4em 0.7em;
  gap: 0.5em;
  border-radius: 0.6rem;
  box-sizing: border-box;
  cursor: pointer;
  transition: all 200ms ease-in-out;

  svg {
    pointer-events: none;
  }

  &:hover {
    color: var(--primary-text-color);
    background-color: rgba(var(--rgb-primary-text-color), 0.1);
    transition: all 200ms ease-in-out;

    svg {
      stroke: var(--primary-text-color);
      transition: stroke 200ms ease-in-out;
    }
  }
`;

const DownArrowIcon = styled(FiChevronDown)`
  color: var(--secondary-text-color);
  font-size: 1rem;
`;
