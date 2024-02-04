import logo from "../../assets/images/logo.png";
import PhonelinkRoundedIcon from "@mui/icons-material/PhonelinkRounded";
import TerminalRoundedIcon from "@mui/icons-material/TerminalRounded";
import LayersRoundedIcon from "@mui/icons-material/LayersRounded";
import SettingsRoundedIcon from "@mui/icons-material/SettingsRounded";
import MeetingRoomRoundedIcon from "@mui/icons-material/MeetingRoomRounded";
import { Typography } from "@mui/material";
import "./style.css";

const NavigationBar = () => {
  return (
    <nav className="navbar-container">
      <div className="logo-container">
        <img src={logo} alt="Logo" className="logo-img" />
        <div className="logo-label">Sentinel</div>
      </div>

      <a href="/" className="nav-link">
        <PhonelinkRoundedIcon />
        <Typography>Devices</Typography>
      </a>
      <a href="/" className="nav-link">
        <TerminalRoundedIcon />
        <Typography>Agents</Typography>
      </a>
      <a href="/" className="nav-link">
        <LayersRoundedIcon />
        <Typography>Actions</Typography>
      </a>
      <a href="/" className="nav-link">
        <SettingsRoundedIcon />
        <Typography>Settings</Typography>
      </a>
      <a href="/" className="nav-link">
        <MeetingRoomRoundedIcon />
        <Typography>Logout</Typography>
      </a>
    </nav>
  );
};

export default NavigationBar;
