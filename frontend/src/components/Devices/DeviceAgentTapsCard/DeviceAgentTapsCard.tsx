import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
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

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
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
        <Tab label="Agent" />
        <Tab label="Terminal" />
      </Tabs>
      <TabPanel value={value} index={0}>
        Agent Data Here and Tools activation
      </TabPanel>
      <TabPanel value={value} index={1}>
        Terminal
      </TabPanel>
    </Card>
  );
}
