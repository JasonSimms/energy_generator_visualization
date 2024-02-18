import { useEIAData } from "../hooks/useEIAData";
import { getHeadersFromDataPoint, getPreferredHeaders } from "../utils/tableUtils";

// import * as React from 'react';
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

export function DataTable() {
  const { isLoading, data, error } = useEIAData();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  console.log('data', data.length, data[0]);


  // build column headers
  const headers = getPreferredHeaders();

  function mappedColumnHeaders() {
    return headers.map((header) => {
      return <TableCell key={header}>{header}</TableCell>;
    });
  }
  
  // build rows
    function mappedRows() {
        return data.map((row, index) => {
        return (
            <TableRow key={index}>
            {headers.map((value) => {
                return <TableCell>{row[value]}</TableCell>;
            })}
            </TableRow>
        );
        });
    }



  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              {/* {mappedColumnHeaders(getHeadersFromDataPoint(data))} */}
              {mappedColumnHeaders()}
            </TableRow>
          </TableHead>
          <TableBody>
            {mappedRows()}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}