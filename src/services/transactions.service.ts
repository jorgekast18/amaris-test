import axios from 'axios';
import { loadAbort } from '../utilities';
import { FUND_MODEL } from '@models';

export const getFundsAvailable = (): FUND_MODEL[] => {
    return [
        {
            'id': 1,
            'name': 'FPV_EL CLIENTE_RECAUDADORA',
            'minValue': 75000,
            'category': 'FPV',
        },
        {
            'id': 2,
            'name': 'FPV_EL CLIENTE_ECOPETROL',
            'minValue': 125000,
            'category': 'FPV',
        },
        {
            'id': 3,
            'name': 'DEUDAPRIVADA',
            'minValue': 50000,
            'category': 'FIC',
        },
        {
            'id': 4,
            'name': 'FDO-ACCIONES',
            'minValue': 250000,
            'category': 'FIC',
        },
        {
            'id': 5,
            'name': 'FPV_EL CLIENTE_DINAMICA ',
            'minValue': 100000,
            'category': 'FPV',
        },
    ]
}

export const subscribeFund = (fund: FUND_MODEL) => {
    alert(`Se ha suscrito al fondo ${fund.name}`)
}

export const withdrawalFund = (fund: FUND_MODEL) => {
    alert(`Se ha retirado del fondo ${fund.name}`)
}