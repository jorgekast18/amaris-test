import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { IconButton } from '@mui/material';
import { Remove } from '@mui/icons-material';
import { FUND_MODEL } from '@models';
import { withdrawalFund } from '../../../services';


export default function WithdrawalsList({funds: fundsData}: {funds: FUND_MODEL[]}) {

  function handleWithdrawalfund(fund: FUND_MODEL) {
    withdrawalFund(fund);
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
                  aria-label="withdrawal fund"
                  onClick={() => {handleWithdrawalfund(row)}}>
                  <Remove  />
                </IconButton>
              </TableCell>
              
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}