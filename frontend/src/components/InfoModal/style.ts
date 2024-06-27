import { css } from "@emotion/css";
import { Theme } from "@mui/material";

export const getClasses = (theme: Theme) => ({
  modalCard: css({
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    background: theme.palette.background.paper,
    padding: "10px 20px",
    maxHeight: "80vh",
    overflowY: "auto",
  }),
});
