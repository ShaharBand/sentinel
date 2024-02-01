import logo from "../../assets/images/logo.png";

import devices_icon from "../../assets/images/icons/dashboard.svg";
import agents_icon from "../../assets/images/icons/pepole.svg";
import bulk_actions_icon from "../../assets/images/icons/layers.svg";
import settings_icon from "../../assets/images/icons/settings.svg";
import logout_icon from "../../assets/images/icons/logout.svg";

import "./style.css";

const NavigationBar = () => (
  <nav className="navbar-container">
    <div className="logo-container">
      <img src={logo} alt="Logo" className="logo-img" />
      <div className="logo-label">Sentinel</div>
    </div>

    <a href="/">
      <img src={devices_icon} alt="Devices Dashboard" className="icon-img" />
    </a>
    <a href="/">
      <img src={agents_icon} alt="Agents Dashboard" className="icon-img" />
    </a>
    <a href="/">
      <img src={bulk_actions_icon} alt="Bulk Actions" className="icon-img" />
    </a>
    <a href="/">
      <img src={settings_icon} alt="Settings" className="icon-img" />
    </a>
    <a href="/">
      <img src={logout_icon} alt="Logout" className="icon-img" />
    </a>
  </nav>
);
export default NavigationBar;
