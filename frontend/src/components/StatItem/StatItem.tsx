import { FC } from "react";
import { Box, Stack, Tooltip, Typography, useTheme } from "@mui/material";
import { getClasses } from "./style";
import { StatItemProps } from "./types";

import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import TrendingDownIcon from "@mui/icons-material/TrendingDown";

export const StatItem: FC<StatItemProps> = ({
  icon,
  title,
  value,
  description,
  offset,
}) => {
  const theme = useTheme();
  const classes = getClasses(theme);
  return (
    <Stack direction="row" className={classes.stackContainer}>
      <Box className={classes.iconBox}>{icon}</Box>

      <Stack className={classes.contentStack} direction="column">
        <Tooltip title={description} arrow>
          <Typography variant="h6">{title}</Typography>
        </Tooltip>
        <Stack direction="row" className={classes.offsetStack}>
          <Typography>{value}</Typography>
          <Stack direction="row" spacing={1}>
            {offset !== 0 &&
              (offset > 0 ? (
                <Typography className={classes.greenIcon}>{offset}%</Typography>
              ) : (
                <Typography className={classes.redIcon}>{offset}%</Typography>
              ))}

            {offset !== 0 &&
              (offset > 0 ? (
                <TrendingUpIcon className={classes.greenIcon} />
              ) : (
                <TrendingDownIcon className={classes.redIcon} />
              ))}
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};
