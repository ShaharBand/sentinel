import { FC } from "react";
import { Card, List, Typography, useTheme } from "@mui/material";
import { getClasses } from "./style";
import DeviceTags from "../DeviceTags/DeviceTags";

export const DeviceDesciptionCard: FC<{}> = ({}) => {
  const theme = useTheme();
  const classes = getClasses(theme);
  return (
    <Card className={classes.cardContainer}>
      <Typography variant="h6" className={classes.cardTitle}>
        Description
      </Typography>
      <DeviceTags />
      <List className={classes.contentList}>
        <Typography className={classes.contentText}>
          test test test test test test test test
        </Typography>
      </List>
    </Card>
  );
};
