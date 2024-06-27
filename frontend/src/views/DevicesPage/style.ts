import { css } from "@emotion/css";

export const getClasses = () => ({
  container: css({
    position: "relative",
    overflowY: "hidden",
    margin: "10px",
  }),
  graphsContainer: css({
    width: "20%",
    height: "100%",
    gap: "20px",
  }),
});
