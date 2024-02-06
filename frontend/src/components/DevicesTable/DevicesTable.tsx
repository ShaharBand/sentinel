import { Typography } from "@mui/material";
import FileDownloadRoundedIcon from "@mui/icons-material/FileDownloadRounded";
import TuneRoundedIcon from "@mui/icons-material/TuneRounded";
import "./style.css";

const DevicesTable = () => {
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
          <TuneRoundedIcon />
          <FileDownloadRoundedIcon />
          <span>Report</span>
        </div>
      </div>

      <div className="table-content">
        <Typography>
          shahar-pc, id:1, 0.0.0.0, windows, agent: a 1.2, available, more
        </Typography>
      </div>
    </div>
  );
};

export default DevicesTable;
