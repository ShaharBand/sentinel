import { createContext, FC, useMemo } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { GlobalStyles, PaletteMode } from "@mui/material";
import useLocalStorage from "use-local-storage";
import { ContextProps } from "./types";
import { darkTheme } from "./darkTheme";
import { lightTheme } from "./lightTheme";
import "@fontsource/roboto";

export const ColorModeContext = createContext({
  toggleColorMode: () => {},
  mode: "dark",
});

export const ThemeContext: FC<ContextProps> = ({ children }) => {
  const [mode, setMode] = useLocalStorage<PaletteMode>("colorMode", "dark");

  const toggleColorMode = () =>
    setMode((prevMode: PaletteMode | undefined) =>
      prevMode === "light" ? "dark" : "light"
    );

  const { palette } = createTheme();

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          ...(mode === "light" ? lightTheme : darkTheme),
        },
        typography: {
          fontFamily: "Roboto",
          fontWeightMedium: 600,
        },
      }),
    [mode, palette.grey]
  );
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles
        styles={{
          "*::-webkit-scrollbar": {
            width: "0.5em",
          },
          "*::-webkit-scrollbar-thumb": {
            backgroundColor: theme.palette.secondary.main,
            borderRadius: "8px",
          },

          "*::-webkit-scrollbar-track": {
            backgroundColor: "#E7E7E7",
            borderRadius: "8px",
          },
          body: {
            backgroundColor: theme.palette.background.default,
          },
        }}
      />
      <ColorModeContext.Provider value={{ toggleColorMode, mode }}>
        {children}
      </ColorModeContext.Provider>
    </ThemeProvider>
  );
};
