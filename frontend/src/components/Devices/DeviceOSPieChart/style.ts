import { css } from "@emotion/css";
import { Theme } from "@mui/material";

export const getClasses = (theme: Theme) => ({
  chartCard: css({
    backgroundColor: theme.palette.secondary.main,
    borderRadius: "0.5rem",
    height: "calc((80vh - 40px - 8rem)/2)",
    marginLeft: "20px",
  }),
  chartTitle: css({
    padding: "10px 20px 10px 20px",
    marginBottom: "-40px",
  }),
});
