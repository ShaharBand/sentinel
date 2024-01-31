import logo from "../../assets/images/logo.png";

import devices_icon from "../../assets/images/icons/timed-document.svg";
import dashboard_icon from "../../assets/images/icons/cloud-upload.svg";
import agents_icon from "../../assets/images/icons/adjustment.svg";

import "./style.css";

const NavigationBar = () => (
  <nav className="navbar-container">
    <a href="/">
      <img
        src={devices_icon}
        alt="Devices Scan Dashboard"
        className="icon-img"
      />
    </a>
    <a href="/">
      <img src={dashboard_icon} alt="General Dashboard" className="icon-img" />
    </a>
    <a href="/">
      <img src={agents_icon} alt="Agents Dashboard" className="icon-img" />
    </a>

    <div className="logo-container">
      <img src={logo} alt="Logo" className="logo-img" />
      <div className="logo-label">Sentinel</div>
    </div>
  </nav>
);
export default NavigationBar;
