import { Drawer, useTheme } from "@mui/material";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import PhonelinkRoundedIcon from "@mui/icons-material/PhonelinkRounded";
import TerminalRoundedIcon from "@mui/icons-material/TerminalRounded";
import LayersRoundedIcon from "@mui/icons-material/LayersRounded";
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
          { text: "Devices", icon: <PhonelinkRoundedIcon /> },
          { text: "Agents", icon: <TerminalRoundedIcon /> },
          { text: "Actions", icon: <LayersRoundedIcon /> },
          { text: "Settings", icon: <SettingsRoundedIcon /> },
        ].map((item, index) => (
          <ListItem key={index}>
            <ListItemButton>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <List className={classes.bottomList}>
        {[{ text: "Logout", icon: <ExitToAppIcon /> }].map((item, index) => (
          <ListItem key={index}>
            <ListItemButton>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};
