import { FC } from "react";
import { Box, Button, Stack, Typography, useTheme } from "@mui/material";
import { getClasses } from "./style";

import SummarizeIcon from "@mui/icons-material/Summarize";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";

export const ReportCard: FC<{}> = ({}) => {
  const theme = useTheme();
  const classes = getClasses(theme);
  return (
    <Stack direction="row" className={classes.stackContainer}>
      <Stack direction="row">
        <Box className={classes.iconBox}>
          <SummarizeIcon />
        </Box>

        <Stack className={classes.labelStack} direction="column">
          <Typography variant="h6">Devices Database Report</Typography>
          <Typography>Today - April 15, 2023</Typography>
        </Stack>
      </Stack>
      <Stack direction="row">
        <WarningAmberIcon className={classes.iconWarning} />
        <Typography>there are 21 new devices recorded.</Typography>
      </Stack>
      <Button className={classes.reportButton}>Download</Button>
    </Stack>
  );
};
