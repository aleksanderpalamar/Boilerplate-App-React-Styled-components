import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: ${props => props.theme.fonts.body};
    font-size: ${props => props.theme.fontSizes.md};
    line-height: ${props => props.theme.lineHeights.normal};
    color: ${props => props.theme.colors.gray[100]};
    background-color: ${props => props.theme.colors.gray[900]};
  }
`;