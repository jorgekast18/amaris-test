import { useEffect, useState } from "react"
import WithdrawalsList from "./components/WithdrawalsList"
import { FUND_MODEL } from "@models"
import { getFundsAvailable } from "../../services";

export const Withdrawals = () => {
    const [fundsData, setFundsData] = useState<FUND_MODEL[]>([])

    useEffect(() => {        
        const fetchClients = async () => {
          const fundsAvailableResponse: FUND_MODEL[] = getFundsAvailable();
          console.log('fundsAvailableResponse --> ', fundsAvailableResponse);
    
          setFundsData(fundsAvailableResponse);
        }
            
        fetchClients();
      }, []);
      return (
        <>
          <div>
              <h1>Cancelación de fondo</h1>
              <WithdrawalsList
                  funds={fundsData}
              />
          </div>        
        </>
        
      )
  }