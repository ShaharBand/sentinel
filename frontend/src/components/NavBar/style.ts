import { css } from "@emotion/css";
import { Theme } from "@mui/material";
import { drawerWidth } from "./constants";

export const getClasses = (theme: Theme) => ({
  navDrawer: css({}),

  drawerPaper: css({
    margin: "10px",
    maxHeight: "calc(100% - 20px)",
    width: `${drawerWidth}px`.toString(),
    borderRadius: "2rem 0 0 2rem",
    backgroundColor: theme.palette.primary.main,
  }),

  logoImage: css({
    width: "30px",
    marginRight: "20px",
  }),
  logoBar: css({
    height: "8rem",
    lineHeight: "30px",
    paddingLeft: "30px",
  }),
  headline: css({
    textTransform: "uppercase",
    letterSpacing: "3px",
    fontSize: "1.25rem",
    fontWeight: "500",
  }),
  bottomList: css({
    position: "fixed",
    bottom: "30px",
    width: "inherit",
  }),
  navItem: css({
    borderRadius: "1rem",
  }),
});
