import { Paper, Typography, useTheme } from "@mui/material";

import { getClasses } from "./style";

const DevicesContainer = () => {
  const theme = useTheme();
  const classes = getClasses(theme);

  return (
    <Paper className={classes.TableContainer}>
      <div className="table-top-row">
        <div className="table-header">
          <Typography variant="h5">Devices</Typography>
          <Typography variant="subtitle2" className="subtitle">
            3,000 devices.
          </Typography>
        </div>
      </div>

      <div className="table-content">
        <Typography>Table Here</Typography>
      </div>
    </Paper>
  );
};

export default DevicesContainer;
