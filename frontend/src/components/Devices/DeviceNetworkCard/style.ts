import { css } from "@emotion/css";
import { Theme } from "@mui/material";

export const getClasses = (theme: Theme) => ({
  cardContainer: css({
    marginBottom: "20px",
    backgroundColor: theme.palette.secondary.main,
    borderRadius: "0.5rem",
    padding: "10px 20px 10px 20px",
    width: "50%",
    display: "flex",
    height: "100%",
  }),
  TabsContainer: css({
    "& .MuiTabs-indicator": {
      color: theme.palette.accent.main,
      backgroundColor: theme.palette.accent.main,
    },
    "& .Mui-selected": {
      color: theme.palette.accent.main,
    },
  }),
});
