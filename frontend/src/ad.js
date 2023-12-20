import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';


const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    marginTop: "10px",
    backgroundColor: "#545454",
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
AdvertisementID,
 Name,
 Date

) {
  return {AdvertisementID, Name, Date};
}

const rows = [
  createData(1, 'Shopee','02/12/2022'),
  createData(2, 'Lazada','01/12/2022'),
  createData(3,'MyShop', '22/12/2022')
];

export default function Ad(){
  return (
    <Box>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="center">Blocked ID</StyledTableCell>
            <StyledTableCell align="center">Name of Ad</StyledTableCell>
            <StyledTableCell align="center">Date</StyledTableCell>
            <StyledTableCell align="center">Edit</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.AdvertisementID}>
              <StyledTableCell component="th" scope="row" align="center">
                {row.AdvertisementID}
              </StyledTableCell>
              <StyledTableCell align="center">{row.Name}</StyledTableCell>
              <StyledTableCell align="center">{row.Date}</StyledTableCell>
              <StyledTableCell align="center"> <button>Unblock</button>
            </StyledTableCell>
            </StyledTableRow>
           
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    <Link href="/Device" variant="body2">View Devices</Link>
    </Box>
  );
}