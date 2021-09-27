import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
:root{
    --white: #FAFFF6;
    --black: #232020;
    --red: #D12727;
    --green: #B3D797;
    /* --pink: #F5AC94; */
    --pink: #f5e094;

    --lightGray: #D6DCDA;
    --darkGray: #555555;
    --gray: #C4C4C4;
    --yellow: #f5e094;
}
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
    height: 100vh;
  background-color: var(--lightGray);

}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
h1{
    font-family: 'IBM Plex Sans', sans-serif;
    font-weight: 700;
    color: var(--black);
}

 h2 , h3 , h4 , h5 , h6{
    font-family: 'IBM Plex Sans', sans-serif;
    font-weight: 400;
    color: var(--black);
}

p{
  font-family: Yrsa, serif;

}
a{
  text-decoration: none;
}
`;
