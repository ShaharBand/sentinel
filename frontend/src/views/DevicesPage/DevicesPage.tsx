import { FC } from "react";
import { Box, Stack, Typography, useTheme } from "@mui/material";
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

export const DevicesPage: FC = () => {
  const theme = useTheme();
  const classes = getClasses(theme);

  return (
    <Box className={classes.container}>
      <TopBar />
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
        <Typography paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Rhoncus
          dolor purus non enim praesent elementum facilisis leo vel. Risus at
          ultrices mi tempus imperdiet. Semper risus in hendrerit gravida rutrum
          quisque non tellus. Convallis convallis tellus id interdum velit
          laoreet id donec ultrices. Odio morbi quis commodo odio aenean sed
          adipiscing. Amet nisl suscipit adipiscing bibendum est ultricies
          integer quis. Cursus euismod quis viverra nibh cras. Metus vulputate
          eu scelerisque felis imperdiet proin fermentum leo. Mauris commodo
          quis imperdiet massa tincidunt. Cras tincidunt lobortis feugiat
          vivamus at augue. At augue eget arcu dictum varius duis at consectetur
          lorem. Velit sed ullamcorper morbi tincidunt. Lorem donec massa sapien
          faucibus et molestie ac.
        </Typography>
        <Typography paragraph>
          Consequat mauris nunc congue nisi vitae suscipit. Fringilla est
          ullamcorper eget nulla facilisi etiam dignissim diam. Pulvinar
          elementum integer enim neque volutpat ac tincidunt. Ornare suspendisse
          sed nisi lacus sed viverra tellus. Purus sit amet volutpat consequat
          mauris. Elementum eu facilisis sed odio morbi. Euismod lacinia at quis
          risus sed vulputate odio. Morbi tincidunt ornare massa eget egestas
          purus viverra accumsan in. In hendrerit gravida rutrum quisque non
          tellus orci ac. Pellentesque nec nam aliquam sem et tortor. Habitant
          morbi tristique senectus et. Adipiscing elit duis tristique
          sollicitudin nibh sit. Ornare aenean euismod elementum nisi quis
          eleifend. Commodo viverra maecenas accumsan lacus vel facilisis. Nulla
          posuere sollicitudin aliquam ultrices sagittis orci a.
        </Typography>
      </ContentContainer>
    </Box>
  );
};
