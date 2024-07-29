import { useEffect, useState } from "react"
import FundsAvailableList from "./components/FundsList"
import { FUND_MODEL } from "@models"
import { getFundsAvailable } from "../../services";

export const Openings = () => {
    const [fundsData, setFundsData] = useState<FUND_MODEL[]>([])

    useEffect(() => {        
        const fetchFundsAvailable = async () => {
          const fundsAvailableResponse: FUND_MODEL[] = getFundsAvailable();
          console.log('fundsAvailableResponse --> ', fundsAvailableResponse);
    
          setFundsData(fundsAvailableResponse);
        }
            
        fetchFundsAvailable();
      }, [])
    return (
      <>
        <div>
            <h1>Aperturar Fondo</h1>
            <FundsAvailableList
                funds={fundsData}
            />
        </div>        
      </>
      
    )
  }