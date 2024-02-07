import { Typography } from "@mui/material";
import FileDownloadRoundedIcon from "@mui/icons-material/FileDownloadRounded";
import DevicesTable from "../DevicesTable/DevicesTable";
import "./style.css";

const DevicesContainer = () => {
  return (
    <div className="table-container">
      <div className="table-top-row">
        <div className="table-header">
          <Typography variant="h5">Devices</Typography>
          <Typography variant="subtitle2" className="subtitle">
            3,000 devices.
          </Typography>
        </div>
        <div className="table-tools">
          <FileDownloadRoundedIcon />
          <span>Report</span>
        </div>
      </div>

      <div className="table-content">
        <DevicesTable />
      </div>
    </div>
  );
};

export default DevicesContainer;
