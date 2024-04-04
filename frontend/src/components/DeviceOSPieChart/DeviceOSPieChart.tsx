import { PieChart } from "@mui/x-charts/PieChart";
import { Box, Typography, useTheme } from "@mui/material";
import { getClasses } from "./style";

const DeviceOSPieChart = () => {
  const series = [
    {
      data: [
        { name: "Windows", value: 30, label: "Windows" },
        { name: "MacOS", value: 25, label: "MacOS" },
        { name: "Linux", value: 20, label: "Linux" },
        { name: "iOS", value: 15, label: "iOS" },
        { name: "Android", value: 10, label: "Android" },
      ],
      innerRadius: 45,
      outerRadius: 80,
      paddingAngle: 5,
      cornerRadius: 5,
      startAngle: 0,
      endAngle: 360,
      cx: 100,
      cy: 150,
    },
  ];
  const theme = useTheme();
  const classes = getClasses(theme);

  return (
    <Box className={classes.chartBox}>
      <Typography variant="h6" className={classes.chartTitle}>
        OS Distribution
      </Typography>
      <PieChart series={series} />
    </Box>
  );
};

export default DeviceOSPieChart;
