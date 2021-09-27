import styled, { keyframes } from "styled-components";

export const Container = styled.div`
  /* height: 100vh; */
  display: flex;
  flex-direction: column;
  /* align-items: stretch; */
  position: relative;
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

const appearFromUp = keyframes`
from{
    opacity: 0;
    transform: translatey(-50px);
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
  animation: ${appearFromUp} 1s;
  h1 {
    font-size: 30px;
    margin-bottom: 20px;
  }
  form {
    margin: 80px 0;
    max-height: 60vh;
    /* width: 200px; */
    text-align: center;
    display: flex;
    flex-direction: column;
    @media (min-width: 1100px) {
      flex-wrap: wrap;
    }
    > div {
      margin-top: 16px;
    }
    p {
      margin-top: 8px;
      a {
        font-weight: bold;
        color: var(--black);
      }
    }
  }
`;
