import styled from "styled-components";
import { HiEmojiSad } from "react-icons/hi";

export default function ResultNotFound() {
  return (
    <>
      <MessageContainer>
        <SadEmoji></SadEmoji>
        <p>No games were found</p>
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

const SadEmoji = styled(HiEmojiSad)`
  font-size: 2rem;
  font-weight: 500;
`;
