import styled, { css } from "styled-components";

export const Container = styled.div`
  text-align: left;
  div {
    span {
      color: var(--red);
    }
  }
`;

export const InputContainer = styled.div`
  background-color: var(--lightGray);
  border-radius: 3px;
  border: 2px solid var(--pink);
  padding: 1rem;
  width: 100%;
  display: flex;
  align-items: center;
  transition: 0.4s;
  color: var(--gray);

  ${(props) =>
    props.isErrored &&
    css`
      border-color: var(--red);
      svg {
        color: var(--red);
      }
    `}

  input {
    background: transparent;
    align-items: center;
    flex: 1;
    border: 0;
    color: var(--black);
    &::placeholder {
      color: var(--gray);
    }
  }
  svg {
    margin-right: 16px;
  }
`;
