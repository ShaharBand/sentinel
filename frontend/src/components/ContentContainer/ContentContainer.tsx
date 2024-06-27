import { FC } from "react";
import { Box, CssBaseline, useTheme } from "@mui/material";
import { getClasses } from "./style";
import { ContentContainerProps } from "./types";

export const ContentContainer: FC<ContentContainerProps> = ({ children }) => {
  const theme = useTheme();
  const classes = getClasses(theme);

  return (
    <Box className={classes.container}>
      <CssBaseline />
      <Box component="main" className={classes.content}>
        {children}
      </Box>
    </Box>
  );
};
