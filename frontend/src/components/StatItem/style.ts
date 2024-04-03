import { css } from "@emotion/css";
import { Theme } from "@mui/material";

export const getClasses = (theme: Theme) => ({
  stackContainer: css({
    alignItems: "center",
    width: "20%",
    gap: "10px",
    marginBottom: "20px",
  }),
  iconBox: css({
    backgroundColor: theme.palette.secondary.main,
    padding: "15px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "0.5rem",
    "& *": {
      width: "30px",
      height: "30px",
    },
  }),
  contentStack: css({
    height: "60px",
    display: "flex",
    justifyContent: "space-between",
    minWidth: "70%",
  }),
  offsetStack: css({
    display: "flex",
    justifyContent: "space-between",
  }),

  greenIcon: css({
    color: theme.palette.success.main,
  }),
  redIcon: css({
    color: theme.palette.error.main,
  }),
});
