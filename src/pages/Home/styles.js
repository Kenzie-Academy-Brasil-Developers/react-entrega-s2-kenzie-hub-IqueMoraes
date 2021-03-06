import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  align-content: space-around;

  .capa {
    display: flex;
    flex-wrap: wrap;
    > .capaTexto {
      flex: 1;
    }
  }

  img {
    width: 120%;
    filter: opacity(80%);
    position: absolute;
    top: 0;
    transform: translateY(-60%);
    z-index: -1;
  }
  h1 {
    width: 100%;
    font-size: 38px;
    text-align: center;
  }
  h4 {
    width: 50%;
  }
  > div {
    width: 70%;
    p + p {
      margin-top: 16px;
    }
  }

  hr {
    width: 90%;
    border: 1px solid var(--black);
    background-color: var(--black);
  }
`;
export const DivButtons = styled.div`
  width: 70%;
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
`;


export const DivShowUsers = styled.div ` 
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    `