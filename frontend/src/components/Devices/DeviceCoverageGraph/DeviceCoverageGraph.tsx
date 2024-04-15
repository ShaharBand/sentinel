import useSWR from "swr";
import { Card, Stack, Typography, useTheme } from "@mui/material";
import { getClasses } from "./style";
import { BarChart } from "@mui/x-charts";
import { Key } from "react";

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
  } = useSWR("https://restcountries.com/v2/all", fetcher);

  if (error) return <div className="failed">failed to load</div>;
  if (isValidating) return <div className="Loading">Loading...</div>;

  return (
    <Card className={classes.chartBox}>
      z
      <div>
        {chartData &&
          chartData.map(
            (
              country: { flags: { png: string | undefined } },
              index: Key | null | undefined
            ) => (
              <img key={index} src={country.flags.png} alt="flag" width={100} />
            )
          )}
      </div>
    </Card>
  );
};

export default DeviceCoverageGraph;
