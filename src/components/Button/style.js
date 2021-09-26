import styled from "styled-components";

export const Button = styled.button`
  height: 26px;
  width: 160px;
  background-color: ${(props) => (!props.colorB ? "#C4C4C4" : props.colorB)};
  border: ${(props) =>
    !props.colorB ? "2px solid #C4C4C4" : "2px solid" + props.colorB};
  border-radius: 3px;
  display: flex;
  justify-content: center;
  align-items: center;
  p {
    font-family: "IBM Plex Sans", sans-serif;
    font-weight: 700;
  }
  box-shadow: 0px 10px 13px -7px #000000, -2px 3px 15px 5px rgba(0, 0, 0, 0);
  &:hover {
    background-color: var(--lightGray);
    box-shadow: 0px 5px 5px -2px #000000, -2px 3px 15px 5px rgba(0, 0, 0, 0);
    transform: translateY(3px);
    p {
      transform: translateY(-3px);
      text-shadow: 0px 2px 2px #787878, -2px 3px 5px rgba(0, 0, 0, 0);
    }
  }
  &:active {
    background-color: var(--green);
    box-shadow: 0px 5px 5px -2px #000000, -2px 3px 15px 5px rgba(0, 0, 0, 0);
    transform: translateY(8px);
    p {
      transform: translateY(-8px);
      text-shadow: 0px 3px 3px #787878, -2px 3px 5px rgba(0, 0, 0, 0);
    }
  }
`;
