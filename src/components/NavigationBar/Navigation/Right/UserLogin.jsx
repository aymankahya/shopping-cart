import styled from "styled-components";
import { MdLogin } from "react-icons/md";

export default function UserLogin() {
  return (
    <>
      {/* <UserLoginBtn>
        <LoginIcon></LoginIcon>
        <span>Login</span>
      </UserLoginBtn> */}
      <UserIcon />
      <UserName>Ayman Kahya</UserName>
    </>
  );
}

const UserLoginBtn = styled.button`
  display: flex;
  align-items: center;
  gap: 5px;
  background: none;
  outline: none;
  border: 1px solid var(--secondary-text-color);
  border-radius: 2rem;
  box-sizing: border-box;
  padding: 7px;
  color: var(--secondary-text-color);
  cursor: pointer;
  transition: all 300ms ease-in-out;

  &:hover {
    border-color: var(--primary-text-color);
    font-weight: 500;
    color: var(--primary-text-color);
    transition: all 300ms ease-in-out;

    svg {
      fill: var(--primary-text-color);
      transition: all 300ms ease-in-out;
    }
  }

  span {
    margin: 0;
    padding: 0;

    &::after {
      display: block;
      content: "Login";
      font-weight: 500;
      visibility: hidden;
      overflow: hidden;
      height: 0;
    }
  }
`;

const LoginIcon = styled(MdLogin)`
  color: var(--secondary-text-color);
  font-size: 1rem;
`;

const UserIcon = styled.div`
  display: flex;
  flex-shrink: 0;
  background-image: url(https://i.pinimg.com/originals/1a/67/6d/1a676d658fd9b78fdaea59bb1bfeb83d.jpg);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  border-radius: 100rem;
  width: 34px;
  height: 34px;
`;

const UserName = styled.p`
  color: var(--primary-text-color);
  font-weight: 500;
  font-size: 1rem;
  margin: 0;
`;
