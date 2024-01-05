import { useEffect } from "react";
import styled, { keyframes } from "styled-components";
import { FaCheck } from "react-icons/fa6";

function DropdownMenu({
  dropDown,
  options,
  clickElsewhere,
  handleSelection,
  btnId,
}) {
  useEffect(() => {
    {
      setTimeout(() => window.addEventListener("click", clickElsewhere), 300);
    }

    return () => {
      window.removeEventListener("click", clickElsewhere);
    };
  });

  return (
    <DropDownMenu dropdown={dropDown?.toString()}>
      {options.map((option) => (
        <ChoiceOption
          key={option.text}
          id="filter-option"
          disabled={option.status}
          onClick={() => handleSelection(btnId, option.optionId)}
        >
          {option.text}
          {option.status && <SelectedIcon />}
        </ChoiceOption>
      ))}
    </DropDownMenu>
  );
}

export default DropdownMenu;

const dropDown = keyframes`
  from{
    transform: translateY(-100%);
    opacity: 0;
  }to {
    transform: translateY(0);
    opacity:1;
  }
`;

const fadeUp = keyframes`
  from{
    transform: translateY(0);
    opacity: 1;
  }to {
    transform: translateY(-100%);
    opacity:0;
  }
  `;

const DropDownMenu = styled.div`
  position: absolute;
  top: 120%;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  background-color: rgba(var(--rgb-background-color-black), 1);
  color: var(--secondary-text-color);
  border-radius: 0.4rem;
  width: calc(16ch + 2rem);
  font-size: 0.9rem;
  z-index: 1;

  &[dropdown="true"] {
    animation: ${dropDown} 200ms forwards;
  }

  &[dropdown="false"] {
    animation: ${fadeUp} 200ms forwards;
  }

  button:not(:first-of-type) {
    margin-top: 0.2rem;
  }
`;

const ChoiceOption = styled.button`
  flex: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: start;
  padding: 0.2rem 0.5rem;
  background: none;
  border: none;
  color: var(--rgb-secondary-text-color);
  border-radius: 0.4rem;
  width: 100%;
  cursor: pointer;

  &:hover {
    background-color: rgba(var(--rgb-secondary-text-color), 0.1);
    color: var(--primary-text-color);
  }
`;

const SelectedIcon = styled(FaCheck)`
  color: var(--background-color-orange);
`;
