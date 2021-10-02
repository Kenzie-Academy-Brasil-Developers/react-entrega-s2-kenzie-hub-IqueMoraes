import styled from "styled-components";

export const DashboardBackground = styled.article`
  display: flex;
  flex-direction: column;
  @media (min-width: 1000px) {
    flex-direction: row;
  }
`;

export const EditionArea = styled.div ` 

>form {
  padding: 1rem;
  >h2{
    margin: 1rem 0;
    font-weight: 700;
    font-size: 1.3rem;
  }
}

`
