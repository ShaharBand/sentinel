import { css } from "@emotion/css";
import { Theme } from "@mui/material";

export const getClasses = (theme: Theme) => ({
  cardContainer: css({
    marginBottom: "20px",
    backgroundColor: theme.palette.secondary.main,
    borderRadius: "0.5rem",
    padding: "10px 20px 10px 20px",
    height: "calc((80vh - 40px - 8rem)/3)",
  }),
  cardTitle: css({
    marginBottom: "10px",
  }),
  contentList: css({
    marginTop: "10px",
    overflowY: "auto",
    height: "auto",
  }),
  contentText: css({
    maxHeight: "5vh",
    marginBottom: "20px",
  }),
});
