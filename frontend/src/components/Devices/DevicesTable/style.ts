import { css } from "@emotion/css";
import { Theme } from "@mui/material";

export const getClasses = (theme: Theme) => ({
  tableBox: css({
    backgroundColor: theme.palette.secondary.main,
    width: "80%",
    borderRadius: "0.5rem",
    height: "calc(80vh - 20px - 8rem)",
  }),
  dataGrid: css({
    border: 0,
    overflow: "hidden !important",

    "& .MuiDataGrid-cell:hover": {
      color: theme.palette.accent.main,
      cursor: "pointer",
    },
  }),
  tagStack: css({
    justifyContent: "flex-start",
    whiteSpace: "wrap",
  }),
  tag: css({
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    marginRight: "5px",
    marginTop: "5px",
    padding: "2.5px 10px",
    borderRadius: "1rem",
  }),

  online: css({
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.success.main,
    padding: "2.5px 10px",
    borderRadius: "1rem",
  }),
  offline: css({
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.error.main,
    padding: "2.5px 10px",
    borderRadius: "1rem",
  }),
  rejected: css({
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.partialError.main,
    padding: "2.5px 10px",
    borderRadius: "1rem",
  }),
  link: css({
    color: theme.palette.accent.main,
  }),
});
