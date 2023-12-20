import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import './Device.css';




const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    marginTop: "10px",
    backgroundColor: "lightblue", // Change the background color of header cells
    color: "black",
    fontSize: 20,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 15,
    borderBottom: "2px solid lightgray", // Add a border at the bottom of each body cell
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: "rgba(0, 0, 0, 0.04)", // Change the background color of odd rows
  },
  '&:hover': {
    backgroundColor: "rgba(0, 0, 0, 0.08)", // Change the background color on hover
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));
function createData(
  deviceID,
  brand,
  name

) {
  return {deviceID, brand, name};
}

const rows = [
  createData(1, 'Realme 11','anak 1'),
  createData(2, 'Iphone XR','anak 2'),
  createData(3,'Samsung Galaxy', 'anak 3')
];


export default function Users() {
  return (
    <Box style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', padding: '20px' }}>
      <TableContainer component={Paper} sx={{ backgroundColor: 'white' }}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead className='head'>
            <TableRow>
              <StyledTableCell align="center">Device ID</StyledTableCell>
              <StyledTableCell align="center">Brand</StyledTableCell>
              <StyledTableCell align="center">Name</StyledTableCell>
              <StyledTableCell align="center">Edit</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>


            {rows.map((row) => (
              <StyledTableRow key={row.User}>
                <StyledTableCell component="th" scope="row" align="center">
                  {row.deviceID}
                </StyledTableCell>
                <StyledTableCell align="center">{row.brand}</StyledTableCell>
                <StyledTableCell align="center">{row.name}</StyledTableCell>
                
                
                
                <StyledTableCell align="center">
                  <div className="btn-group" style={{ textAlign: 'center' }}>
                    <button className="Delete">Delete</button>
                    <button className="Update">Update</button>
                  </div>
                </StyledTableCell>
              </StyledTableRow>


            ))}
          </TableBody>
        </Table>
      </TableContainer>

        <div class="container2">
          <div class="vertical-center">
            <a href="/AddDevice"> Add Device</a>
          </div>
        </div>

        <div class="container2">
          <div class="vertical-center">
            <a href="/Ad"> Blocked Ads</a>
          </div>
        </div>

    </Box>
  );
}