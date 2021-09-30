import styled from "styled-components";

export const LinearGradient = styled.div`
  position: relative;
  bottom: 0;
  background: linear-gradient(
    0deg,
    rgba(85, 85, 85, 1) 0%,
    rgba(0, 194, 233, 0) 25%
  );
  z-index: 2;
`;

export const Box = styled.div`
  /* width: 100vw; */
  height: 80vh;
  /* padding-left: 20px; */
  padding-top: 20px;
  background-color: #d6dcda99;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-content: space-between;
  overflow: auto;
`;

export const UsersCards = styled.div`
  margin-right: 20px;
  width: 30%;
  min-width: 280px;
  min-height: 120px;
  margin-bottom: 20px;
  border-radius: 8px;
  padding: 10px;
  background-color: var(--yellow);
  display: flex;
  flex-direction: column;
  h4,
  h6 {
    padding-bottom: 5px;
  }

  > div {
    display: flex;
    flex-wrap: wrap;
    color: var(--white);
    h4 {
      color: var(--white);
      font-weight: 600;
    }
    > div {
      width: 100%;
      padding: 5px;
      margin-bottom: 5px;
      background-color: var(--darkGray);
      border-radius: 10px;
    }
  }
`;
