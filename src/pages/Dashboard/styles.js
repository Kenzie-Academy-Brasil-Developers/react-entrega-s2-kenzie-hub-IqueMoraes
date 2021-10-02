import styled from "styled-components";

export const DashboardBackground = styled.article`
  display: flex;
  flex-direction: column;

  > article {
    width: 100vw;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  @media (min-width: 1000px) {
    flex-direction: row;
    > article {
      width: 80vw;
      height: 100vh;
    }
  }
`;

export const BothCardsArea = styled.div`
  width: 100%;
  height: 70%;
  display: flex;
`;

export const TechCardsArea = styled.div`
  box-sizing: border-box;
  width: 50%;
  height: 100%;
  padding: 1.2rem 0;
  margin: 2rem;
  border: 2px solid var(--darkGray);
  border-radius: 8px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-content: flex-start;
  overflow: auto;
  > h3 {
    width: 100%;
    height: auto;
    text-align: center;
    margin-bottom: 1.2rem;
  }
`;
export const WorkCardsArea = styled.div`
  box-sizing: border-box;
  width: 50%;
  height: 100%;
  padding: 1.2rem 0;
  margin: 2rem;
  border: 2px solid var(--darkGray);
  border-radius: 8px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-content: space-between;
  overflow: auto;
`;
