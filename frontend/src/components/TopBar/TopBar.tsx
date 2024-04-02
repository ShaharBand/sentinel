import { FC, useContext } from "react";
import { getClasses } from "./style";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import {
  Box,
  IconButton,
  Stack,
  ToggleButton,
  Typography,
  useTheme,
} from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { ColorModeContext } from "../../context/ThemeContext/ThemeContext";

export const TopBar: FC<{}> = ({}) => {
  const theme = useTheme();
  const classes = getClasses(theme);

  const { toggleColorMode, mode } = useContext(ColorModeContext);
  const handleToggleColorMode = () => {
    toggleColorMode();
  };

  return (
    <AppBar className={classes.topBar} elevation={0}>
      <Toolbar className={classes.content}>
        <Typography className={classes.title} variant="h4" noWrap>
          Overview
        </Typography>
        <Stack className={classes.rightSideStack} direction="row-reverse">
          <Box className={classes.buttonWrapper}>
            <IconButton>
              <PersonIcon className={classes.ButtonIcon} />
            </IconButton>
          </Box>

          <Box
            alignItems="center"
            justifyContent="center"
            className={classes.buttonWrapper}
          >
            <ToggleButton
              value={mode}
              onClick={handleToggleColorMode}
              className={classes.ButtonIcon}
              aria-label="Toggle dark mode"
            >
              {mode === "light" ? (
                <LightModeIcon className={classes.ButtonIcon} />
              ) : (
                <DarkModeIcon className={classes.ButtonIcon} />
              )}
            </ToggleButton>
          </Box>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};
