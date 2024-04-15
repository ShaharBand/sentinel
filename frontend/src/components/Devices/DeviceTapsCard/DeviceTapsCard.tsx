import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import DeviceNetstatTable from "../DeviceNetstatTable/DeviceNetstatTable";
import { useState } from "react";
import { Card, useTheme } from "@mui/material";
import { getClasses } from "./style";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <Box
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </Box>
  );
}

export default function VerticalTabs() {
  const theme = useTheme();
  const classes = getClasses(theme);

  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Card className={classes.cardContainer}>
      <Tabs
        className={classes.TabsContainer}
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Network Data Navigation"
        sx={{ borderRight: 1, borderColor: "divider", width: 120 }}
      >
        <Tab label="Netstat" />
        <Tab label="Adapters" />
        <Tab label="ARP" />
        <Tab label="Processes" />
        <Tab label="Security Systems" />
      </Tabs>
      <TabPanel value={value} index={0}>
        <DeviceNetstatTable data={[]} />
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
      <TabPanel value={value} index={3}>
        Item 4
      </TabPanel>
      <TabPanel value={value} index={4}>
        Item 5
      </TabPanel>
    </Card>
  );
}
