import { css } from "@emotion/css";
import { Theme } from "@mui/material";
import { drawerWidth } from "../NavBar/constants";

export const getClasses = (theme: Theme) => ({
  topBar: css({
    width: `calc(100% - ${drawerWidth}px)`.toString(),
    marginLeft: `calc(${drawerWidth}px)`.toString(),
    position: "relative",
    borderRadius: "0 20px 0 0",
    background: theme.palette.primary.main,
  }),
  rightSideStack: css({
    position: "fixed",
    alignItems: "center",
    right: "40px",
    gap: "10px",
  }),
  content: css({
    marginLeft: "20px",
    height: "8rem",
    lineHeight: "30px",
  }),
  title: css({
    letterSpacing: "1px",
    fontSize: "1.6rem",
    fontWeight: "500",
  }),
  ButtonIcon: css({
    color: theme.palette.primary.contrastText,
    border: "none",
  }),
  buttonWrapper: css({
    border: "1px solid",
    borderRadius: "0.5rem",
    height: "45px",
    width: "45px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }),
});
