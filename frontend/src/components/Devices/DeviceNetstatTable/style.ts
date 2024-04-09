import { css } from "@emotion/css";
import { Theme } from "@mui/material";

export const getClasses = (theme: Theme) => ({
  contentBox: css({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    fontSize: "small",
  }),
  modalBtn: css({
    marginLeft: "auto",
  }),
  tableContainer: css({
    overflowY: "auto",
    maxHeight: "25rem",
  }),
  tableHeader: css({ background: theme.palette.primary.light }),
});
