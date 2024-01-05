import styled from "styled-components";
import FilterButton from "./FilterButton";
import { useState } from "react";

function FilterBar({ handleFilterOption }) {
  const [filterButtons, setFilterButtons] = useState([
    {
      text: "Order by",
      options: [
        { text: "Release date", optionId: 1, status: false },
        { text: "Rating", optionId: 2, status: false },
      ],
    },
    {
      text: "Platforms",
      options: [
        { text: "PC", optionId: 1, status: false },
        { text: "PlayStation", optionId: 2, status: false },
        { text: "Xbox", optionId: 3, status: false },
      ],
    },
  ]);
  const [isActive, setActive] = useState([null, null]);

  // Handle filter selection (Updating filter button state + Closing dropdown menu)
  const handleSelection = (filterId, selectionId) => {
    let activeOption = [null, null];
    setActive(Array(isActive.length).fill(false));
    setFilterButtons(
      filterButtons.map((btn, index) => {
        if (index === filterId - 1) {
          activeOption[filterId - 1] = btn.options[selectionId - 1].text;
          btn.text = btn.options[selectionId - 1].text;
          btn.options.map((option, index) => {
            index == selectionId - 1
              ? (option.status = true)
              : (option.status = false);
          });
          // Update the current active filter options state in Store component
          handleFilterOption(filterId - 1, btn.text);
          return btn;
        } else {
          return btn;
        }
      })
    );
  };

  //Handle closing the dropdown menu when clicking outside of the filter button
  const handleOnClickElsewhere = (event) => {
    if (
      event.target.id !== "filter-option" &&
      event.target.id !== "filter-button"
    ) {
      setActive(Array(isActive.length).fill(false));
    }
  };

  const handleOpenFilter = (clickedBtnId) => {
    let newArray = Array(isActive.length).fill(false);
    if (!isActive[clickedBtnId - 1]) {
      newArray[clickedBtnId - 1] = true;
      setActive(newArray);
    } else {
      newArray[clickedBtnId - 1] = false;
      setActive(newArray);
    }
  };
  return (
    <>
      <FilterBarContainer>
        {filterButtons.map((btn, index) => {
          return (
            <FilterButton
              key={index}
              id={index + 1}
              text={btn.text}
              dropDown={isActive[index]}
              handleOpen={handleOpenFilter}
              clickElsewhere={handleOnClickElsewhere}
              handleSelection={handleSelection}
              options={btn.options}
            />
          );
        })}
      </FilterBarContainer>
    </>
  );
}

export default FilterBar;

const FilterBarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  gap: 1rem;
  margin-bottom: 1rem;
`;
