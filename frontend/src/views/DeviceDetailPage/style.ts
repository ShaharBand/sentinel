import { css } from "@emotion/css";

export const getClasses = () => ({
  container: css({
    position: "relative",
    overflowY: "hidden",
    margin: "10px",
  }),
  layoutStack: css({
    gap: "20px",
    height: "100%",
  }),
});
