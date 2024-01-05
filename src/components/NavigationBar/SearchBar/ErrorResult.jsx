import styled from "styled-components";
import { BsEmojiDizzyFill } from "react-icons/bs";

export default function ErrorResult() {
  return (
    <>
      <MessageContainer>
        <ErrorEmoji></ErrorEmoji>
        <p>Oops ! An error has occured</p>
      </MessageContainer>
    </>
  );
}

const MessageContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  align-items: center;
  margin: 2rem auto;
  height: calc(100% - 1rem);
  color: var(--secondary-text-color);

  p {
    margin: 0;
  }
`;

const ErrorEmoji = styled(BsEmojiDizzyFill)`
  font-size: 2rem;
  font-weight: 500;
`;
