import { FC, useContext } from "react";
import { getClasses } from "./style";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import {
  Stack,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
  useTheme,
} from "@mui/material";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { ColorModeContext } from "../../context/ThemeContext/ThemeContext";
import { drawerWidth } from "../NavBar/constants";

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
    <Box>
      <AppBar
        className={classes.nav}
        position="static"
        sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
      >
        <Toolbar className={classes.topBar}>
          <Typography variant="h4" noWrap component="div">
            Overview
          </Typography>
          <Stack className={classes.colorStack} direction="row" spacing={3}>
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
    </Box>
  );
};
