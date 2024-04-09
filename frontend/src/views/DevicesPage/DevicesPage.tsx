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
import { ReportCard } from "../../components/Devices/ReportCard/ReportCard";
import { DevicesTable } from "../../components/Devices/DevicesTable/DevicesTable";
import DeviceOSPieChart from "../../components/Devices/DeviceOSPieChart/DeviceOSPieChart";
import DeviceCoverageGraph from "../../components/Devices/DeviceCoverageGraph/DeviceCoverageGraph";

export const DevicesPage: FC = () => {
  const theme = useTheme();
  const classes = getClasses(theme);

  return (
    <Box className={classes.container}>
      <TopBar title="Overview" />
      <NavBar />
      <ContentContainer>
        <Stack direction="row">
          <StatItem
            icon={<DevicesRoundedIcon />}
            title="Total Devices"
            value={10}
            description="The total amount of unique records in the devices database"
            offset={0}
          />
          <StatItem
            icon={<NetworkPingRoundedIcon />}
            title="Reachable Devices"
            value={10}
            description="The total amount of devices that were pingable in the last scan"
            offset={-1.2}
          />
          <StatItem
            icon={<LeakAddRoundedIcon />}
            title="Communicating Devices"
            value={10}
            description="The total amount of devices that were communicating through there agent in the last scan"
            offset={7.6}
          />
          <StatItem
            icon={<SmartToyRoundedIcon />}
            title="Total Agents"
            value={10}
            description="The total types of agents deployed in the current devices recorded in the database"
            offset={11}
          />
          <StatItem
            icon={<TaskIcon />}
            title="Last Complete Scan"
            value={"03/04/2024"}
            description="The last date we scanned the entire device list records from the database"
            offset={0}
          />
        </Stack>
        <ReportCard />
        <Stack direction="row">
          <DevicesTable />
          <Stack direction="column" className={classes.graphsContainer}>
            <DeviceOSPieChart />
            <DeviceCoverageGraph />
          </Stack>
        </Stack>
      </ContentContainer>
    </Box>
  );
};
