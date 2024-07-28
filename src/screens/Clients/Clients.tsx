import { useEffect, useState } from "react";

import { CLIENT_MODEL } from "@models";
import { testPoke, getClients } from '../../services';
import ClientsList from "./components/ClientsList"
import { useFetchAndLoad } from "../../hooks";


export const Clients = () => {
  const { callEndpoint, isLoading, setIsLoading } = useFetchAndLoad();
  const [clientsList, setClientsList] = useState<CLIENT_MODEL[]>([])

  useEffect(() => {
    const fetchTestPoke = async () => {
      const response = await callEndpoint(testPoke());

      console.log('response --> ', response);
    }

    const fetchClients = async () => {
      const clientListResponse: CLIENT_MODEL[] = getClients();
      console.log('clientListResponse --> ', clientListResponse);

      setClientsList(clientListResponse);
    }

    fetchTestPoke();
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