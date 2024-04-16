import useSWR from "swr";
import { Card, Stack, Typography, useTheme } from "@mui/material";
import { getClasses } from "./style";
import { BarChart } from "@mui/x-charts";
import ErrorIcon from "@mui/icons-material/Error";

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

  return (
    <Card className={classes.chartBox}>
      <Typography variant="h6" className={classes.chartTitle}>
        Coverage Distribution
      </Typography>
      <Stack className={classes.chartContainer}>
        {error && <>{error.toString()}</>}
        {isValidating && <>Loading...</>}
        {!error && !isValidating && chartData && (
          /*<BarChart
            series={[{ data: chartData.values }]}
            xAxis={[
              {
                scaleType: "band",
                data: chartData.labels,
              },
            ]}
          />*/
          <>
            {Object.entries(chartData).map(([software, coverage], index) => (
              <Typography key={index}>
                {software}: {coverage}
              </Typography>
            ))}
          </>
        )}
      </Stack>
    </Card>
  );
};

export default DeviceCoverageGraph;
