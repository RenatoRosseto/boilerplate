import theme from 'styles/theme';

//inferencia de tipos
type Theme = typeof theme;

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
