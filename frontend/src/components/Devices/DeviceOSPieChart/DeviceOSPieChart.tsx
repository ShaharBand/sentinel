import { PieChart } from "@mui/x-charts/PieChart";
import { Card, Typography, useTheme } from "@mui/material";
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
      innerRadius: "40%",
      outerRadius: "80%",
      paddingAngle: 5,
      cornerRadius: 5,
      startAngle: 0,
      endAngle: 360,
    },
  ];
  const theme = useTheme();
  const classes = getClasses(theme);

  return (
    <Card className={classes.chartCard}>
      <Typography variant="h6" className={classes.chartTitle}>
        OS Distribution
      </Typography>
      <PieChart series={series} />
    </Card>
  );
};

export default DeviceOSPieChart;
