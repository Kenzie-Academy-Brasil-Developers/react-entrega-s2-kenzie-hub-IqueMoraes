import styled, { keyframes } from "styled-components";

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
  img {
    height: 120%;
    filter: opacity(80%);
    position: absolute;
    top: 0;
    left: 0;
    transform: translatex(-60%);
    z-index: -1;
  }
`;

export const Background = styled.div`
  @media (min-width: 1100px) {
    flex: 1;
    /* position: relative;
    top: 0;
    left: 0; */
  }
`;

export const DivForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 700px;
`;

const appearFromRight = keyframes`
from{
    opacity: 0;
    transform: translatex(50px);
}
to{
    opacity: 1;
    transform: translatex(0px);
}
`;

export const AnimationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  animation: ${appearFromRight} 1s;
  form {
    margin: 80px 0;
    width: 340px;
    text-align: center;

    h1 {
      margin-bottom: 32px;
    }
    > div {
      margin-top: 16px;
    }
    p {
      margin-top: 8px;
      a {
        font-weight: bold;
        color: var(--red);
      }
    }
  }
`;
