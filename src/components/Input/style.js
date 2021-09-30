import styled, { css } from "styled-components";

export const Container = styled.div`
  text-align: left;
  padding: 1 rem;

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
  padding: 0.8rem;
  margin-top: 0.5rem;
  /* width: 100%; */
  display: flex;
  align-items: center;
  transition: 0.4s;
  color: var(--black);
  font-family: Yrsa, serif;
  font-weight: 400;

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
    height: 1.8rem;
    align-items: center;
    flex: 1;
    border: 0;
    color: var(--black);
    &::placeholder {
      color: var(--darkGray);
    }
  }
  svg {
    margin-right: 16px;
  }
`;
