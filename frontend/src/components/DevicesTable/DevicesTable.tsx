import { FC } from "react";
import { DataGrid, GridColDef, GridRenderCellParams } from "@mui/x-data-grid";
import { Link, Box, Stack, Typography, useTheme } from "@mui/material";
import { getClasses } from "./style";

export const DevicesTable: FC<{}> = ({}) => {
  const theme = useTheme();
  const classes = getClasses(theme);

  const renderTags = (params: GridRenderCellParams) => (
    <Stack className={classes.tagStack} direction="row">
      {params.value.map((tag: string, index: number) => (
        <Typography key={index} className={classes.tag} noWrap>
          {tag}
        </Typography>
      ))}
    </Stack>
  );

  const renderStatusCell = (params: GridRenderCellParams) => {
    let cellClass = "";
    switch (params.value.toLowerCase()) {
      case "online":
        cellClass = classes.online;
        break;
      case "offline":
        cellClass = classes.offline;
        break;
      case "rejected":
        cellClass = classes.rejected;
        break;
      default:
        break;
    }
    return <Typography className={cellClass}>{params.value}</Typography>;
  };

  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", flex: 0.5 },
    { field: "name", headerName: "Name", flex: 1 },
    { field: "enforcement", headerName: "Enforcement", flex: 1 },
    { field: "tags", headerName: "Tags", flex: 1.5, renderCell: renderTags },
    { field: "ipAddress", headerName: "IP Address", flex: 1 },
    { field: "operatingSystem", headerName: "Operating System", flex: 1 },
    { field: "agent", headerName: "Agent", flex: 1 },
    {
      field: "status",
      headerName: "Status",
      flex: 1,
      renderCell: renderStatusCell,
    },
    { field: "lastUpdate", headerName: "Last Update", flex: 1.1 },
    {
      field: "actions",
      headerName: "Actions",
      flex: 0.5,
      renderCell: (params) => (
        <Link href="#" className={classes.link}>
          More
        </Link>
      ),
    },
  ];

  const rows = [
    {
      id: 1,
      name: "Computer A",
      enforcement: ["mcaffe", "dns", "dlp"],
      tags: ["intel i7", "work pc", "protected", "vpn"],
      ipAddress: "198.162.0.1",
      operatingSystem: "Windows",
      agent: "W 1.0",
      status: "Online",
      lastUpdate: "11:54, 04/04/2024",
    },
    {
      id: 2,
      name: "Computer B",
      enforcement: ["mcaffe", "domain"],
      tags: ["intel i7", "work pc", "protected", "vpn", "domain", "1"],
      ipAddress: "198.162.0.2",
      operatingSystem: "MacOS",
      agent: "M 1.0",
      status: "Offline",
      lastUpdate: "11:54, 04/04/2024",
    },
    {
      id: 3,
      name: "Computer C",
      enforcement: ["mcaffe", "dns", "dlp"],
      tags: ["intel i5", "test"],
      ipAddress: "198.162.0.3",
      operatingSystem: "Linux",
      agent: "L 1.0",
      status: "Online",
      lastUpdate: "11:54, 04/04/2024",
    },
    {
      id: 4,
      name: "Computer D",
      enforcement: ["domain"],
      tags: ["intel i3", "test"],
      ipAddress: "198.162.0.4",
      operatingSystem: "Windows",
      agent: "W 1.0",
      status: "Offline",
      lastUpdate: "11:54, 04/04/2024",
    },
    {
      id: 5,
      name: "Computer E",
      enforcement: ["mcaffe"],
      tags: ["intel i7", "test"],
      ipAddress: "198.162.0.5",
      operatingSystem: "Windows",
      agent: "W 1.0",
      status: "Online",
      lastUpdate: "11:54, 04/04/2024",
    },
    {
      id: 6,
      name: "Computer E",
      enforcement: ["mcaffe"],
      tags: ["intel i7", "test"],
      ipAddress: "198.162.0.6",
      operatingSystem: "Windows",
      agent: "W 1.0",
      status: "Rejected",
      lastUpdate: "11:54, 04/04/2024",
    },
    {
      id: 7,
      name: "Computer E",
      enforcement: ["mcaffe"],
      tags: ["intel i7", "test"],
      ipAddress: "198.162.0.7",
      operatingSystem: "Windows",
      agent: "W 1.0",
      status: "Online",
      lastUpdate: "11:54, 04/04/2024",
    },
    {
      id: 8,
      name: "Computer E",
      enforcement: ["mcaffe"],
      tags: ["intel i7", "test"],
      ipAddress: "198.162.0.8",
      operatingSystem: "Windows",
      agent: "W 1.0",
      status: "Rejected",
      lastUpdate: "11:54, 04/04/2024",
    },
    {
      id: 9,
      name: "Computer E",
      enforcement: ["mcaffe"],
      tags: ["intel i7", "test"],
      ipAddress: "198.162.0.9",
      operatingSystem: "Windows",
      agent: "W 1.0",
      status: "Online",
      lastUpdate: "11:54, 04/04/2024",
    },
    {
      id: 10,
      name: "Computer E",
      enforcement: ["mcaffe"],
      tags: ["intel i7", "test"],
      ipAddress: "198.162.0.10",
      operatingSystem: "Windows",
      agent: "W 1.0",
      status: "Online",
      lastUpdate: "11:54, 04/04/2024",
    },
    {
      id: 11,
      name: "Computer E",
      enforcement: ["mcaffe"],
      tags: ["intel i7", "test"],
      ipAddress: "198.162.0.11",
      operatingSystem: "Windows",
      agent: "W 1.0",
      status: "Online",
      lastUpdate: "11:54, 04/04/2024",
    },
    {
      id: 12,
      name: "Computer E",
      enforcement: ["mcaffe"],
      tags: ["intel i7", "test"],
      ipAddress: "198.162.0.12",
      operatingSystem: "Windows",
      agent: "W 1.0",
      status: "Rejected",
      lastUpdate: "11:54, 04/04/2024",
    },
    {
      id: 13,
      name: "Computer E",
      enforcement: ["mcaffe"],
      tags: ["intel i7", "test"],
      ipAddress: "198.162.0.13",
      operatingSystem: "Windows",
      agent: "W 1.0",
      status: "Rejected",
      lastUpdate: "11:54, 04/04/2024",
    },
  ];

  return (
    <Box className={classes.tableBox}>
      <DataGrid className={classes.dataGrid} rows={rows} columns={columns} />
    </Box>
  );
};
