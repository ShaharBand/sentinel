import { css } from "@emotion/css";
import { Theme } from "@mui/material";

export const getClasses = (theme: Theme) => ({
  container: css({
    background: theme.palette.primary.main,
    height: "calc(100vh - 20px)",
    margin: "10px",
    borderRadius: "2rem",
  }),
});
