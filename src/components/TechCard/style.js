import styled from "styled-components";

export const BoxCard = styled.div`
  width: 120px;
  height: 120px;
  border-radius: 8px;
  padding: 1rem;
  margin-bottom: 1.2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background-color: var(--yellow);
  color: var(--gray);
  > div {
    width: 100%;
    display: flex;
    justify-content: space-around;
  }
  h3{
      font-weight: 700;
  }
`;

export const ConfigButton = styled.div`
  width: 22px;
  height: 22px;
  border-radius: 4px;
  border: 2px solid var(--darkGray);
  color: var(--gray);
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  svg {
    color: var(--darkGray);
  }
`;
