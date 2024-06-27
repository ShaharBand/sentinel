import { Drawer, useTheme } from "@mui/material";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { getClasses } from "./style";
import { FC } from "react";
import logo from "../../assets/images/logo.png";
import { HEADLINE } from "./constants";
import { bottomNavItems, navItems } from "./navItems";

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
        {navItems.map((item, index) => (
          <ListItem key={index}>
            <ListItemButton className={classes.navItem} href={item.url}>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <List className={classes.bottomList}>
        {bottomNavItems.map((item, index) => (
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
