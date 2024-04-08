import { FC } from "react";
import { Box, Stack, useTheme } from "@mui/material";
import { getClasses } from "./style";

import { NavBar } from "../../components/NavBar/NavBar";
import { TopBar } from "../../components/TopBar/TopBar";
import { ContentContainer } from "../../components/ContentContainer/ContentContainer";
import { DeviceDesciptionCard } from "../../components/DeviceDesciptionCard/DeviceDesciptionCard";
import DeviceOSCard from "../../components/DeviceOSCard/DeviceOSCard";
import DevicePerformanceCard from "../../components/DevicePerformanceCard/DevicePerformanceCard";

export const DeviceDetailPage: FC = () => {
  const theme = useTheme();
  const classes = getClasses(theme);

  return (
    <Box className={classes.container}>
      <TopBar title="Overview - #000014321 (Shahar-PC)" />
      <NavBar />
      <ContentContainer>
        <Stack direction="row" className={classes.layoutStack}>
          <DeviceDesciptionCard />
          <DeviceOSCard />
        </Stack>
        <Stack direction="row" className={classes.layoutStack}>
          <DevicePerformanceCard />
          <DevicePerformanceCard />
          <DevicePerformanceCard />
          <DevicePerformanceCard />
        </Stack>
      </ContentContainer>
    </Box>
  );
};
