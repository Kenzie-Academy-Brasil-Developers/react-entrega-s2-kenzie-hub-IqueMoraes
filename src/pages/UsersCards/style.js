import styled from "styled-components";

export const BackgroundUsersCards = styled.div`
  padding: 0 20px;
  height: 100vh;
  width: 100vw;
  box-sizing: border-box;

  img {
    width: 120%;
    filter: opacity(80%);
    position: absolute;
    bottom: 0;
    transform: translate(-10%, 60%);
    z-index: -1;
  }

  > div.pageButtons {
    padding-top: 10px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  > div.returnButton {
    margin-top: 20px;
  }
`;
