import styled, { keyframes } from "styled-components";
import { BiLoaderAlt } from "react-icons/bi";

export default function LoadingResult() {
  return <Loader></Loader>;
}

const loaderRotate = keyframes`
    from{
        transform: rotate(0);
    }
    to{
        transform: rotate(360deg);
    }

`;

const Loader = styled(BiLoaderAlt)`
  font-size: 5rem;
  font-weight: 100;
  margin: 2rem auto;
  color: var(--secondary-text-color);
  animation: ${loaderRotate} 600ms linear infinite;
`;
