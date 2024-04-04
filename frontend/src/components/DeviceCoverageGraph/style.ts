import { css } from "@emotion/css";
import { Theme } from "@mui/material";

export const getClasses = (theme: Theme) => ({
  chartBox: css({
    backgroundColor: theme.palette.secondary.main,
    width: "20%",
    borderRadius: "0.5rem",
    height: "calc((80vh - 20px - 8rem)/2)",
    marginLeft: "20px",
  }),
  chartTitle: css({
    padding: "10px 20px 0 20px",
    marginBottom: "-30px",
  }),
});
