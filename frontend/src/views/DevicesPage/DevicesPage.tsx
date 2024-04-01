import { FC } from "react";
import { Box, useTheme } from "@mui/material";
import { getClasses } from "./style";

import DevicesContainer from "../../components/DevicesContainer/DevicesContainer";
import { NavBar } from "../../components/NavBar/NavBar";
import { TopBar } from "../../components/TopBar/TopBar";

export const DevicesPage: FC = () => {
  const theme = useTheme();
  const classes = getClasses(theme);

  return (
    <Box className={classes.container}>
      <TopBar />
      <NavBar />
    </Box>
  );
};
