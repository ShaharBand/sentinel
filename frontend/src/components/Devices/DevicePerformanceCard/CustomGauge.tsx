import { Gauge, gaugeClasses } from "@mui/x-charts/Gauge";
import { useTheme } from "@mui/material";
import { CustomGaugeProps } from "./types";

const CustomGauge: React.FC<CustomGaugeProps> = ({ value }) => {
  const theme = useTheme();

  const getColor = (value: number): string => {
    if (value < 50) return theme.palette.success.main;
    if (value < 70) return theme.palette.partialError.main;
    return theme.palette.error.main;
  };

  return (
    <Gauge
      width={110}
      height={110}
      value={value}
      startAngle={-110}
      endAngle={110}
      text={({ value, valueMax }) => `${value} / ${valueMax}`}
      sx={() => ({
        [`& .${gaugeClasses.valueArc}`]: {
          fill: getColor(value),
        },
      })}
    />
  );
};

export default CustomGauge;
