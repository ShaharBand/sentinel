declare module "@mui/material/styles" {
  // eslint-disable-next-line
  interface PaletteOptions extends ThemePalette {}

  // eslint-disable-next-line
  interface Palette extends ThemePalette {}
}

export interface ThemePalette {
  primary: {
    main: string;
    contrastText: string;
  };
  secondary: {
    main: string;
    contrastText: string;
  };
  accent: {
    main: string;
    dark: string;
    contrastText: string;
  };
  text: {
    primary: string;
    secondary: string;
  };
  background: {
    default: string;
  };
  error: {
    main: string;
  };
  partialError: {
    main: string;
  };
  valid: {
    main: string;
  };
}

export interface ContextProps {
  children: JSX.Element[] | JSX.Element;
}
