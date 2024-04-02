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
  colorStack: css({
    position: "fixed",
    right: "40px",
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
});
