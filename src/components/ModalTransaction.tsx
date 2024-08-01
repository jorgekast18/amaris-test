import React, { useState } from 'react';
import { Modal, Box, Typography, Button, Stack, TextField } from '@mui/material';
import '../assets/css/TransactionModal.css'
import { MODAL_TRANSACTION, FUND_MODEL } from '../models';
// Estilo para el contenido del modal
const modalStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const ModalTransaction = ({ open, onClose, data, callback }: MODAL_TRANSACTION) => {

    const [hasErrorMinValue, setHasErrorMinValue] = useState(false);
    const [minValueFund, setMinValueFund] = useState(0);

    const handleSubmit = () => {
        console.log(fund);
    }
    
  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
    >
      <Box sx={modalStyle}>
        <Typography id="modal-title" variant="h6" component="h2" className="title">
          {data?.title}
        </Typography>
        <Typography id="modal-description" sx={{ mt: 2 }} className='description'>
          {data?.content}
        </Typography>

        <Stack direction='column'>
            <div className='min-value'>
                <TextField
                    required
                    id='amount-fund'
                    label='Valor de inscripción'
                    defaultValue={data?.fund?.minValue}
                    error={hasErrorMinValue}
                    size='small'
                    type='number'
                    onChange={(event) => {
                        setHasErrorMinValue(event.target.value < data?.fund?.minValue)
                    }}
                />
            </div>
            {
                hasErrorMinValue &&
                <span style={{ color: "red"}}>El valor mínimo de inscripción es: {data?.fund?.minValue}</span>
            }
            
        </Stack>   
        
        <Stack direction="row" spacing={2} justifyContent='flex-end'>
            <Button onClick={onClose} color='error' variant="outlined" sx={{ mt: 2 }}>
            Cancelar
            </Button>
            <Button onClick={handleSubmit} variant='contained' color='success' sx={{ mt: 2 }} disabled={hasErrorMinValue}>
                Inscribirse
            </Button>
        </Stack>
        
      </Box>
    </Modal>
  );
};

export default ModalTransaction;