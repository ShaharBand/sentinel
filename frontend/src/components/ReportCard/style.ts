import { css } from "@emotion/css";
import { Theme } from "@mui/material";

export const getClasses = (theme: Theme) => ({
  stackContainer: css({
    justifyContent: "space-between",
    whiteSpace: "nowrap",
    alignItems: "center",
    gap: "10px",
    marginBottom: "20px",
    backgroundColor: theme.palette.secondary.main,
    borderRadius: "0.5rem",
  }),
  iconBox: css({
    padding: "15px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    "& *": {
      width: "30px",
      height: "30px",
    },
  }),
  labelStack: css({
    justifyContent: "space-between",
    whiteSpace: "nowrap",
  }),
  iconWarning: css({
    color: theme.palette.accent.main,
    marginRight: "10px",
  }),
  reportButton: css({
    marginRight: "15px",
    backgroundColor: theme.palette.accent.main,
    color: theme.palette.accent.contrastText,
    transition: "scale ease-in-out 0.2s",

    ":hover": {
      backgroundColor: theme.palette.accent.dark,
      scale: "1.02",
    },
  }),
});
