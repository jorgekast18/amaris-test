import { useEffect, useState } from "react";

import { CLIENT_MODEL } from "@models";
import { getAllClients } from '../../services';
import ClientsList from "./components/ClientsList"
import { useFetchAndLoad } from "../../hooks";


export const Clients = () => {
  const { callEndpoint } = useFetchAndLoad();
  const [clientsList, setClientsList] = useState<CLIENT_MODEL[]>([])

  useEffect(() => {

    const fetchClients = async () => {
      const response: [] = await callEndpoint(getAllClients());
      const clientListResponse: CLIENT_MODEL[] = [];

      if(response.length > 0){
        response.map((client: any) => {
          clientListResponse.push({
            id: client._id,
            name: client.name,
            lastName: client.surnames,
            balance: client.balance
          })
        })

        setClientsList(clientListResponse);
      }
    }

    
    fetchClients();
  }, [])

  return (
    <>
      <div>
      <h1>Clientes</h1>
      <ClientsList
        clients={clientsList}  
      />
    </div>
    </>
    
  )
}