import { FC } from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 130 },
  { field: "Name", headerName: "Name", width: 130 },
  { field: "lastName", headerName: "Last name", width: 130 },
  {
    field: "age",
    headerName: "Age",
    width: 130,
  },
];

const rows = [
  { id: 1, lastName: "Snow", Name: "Jon", age: 35 },
  { id: 2, lastName: "Lannister", Name: "Cersei", age: 42 },
  { id: 3, lastName: "Lannister", Name: "Jaime", age: 45 },
  { id: 4, lastName: "Stark", Name: "Arya", age: 16 },
  { id: 5, lastName: "Targaryen", Name: "Daenerys", age: null },
  { id: 6, lastName: "Melisandre", Name: null, age: 150 },
  { id: 7, lastName: "Clifford", Name: "Ferrara", age: 44 },
  { id: 8, lastName: "Frances", Name: "Rossini", age: 36 },
  { id: 9, lastName: "Roxie", Name: "Harvey", age: 65 },
];

export const DevicesTable: FC<{}> = ({}) => {
  return (
    <div style={{ height: 550, width: "70%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
      />
    </div>
  );
};
