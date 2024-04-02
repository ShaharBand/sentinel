import { FC, useContext } from "react";
import { getClasses } from "./style";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import {
  Divider,
  Stack,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
  useTheme,
} from "@mui/material";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { ColorModeContext } from "../../context/ThemeContext/ThemeContext";

export const TopBar: FC<{}> = ({}) => {
  const theme = useTheme();
  const classes = getClasses(theme);

  const { toggleColorMode, mode } = useContext(ColorModeContext);
  const handleAlignment = (
    _: React.MouseEvent<HTMLElement>,
    newAlignment: string | null
  ) => {
    if (newAlignment !== null) {
      toggleColorMode();
    }
  };

  return (
    <AppBar className={classes.topBar} elevation={0}>
      <Toolbar className={classes.content}>
        <Typography className={classes.title} variant="h4" noWrap>
          Overview
        </Typography>
        <Stack className={classes.colorStack}>
          <ToggleButtonGroup
            value={mode}
            exclusive
            onChange={handleAlignment}
            aria-label="text alignment"
          >
            <ToggleButton value="light" aria-label="left aligned">
              <LightModeIcon />
            </ToggleButton>
            <ToggleButton value="dark" aria-label="right aligned">
              <DarkModeIcon />
            </ToggleButton>
          </ToggleButtonGroup>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};
