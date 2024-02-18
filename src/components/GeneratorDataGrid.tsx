//DataGrid.tsx

import { useEIAData } from "../hooks/useEIAData";
import Box from "@mui/material/Box";
import { DataGrid, GridColDef } from "@mui/x-data-grid";

const columns: GridColDef[] = [
  { field: "plantName", headerName: "Name", width: 250 },
  {
    field: "energy-source-desc",
    headerName: "Source",
    width: 110,
  },
  {
    field: "stateName",
    headerName: "State",
    width: 110,
  },
  {
    field: "technology",
    headerName: "Technology",
    // type: 'number',
    width: 250,
  },
  {
    field: "net-summer-capacity-mw",
    headerName: "Summer(mw)",
    width: 110,
  },
  {
    field: "net-winter-capacity-mw",
    headerName: "Winter(mw",
    width: 110,
  },
  {
    field: "statusDescription",
    headerName: "Status",
    width: 110,
  },
];

export function GeneratorDataGrid() {
  console.log("GeneratorDataGrid rendered");
  const { isLoading, data, error } = useEIAData();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const rows = data.map((row, index) => ({ id: index, ...row }));

  return (
    <Box sx={{ height: "100%", width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 10,
            },
          },
        }}
        pageSizeOptions={[10,20,50,100]}
      />
    </Box>
  );
}
