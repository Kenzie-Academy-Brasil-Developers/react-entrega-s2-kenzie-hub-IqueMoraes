import styled, { keyframes } from "styled-components";

export const Container = styled.div`
  /* height: 100vh; */
  padding: 40px;
  display: flex;
  justify-content: center;
  box-sizing: border-box;

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

export const DivForm = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
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
  justify-content: center;
  animation: ${appearFromUp} 1s;
  h1 {
    text-align: center;
    font-size: 30px;
    margin-bottom: 20px;
  }
  form {
    margin-bottom: 2rem;
    text-align: center;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;

    > div {
      padding: 1rem;
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
  >button {
    margin-left:16px;
  }
`;
