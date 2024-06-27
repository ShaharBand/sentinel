import { css } from "@emotion/css";
import { Theme } from "@mui/material";
import { drawerWidth } from "../NavBar/constants";

export const getClasses = (theme: Theme) => ({
  container: css({
    background: theme.palette.primary.main,
    marginLeft: `calc(${drawerWidth}px)`.toString(),
    padding: "10px",
    width: `calc(100% - ${drawerWidth}px)`.toString(),
    height: "calc(100vh - 20px - 8rem)",
    borderRadius: "0 0 2rem 0",
  }),
  content: css({
    marginLeft: "20px",
    marginRight: "20px",
  }),
});
