import { css } from "@emotion/css";
import { Theme } from "@mui/material";

export const getClasses = (theme: Theme) => ({
  nav: css({
    backgroundColor: theme.palette.primary.main,
    position: "relative",
  }),
  colorStack: css({
    margin: "1vh",
  }),
  topBar: css({
    height: "8rem",
    lineHeight: "30px",
  }),
});
