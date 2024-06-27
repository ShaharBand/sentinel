import { css } from "@emotion/css";
import { Theme } from "@mui/material";

export const getClasses = (theme: Theme) => ({
  container: css({
    width: "1000px", 
    background: theme.palette.background.default,
    color: "red",
  }), 
});
