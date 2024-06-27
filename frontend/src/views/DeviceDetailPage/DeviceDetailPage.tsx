import { FC } from "react";
import { Box, Stack } from "@mui/material";
import { getClasses } from "./style";

import { NavBar } from "../../components/NavBar/NavBar";
import { TopBar } from "../../components/TopBar/TopBar";
import { ContentContainer } from "../../components/ContentContainer/ContentContainer";
import { DeviceDesciptionCard } from "../../components/Devices/DeviceDesciptionCard/DeviceDesciptionCard";
import DeviceOSCard from "../../components/Devices/DeviceOSCard/DeviceOSCard";
import DevicePerformanceCard from "../../components/Devices/DevicePerformanceCard/DevicePerformanceCard";
import DeviceTapsCard from "../../components/Devices/DeviceTapsCard/DeviceTapsCard";
import DeviceAgentTapsCard from "../../components/Devices/DeviceAgentTapsCard/DeviceAgentTapsCard";

export const DeviceDetailPage: FC = () => {
  const classes = getClasses();

  return (
    <Box className={classes.container}>
      <TopBar title="Overview - #000014321 (Shahar-PC)" />
      <NavBar />
      <ContentContainer>
        <Stack direction="row" className={classes.layoutStack}>
          <DeviceDesciptionCard />
          <DeviceOSCard />
          <DevicePerformanceCard />
        </Stack>
        <Stack direction="row" className={classes.layoutStack}>
          <DeviceTapsCard />
          <DeviceAgentTapsCard />
        </Stack>
      </ContentContainer>
    </Box>
  );
};
