import { Drawer, useTheme } from "@mui/material";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import DevicesRoundedIcon from "@mui/icons-material/DevicesRounded";
import SmartToyRoundedIcon from "@mui/icons-material/SmartToyRounded";
import PendingActionsRoundedIcon from "@mui/icons-material/PendingActionsRounded";
import SettingsRoundedIcon from "@mui/icons-material/SettingsRounded";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import { HEADLINE } from "./constants";
import { getClasses } from "./style";
import logo from "../../assets/images/logo.png";
import { FC } from "react";

export const NavBar: FC<{}> = ({}) => {
  const theme = useTheme();
  const classes = getClasses(theme);
  return (
    <Drawer
      className={classes.navDrawer}
      variant="permanent"
      anchor="left"
      classes={{ paper: classes.drawerPaper }}
    >
      <Toolbar className={classes.logoBar}>
        <img src={logo} className={classes.logoImage} />
        <Typography className={classes.headline}>{HEADLINE}</Typography>
      </Toolbar>

      <List>
        {[
          {
            text: "Devices",
            icon: <DevicesRoundedIcon />,
            url: "/devices",
          },
          {
            text: "Agents",
            icon: <SmartToyRoundedIcon />,
            url: "/agents",
          },
          {
            text: "Actions",
            icon: <PendingActionsRoundedIcon />,
            url: "/actions",
          },
          {
            text: "Settings",
            icon: <SettingsRoundedIcon />,
            url: "/settings",
          },
        ].map((item, index) => (
          <ListItem key={index}>
            <ListItemButton className={classes.navItem} href={item.url}>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <List className={classes.bottomList}>
        {[{ text: "Logout", icon: <ExitToAppIcon /> }].map((item, index) => (
          <ListItem key={index}>
            <ListItemButton className={classes.navItem}>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};
