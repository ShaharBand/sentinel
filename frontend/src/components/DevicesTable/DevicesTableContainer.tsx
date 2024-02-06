import { Typography } from "@mui/material";
import FileDownloadRoundedIcon from "@mui/icons-material/FileDownloadRounded";
import TuneRoundedIcon from "@mui/icons-material/TuneRounded";
import "./style.css";
import MyTable from "../DevicesTable";

const DevicesTableContainer = () => {
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
        <MyTable />
      </div>
    </div>
  );
};

export default DevicesTableContainer;
