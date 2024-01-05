import styled from "styled-components";
import { IoMdTrendingUp } from "react-icons/io";
import { FaRankingStar, FaCrown, FaChess } from "react-icons/fa6";
import { PiSword } from "react-icons/pi";
import { GiRunningNinja, GiPistolGun, GiTreasureMap } from "react-icons/gi";
import { MdSportsBasketball } from "react-icons/md";
import { sideBarContent as content } from "./SideBarContent";
import React from "react";
import { Link } from "react-router-dom";

function SideBar({ handleCategory, activeCategory }) {
  return (
    <SidebarContainer>
      {content.map((element) => {
        return (
          <React.Fragment key={element.title}>
            <SectionContainer>
              <SectionTitle>{element.title}</SectionTitle>
              {element.labels.map((label) => {
                return (
                  <NavLabel
                    key={label}
                    onClick={() => handleCategory(label)}
                    to={`/store/${label.toLowerCase().replaceAll(" ", "+")}`}
                    $active={
                      activeCategory.toLowerCase() === label.toLocaleLowerCase()
                    }
                  >
                    {label == "Popular This Week" && (
                      <Icon>
                        <IoMdTrendingUp />
                      </Icon>
                    )}
                    {label == "Best Of The Year" && (
                      <Icon>
                        <FaRankingStar />
                      </Icon>
                    )}
                    {label == "All Time Top 20" && (
                      <Icon>
                        <FaCrown />
                      </Icon>
                    )}
                    {label == "RPG" && (
                      <Icon>
                        <PiSword />
                      </Icon>
                    )}
                    {label == "Strategy" && (
                      <Icon>
                        <FaChess />
                      </Icon>
                    )}
                    {label == "Action" && (
                      <Icon>
                        <GiRunningNinja />
                      </Icon>
                    )}
                    {label == "Shooter" && (
                      <Icon>
                        <GiPistolGun />
                      </Icon>
                    )}
                    {label == "Adventure" && (
                      <Icon>
                        <GiTreasureMap />
                      </Icon>
                    )}
                    {label == "Sports" && (
                      <Icon>
                        <MdSportsBasketball />
                      </Icon>
                    )}
                    {label}
                  </NavLabel>
                );
              })}
            </SectionContainer>
          </React.Fragment>
        );
      })}
    </SidebarContainer>
  );
}

export default SideBar;

const SidebarContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: rgba(var(--rgb-secondary-text-color), 0.1);
  border-radius: 1.4rem;
  height: 100%;
  padding-top: 0.5rem;
  box-sizing: border-box;
`;

const SectionContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const SectionTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 800;
  color: var(--primary-text-color);
  margin: 0 0 1rem 0;
  padding: 1rem 0 0 1rem;
`;

const NavLabel = styled(Link)`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  background: none;
  outline: none;
  text-decoration: none;
  border: none;
  width: auto;
  font-size: 0.9rem;
  color: var(--secondary-text-color);
  padding: 0.5rem 1rem;
  cursor: pointer;
  transition: all 200ms ease-in-out;
  ${(props) =>
    props.$active &&
    `background-color: rgba(var(--rgb-primary-text-color), 0.05);
    color: var(--primary-text-color);
    font-weight: 800;
    `}

  &:hover {
    background-color: rgba(var(--rgb-primary-text-color), 0.05);
    color: var(--primary-text-color);
    font-weight: 800;
    transition: all 200ms ease-in-out;

    span {
      color: var(--primary-text-color);
      font-weight: 800;
      transition: all 200ms ease-in-out;
    }
  }
`;

const Icon = styled.span`
  display: grid;
  place-content: center;
  font-size: 1.5rem;
  color: var(--secondary-text-color);
  transition: all 200ms ease-in-out;
`;
