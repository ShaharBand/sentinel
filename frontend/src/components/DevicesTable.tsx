import React, { useState } from "react";
import { DataGrid, GridColDef, GridFilterModel } from "@mui/x-data-grid";

const MyTable: React.FC = () => {
  const [rows, setRows] = useState([
    {
      id: 1,
      name: "Computer A",
      description: "Desktop",
      ipAddress: "192.168.0.1",
      os: "Windows",
      status: "Available",
    },
    {
      id: 2,
      name: "Computer B",
      description: "Laptop",
      ipAddress: "192.168.0.2",
      os: "MacOS",
      status: "Unavailable",
    },
    {
      id: 3,
      name: "Computer C",
      description: "Desktop",
      ipAddress: "192.168.0.3",
      os: "Linux",
      status: "Available",
    },
    {
      id: 4,
      name: "Computer D",
      description: "Desktop",
      ipAddress: "192.168.0.4",
      os: "Linux",
      status: "Available",
    },
    {
      id: 5,
      name: "Computer E",
      description: "Desktop",
      ipAddress: "192.168.0.5",
      os: "Linux",
      status: "Available",
    },
    {
      id: 6,
      name: "Computer F",
      description: "Desktop",
      ipAddress: "192.168.0.6",
      os: "Windows",
      status: "Available",
    },
    {
      id: 7,
      name: "Computer G",
      description: "Desktop",
      ipAddress: "192.168.0.7",
      os: "Windows",
      status: "Available",
    },
    {
      id: 8,
      name: "Computer H",
      description: "Desktop",
      ipAddress: "192.168.0.8",
      os: "Windows",
      status: "Available",
    },
    {
      id: 9,
      name: "Computer I",
      description: "Desktop",
      ipAddress: "192.168.0.9",
      os: "Windows",
      status: "Available",
    },
    {
      id: 10,
      name: "Computer J",
      description: "Desktop",
      ipAddress: "192.168.0.10",
      os: "Windows",
      status: "Available",
    },
    {
      id: 9,
      name: "Computer I",
      description: "Desktop",
      ipAddress: "192.168.0.9",
      os: "Windows",
      status: "Available",
    },
    // Add more data as needed
  ]);

  const [filterModel, setFilterModel] = useState<GridFilterModel>({
    items: [
      { columnField: "name", operatorValue: "contains", value: "" },
      { columnField: "description", operatorValue: "contains", value: "" },
      { columnField: "ipAddress", operatorValue: "contains", value: "" },
      { columnField: "os", operatorValue: "contains", value: "" },
      { columnField: "status", operatorValue: "contains", value: "" },
    ],
  });

  return (
    <div style={{ height: "inherit", width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        filterModel={filterModel}
        onFilterModelChange={(model) => setFilterModel(model)}
        pagination
        pageSize={10}
      />
    </div>
  );
};

export default MyTable;

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 90 },
  { field: "name", headerName: "Name", width: 150 },
  { field: "description", headerName: "Description", width: 150 },
  { field: "ipAddress", headerName: "IP Address", width: 150 },
  { field: "os", headerName: "Operating System", width: 150 },
  { field: "status", headerName: "Status", width: 150 },
];
