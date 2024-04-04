import React from "react";
import { Box, Typography, useTheme } from "@mui/material";
import { getClasses } from "./style";
import { SparkLineChart } from "@mui/x-charts";

const DeviceCoverageGraph: React.FC = () => {
  const theme = useTheme();
  const classes = getClasses(theme);

  return (
    <Box className={classes.chartBox}>
      <Typography variant="h6" className={classes.chartTitle}>
        Coverage Distribution
      </Typography>
      <SparkLineChart
        plotType="bar"
        data={[30, 25, 20]}
        showTooltip
        showHighlight
        xAxis={{
          data: ["Sentinel", "Mcafee", "DNS"],
        }}
      />
    </Box>
  );
};

export default DeviceCoverageGraph;
