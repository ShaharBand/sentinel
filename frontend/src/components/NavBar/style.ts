import { css } from "@emotion/css";
import { Theme } from "@mui/material";
import { drawerWidth } from "./constants";

export const getClasses = (theme: Theme) => ({
  navDrawer: css({
    width: `${drawerWidth}px`,
    flexShrink: 0,
    boxSizing: "border-box",
    backgroundColor: theme.palette.primary.main,
    padding: "20px 0 20px",
  }),

  drawerPaper: css({
    margin: "10px",
    width: `${drawerWidth}px`,
    backgroundColor: theme.palette.primary.main,
  }).toString(),

  logoImage: css({
    width: "30px",
    marginRight: "20px",
    marginLeft: "-10px",
  }),
  logoContainer: css({
    width: "200px",
  }),

  topBar: css({
    height: "8rem",
    lineHeight: "30px",
  }),
});
