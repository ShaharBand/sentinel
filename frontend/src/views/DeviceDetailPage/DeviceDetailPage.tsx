import { FC } from "react";
import { Box, Stack, useTheme } from "@mui/material";
import { getClasses } from "./style";

import { NavBar } from "../../components/NavBar/NavBar";
import { TopBar } from "../../components/TopBar/TopBar";
import { ContentContainer } from "../../components/ContentContainer/ContentContainer";
import { StatItem } from "../../components/StatItem/StatItem";

import DevicesRoundedIcon from "@mui/icons-material/DevicesRounded";
import NetworkPingRoundedIcon from "@mui/icons-material/NetworkPingRounded";
import LeakAddRoundedIcon from "@mui/icons-material/LeakAddRounded";
import SmartToyRoundedIcon from "@mui/icons-material/SmartToyRounded";
import TaskIcon from "@mui/icons-material/Task";
import { ReportCard } from "../../components/ReportCard/ReportCard";
import { DevicesTable } from "../../components/DevicesTable/DevicesTable";
import DeviceOSPieChart from "../../components/DeviceOSPieChart/DeviceOSPieChart";
import DeviceCoverageGraph from "../../components/DeviceCoverageGraph/DeviceCoverageGraph";

export const DeviceDetailPage: FC = () => {
  const theme = useTheme();
  const classes = getClasses(theme);

  return (
    <Box className={classes.container}>
      <TopBar title="Overview - #000014321 (Shahar-PC)" />
      <NavBar />
      <ContentContainer>Device Details</ContentContainer>
    </Box>
  );
};
