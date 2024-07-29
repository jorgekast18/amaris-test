import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { IconButton } from '@mui/material';
import { Add } from '@mui/icons-material';
import { FUND_MODEL } from '@models';
import { subscribeFund } from '../../../services';


export default function FundsAvailableList({funds: fundsData}: {funds: FUND_MODEL[]}) {

  function handleSubscribefund(fund: FUND_MODEL) {
    subscribeFund(fund);
  }

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell align="right">ID</TableCell>
            <TableCell align="right">Nombre</TableCell>
            <TableCell align="right">Valor mínimo de vinculación</TableCell>
            <TableCell align="right">Categoria</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {fundsData.map((row) => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align="right">{row.id}</TableCell>
              <TableCell align="right">{row.name}</TableCell>
              <TableCell align="right">${row.minValue}</TableCell>
              <TableCell align="right">{row.category}</TableCell>
              <TableCell align="right">
                <IconButton 
                  color="primary" 
                  aria-label="add to shopping cart"
                  onClick={() => {handleSubscribefund(row)}}>
                  <Add />
                </IconButton>
              </TableCell>
              
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}