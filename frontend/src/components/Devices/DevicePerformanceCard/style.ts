import { css } from "@emotion/css";
import { Theme } from "@mui/material";

export const getClasses = (theme: Theme) => ({
  cardBox: css({
    width: "25%",
    marginBottom: "20px",
    backgroundColor: theme.palette.secondary.main,
    borderRadius: "0.5rem",
    padding: "10px 20px 10px 20px",
  }),
  contentBox: css({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    fontSize: "small",
    paddingBottom: "10px",
  }),
  modalBtn: css({
    marginLeft: "auto",
  }),
  gaugeBox: css({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  }),
  gaugeSubtitle: css({
    marginTop: "-30px",
  }),
});
