import React, { useEffect, useState } from "react";

import { CLIENT_MODEL } from "@models";
import { getClientById} from '../../services';
import ClientsList from "./components/ClientsList"
import { useFetchAndLoad } from "../../hooks";
import { useBalance } from '../../context/BalanceContext';


export const Clients = () => {
  const { callEndpoint } = useFetchAndLoad();
  const [client, setClient] = useState<CLIENT_MODEL>()
  const { setBalance } = useBalance();
  useEffect(() => {

    const fetchClients = async () => {
      const response: CLIENT_MODEL = await callEndpoint(getClientById('66a80ef56a5158fe5cd25891'));

      setClient(response);
      setBalance(response.balance)
    }
    

    
    fetchClients();
  }, [])

  return (
    <>
      <div>
      <h1>Clientes</h1>
      <ClientsList
        _id={client ? client._id : 0}
        name={client ? client?.name : ''}
        surnames={client ? client?.surnames : ''}
        balance={client ? client?.balance : 0}
      />
    </div>
    </>
    
  )
}