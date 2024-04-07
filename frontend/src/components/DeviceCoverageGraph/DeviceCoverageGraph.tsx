import React from "react";
import { Box, Stack, Typography, useTheme } from "@mui/material";
import { getClasses } from "./style";
import { BarChart, SparkLineChart } from "@mui/x-charts";

const DeviceCoverageGraph: React.FC = () => {
  const theme = useTheme();
  const classes = getClasses(theme);

  return (
    <Stack className={classes.chartBox}>
      <Typography variant="h6" className={classes.chartTitle}>
        Coverage Distribution
      </Typography>
      <Stack className={classes.chartContainer}>
        <BarChart
          series={[{ data: [100, 25, 20] }]}
          xAxis={[
            {
              scaleType: "band",
              data: ["Sentinel", "Mcafee", "DNS"],
            },
          ]}
        />
      </Stack>
    </Stack>
  );
};

export default DeviceCoverageGraph;
