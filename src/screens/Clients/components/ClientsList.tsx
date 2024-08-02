import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { CLIENT_MODEL } from '@models';


export default function ClientsList({_id, name, surnames, balance}: CLIENT_MODEL) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minW_idth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell align="right">ID</TableCell>
            <TableCell align="right">Nombre</TableCell>
            <TableCell align="right">Apellidos</TableCell>
            <TableCell align="right">Balance</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        <TableRow
          sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
        >
          <TableCell align="right">{_id}</TableCell>
          <TableCell align="right">{name}</TableCell>
          <TableCell align="right">{surnames}</TableCell>
          <TableCell align="right">{balance}</TableCell>
        </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}