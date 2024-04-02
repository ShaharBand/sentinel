import { useTheme } from "@mui/material";
import { getClasses } from "./style";
import { FC } from "react";

export const StatItem: FC<{}> = ({}) => {
  const theme = useTheme();
  const classes = getClasses(theme);
  return <></>;
};
