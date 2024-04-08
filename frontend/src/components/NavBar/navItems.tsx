import DevicesRoundedIcon from "@mui/icons-material/DevicesRounded";
import SmartToyRoundedIcon from "@mui/icons-material/SmartToyRounded";
import PendingActionsRoundedIcon from "@mui/icons-material/PendingActionsRounded";
import SettingsRoundedIcon from "@mui/icons-material/SettingsRounded";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";

export const navItems = [
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
];

export const bottomNavItems = [
  {
    text: "Logout",
    icon: <ExitToAppIcon />,
    url: "/logout",
  },
];
