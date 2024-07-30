import axios from 'axios';
import { loadAbort } from '../utilities';
import { getAllCustomers } from '../constants/urls';

export const getAllClients = () => {
    const controller = loadAbort();
    return {
        call: axios.get(getAllCustomers, { signal: controller.signal }),
        controller,
    }
}

export const getClientById = (id: string) => {
    const controller = loadAbort();
    return {
        call: axios.get(`${getAllCustomers}/${id}`, { signal: controller.signal }),
        controller,
    }
}