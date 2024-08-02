import axios from "axios";
import { getAllCustomersUrl } from '../constants/urls';

export const getBalance = async () => {
    
    const response = await axios.get(`${getAllCustomersUrl}/66a80ef56a5158fe5cd25891`);

    return response.data.balance;

}