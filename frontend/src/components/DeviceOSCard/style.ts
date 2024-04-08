import { css } from "@emotion/css";
import { Theme } from "@mui/material";

export const getClasses = (theme: Theme) => ({
  cardBox: css({
    width: "100%",
    marginBottom: "20px",
    backgroundColor: theme.palette.secondary.main,
    borderRadius: "0.5rem",
    padding: "10px 20px 10px 20px",
    height: "calc((80vh -40px - 8rem)/3)",
  }),
  contentBox: css({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  }),

  osImage: css({
    margin: "10px",
    objectFit: "contain",
    height: "60px",
    maxWidth: "70%",
  }),

  modalBtn: css({
    marginLeft: "auto",
  }),
});
