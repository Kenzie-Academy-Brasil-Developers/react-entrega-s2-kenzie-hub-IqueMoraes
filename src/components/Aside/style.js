import styled from "styled-components";


export const Aside = styled.aside`
  width: 100vw;
  height: auto;
  background-color: var(--yellow);
  color: var(--black);
  > h3{
      font-size: 1.3rem;
      padding:2rem;
  }

  @media (min-width: 1000px) {
    width: 20vw;
    height: 100vh;
  }
`;

export const UList = styled.ul ` 
padding-top:2rem;
width: 100%;
box-sizing: border-box;



>li{
    box-sizing: border-box;
    width:100%;
    text-align: left;
    font-size: 1rem;
    /* font-weight: 700; */
    padding: 0.4rem 0;
    padding-left: 1rem;
    margin-bottom: 1.2rem;
    font-family: 'IBM Plex Sans',sans-serif;
  box-shadow: 0px 10px 13px -7px #000000, -2px 3px 15px 5px rgba(0, 0, 0, 0);

    
    a{
        width: 100%;
        text-decoration: none;
        color: var(--black);
    }
}

`