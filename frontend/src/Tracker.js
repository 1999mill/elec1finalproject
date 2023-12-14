import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import './Tracker.css';




const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    marginTop: "10px",
    backgroundColor: "#808080",
    color: "black",
    fontSize: 20,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 15,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createData(
  trackerID,
  User,
  deviceName
) {
  return {trackerID, deviceName, User};
}

const rows = [
    createData(1,'Mill Zozobrado', 'Realme 11'),
    createData(2,'Jimbo Camelotes', 'Iphone XR'),
    createData(3,'John Pelin','Samsung Galaxy')
];

export default function Users(){
  return (
    <Box className="Box">
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead className='head'>
          <TableRow>
            <StyledTableCell align="center">Tracker ID</StyledTableCell>
            <StyledTableCell align="center">User</StyledTableCell>
            <StyledTableCell align="center">Device Name</StyledTableCell>
            <StyledTableCell align="center">Edit</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          
        {rows.map((row) => (
          <StyledTableRow key={row.User}>
            <StyledTableCell component="th" scope="row" align="center">
              {row.trackerID}
            </StyledTableCell>
            <StyledTableCell align="center">{row.User}</StyledTableCell>
            <StyledTableCell align="center">{row.deviceName}</StyledTableCell>
            <StyledTableCell align="center">
              <div className="btn-group">
                <button className="Delete" align="center">Delete</button>
                <button className="Update">Update</button>
              </div>
            </StyledTableCell>
          </StyledTableRow>
        ))}


        </TableBody>
      </Table>
    </TableContainer>
    <Link href="/AddTracker" variant="body2" sx={{position:"right"}}>
           <h3>Add Tracker</h3> 
           </Link>
    </Box>
     
  );
}