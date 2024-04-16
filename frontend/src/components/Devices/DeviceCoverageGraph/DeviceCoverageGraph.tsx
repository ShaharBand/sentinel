import useSWR from "swr";
import { Card, Stack, Typography, useTheme } from "@mui/material";
import { getClasses } from "./style";
import { BarChart } from "@mui/x-charts";

const fetcher = async (url: string, ...args: RequestInit[]): Promise<any> => {
  const response = await fetch(url, ...args);
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};

const DeviceCoverageGraph: React.FC = () => {
  const theme = useTheme();
  const classes = getClasses(theme);

  const {
    data: chartData,
    error,
    isValidating,
  } = useSWR(
    "http://localhost:5000/api/statistics/devices/security-software-coverage",
    fetcher
  );

  if (error) return <div className="failed">{error.toString()}</div>;
  if (isValidating) return <div className="Loading">Loading...</div>;

  return (
    <Card className={classes.chartBox}>
      <Typography variant="h6" className={classes.chartTitle}>
        Coverage Distribution
      </Typography>
      <Stack className={classes.chartContainer}>
        {chartData && (
          <BarChart
            series={[{ data: chartData.values }]}
            xAxis={[
              {
                scaleType: "band",
                data: chartData.labels,
              },
            ]}
          />
        )}
      </Stack>
    </Card>
  );
};

export default DeviceCoverageGraph;
