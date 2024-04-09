import { css } from "@emotion/css";
import { Theme } from "@mui/material";

export const getClasses = (theme: Theme) => ({
  container: css({
    position: "relative",
    overflowY: "hidden",
    margin: "10px",
  }),
  layoutStack: css({
    gap: "20px",
    height: "100%",
  }),
});
