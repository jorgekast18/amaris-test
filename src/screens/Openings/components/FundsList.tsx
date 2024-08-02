import { useState} from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { IconButton } from '@mui/material';
import { Add } from '@mui/icons-material';
import { FUND_MODEL, SUBSCRIBE_FUND_MODEL } from '@models';
import { TransactionType, TRANSACION_MODEL } from '../../../models';
import { subscribeFund } from '../../../services';
import { toast, ToastContainer } from 'react-toastify';
import { useFetchAndLoad } from "../../../hooks";
import ModalTransaction from '../../../components/ModalTransaction';



export default function FundsAvailableList({funds: fundsData}: {funds: FUND_MODEL[]}) {
  const { callEndpoint } = useFetchAndLoad();

  const [modalData, setModalData] = useState({});
  const [open, setOpen] = useState(false);

  
  
  const handleOpen = (fundData: FUND_MODEL) => {
    const data = {
      title: 'Inscripción a fondo',
      content: `Se va a inscribir al fondo: ${fundData.name}`,
      fund: fundData
    }
    setModalData(data)
    handleClose();
  };
  const handleClose = () => setOpen(false);

  const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 500,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
  };

  async function handleSubscribefund(fund: FUND_MODEL) {
    const dataSubscribeFund: SUBSCRIBE_FUND_MODEL = {
      fund_id: fund.id.toString(),
      customer_id: '66a80ef56a5158fe5cd25891',
      amount: fund.minValue,
      type: TransactionType.SUBSCRIPTION
    }
    const subscribeResponse = await callEndpoint(subscribeFund(dataSubscribeFund));

    if(subscribeResponse.error && subscribeResponse.error === 'Without Balance'){
      toast.warning(`No tiene saldo disponible para vincularse al fondo. ${fund.name}`, {
        position: "top-right",
        autoClose: 1000
      });
      return;
    }
    console.log(subscribeResponse);
    setOpen(false);
    toast.success(`Se suscribió al fondo ${fund.name}`, {
      position: "top-right",
      autoClose: 1000
    });
  }

  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell align="right">Nombre</TableCell>
              <TableCell align="right">Valor vinculación</TableCell>
              <TableCell align="right">Categoria</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {fundsData.map((row) => (
              <TableRow
                key={row.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell align="right">{row.name}</TableCell>
                <TableCell align="right">${row.minValue}</TableCell>
                <TableCell align="right">{row.category}</TableCell>
                <TableCell align="right">
                  <IconButton 
                    color="primary" 
                    aria-label="add to shopping cart"
                    onClick={() => handleOpen(row)}>
                    <Add />
                  </IconButton>
                </TableCell>
                
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <ToastContainer />

      <ModalTransaction
        open={open}
        onClose={handleClose}
        data={modalData}
        callback={handleSubscribefund}
      />
    </>
  );
}