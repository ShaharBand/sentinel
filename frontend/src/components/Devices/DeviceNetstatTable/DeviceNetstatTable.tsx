import { Stack, Box, Typography, useTheme } from "@mui/material";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

import { getClasses } from "./style";
import { Props } from "./types";

const DeviceNetstatTable: React.FC<Props> = () => {
  const theme = useTheme();
  const classes = getClasses(theme);

  const data = [
    {
      Proto: "TCP",
      LocalAddress: "0.0.0.0:135",
      ForeignAddress: "0.0.0.0:0",
      State: "LISTENING",
      PID: 1160,
    },
    {
      Proto: "TCP",
      LocalAddress: "0.0.0.0:445",
      ForeignAddress: "0.0.0.0:0",
      State: "LISTENING",
      PID: 4,
    },
    {
      Proto: "TCP",
      LocalAddress: "0.0.0.0:623",
      ForeignAddress: "0.0.0.0:0",
      State: "LISTENING",
      PID: 4280,
    },
    {
      Proto: "TCP",
      LocalAddress: "0.0.0.0:5040",
      ForeignAddress: "0.0.0.0:0",
      State: "LISTENING",
      PID: 7352,
    },
    {
      Proto: "TCP",
      LocalAddress: "0.0.0.0:5432",
      ForeignAddress: "0.0.0.0:0",
      State: "LISTENING",
      PID: 5160,
    },
    {
      Proto: "TCP",
      LocalAddress: "0.0.0.0:7680",
      ForeignAddress: "0.0.0.0:0",
      State: "LISTENING",
      PID: 9696,
    },
    {
      Proto: "TCP",
      LocalAddress: "0.0.0.0:16992",
      ForeignAddress: "0.0.0.0:0",
      State: "LISTENING",
      PID: 4280,
    },
    {
      Proto: "TCP",
      LocalAddress: "0.0.0.0:49664",
      ForeignAddress: "0.0.0.0:0",
      State: "LISTENING",
      PID: 984,
    },
    {
      Proto: "TCP",
      LocalAddress: "0.0.0.0:49665",
      ForeignAddress: "0.0.0.0:0",
      State: "LISTENING",
      PID: 804,
    },
    {
      Proto: "TCP",
      LocalAddress: "0.0.0.0:49666",
      ForeignAddress: "0.0.0.0:0",
      State: "LISTENING",
      PID: 1540,
    },
    {
      Proto: "TCP",
      LocalAddress: "0.0.0.0:49667",
      ForeignAddress: "0.0.0.0:0",
      State: "LISTENING",
      PID: 2368,
    },
    {
      Proto: "TCP",
      LocalAddress: "0.0.0.0:49668",
      ForeignAddress: "0.0.0.0:0",
      State: "LISTENING",
      PID: 3428,
    },
    {
      Proto: "TCP",
      LocalAddress: "0.0.0.0:49693",
      ForeignAddress: "0.0.0.0:0",
      State: "LISTENING",
      PID: 928,
    },
    {
      Proto: "TCP",
      LocalAddress: "127.0.0.1:27017",
      ForeignAddress: "0.0.0.0:0",
      State: "LISTENING",
      PID: 4304,
    },
    {
      Proto: "TCP",
      LocalAddress: "127.0.0.1:49670",
      ForeignAddress: "127.0.0.1:49671",
      State: "ESTABLISHED",
      PID: 4280,
    },
    {
      Proto: "TCP",
      LocalAddress: "127.0.0.1:49671",
      ForeignAddress: "127.0.0.1:49670",
      State: "ESTABLISHED",
      PID: 4280,
    },
    {
      Proto: "TCP",
      LocalAddress: "192.168.137.86:139",
      ForeignAddress: "0.0.0.0:0",
      State: "LISTENING",
      PID: 4,
    },
  ];

  return (
    <Box className={classes.contentBox}>
      <TableContainer className={classes.tableContainer}>
        <Table stickyHeader size="small">
          <TableHead>
            <TableRow>
              <TableCell className={classes.tableHeader}>Proto</TableCell>
              <TableCell className={classes.tableHeader}>
                Local Address
              </TableCell>
              <TableCell className={classes.tableHeader}>
                Foreign Address
              </TableCell>
              <TableCell className={classes.tableHeader}>State</TableCell>
              <TableCell className={classes.tableHeader}>PID</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row, index) => (
              <TableRow key={index}>
                <TableCell>{row.Proto}</TableCell>
                <TableCell>{row.LocalAddress}</TableCell>
                <TableCell>{row.ForeignAddress}</TableCell>
                <TableCell>{row.State}</TableCell>
                <TableCell>{row.PID}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default DeviceNetstatTable;
