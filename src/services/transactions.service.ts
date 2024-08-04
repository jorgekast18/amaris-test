import axios from 'axios';
import { loadAbort } from '../utilities';
import { FUND_MODEL, SUBSCRIBE_FUND_MODEL } from '@models';
import { getAllFunds, subscribeFundUrl, getAllTransactionsUrl, withdrawalFundUrl } from '../constants/urls';

export const getFundsAvailable = () => {
    const controller = loadAbort();
    return {
        call: axios.get(getAllFunds, { signal: controller.signal }),
        controller,
    }
}

export const getFundById = (id: string) => {
    const controller = loadAbort();
    return {
        call: axios.get(`${getAllFunds}/${id}`, { signal: controller.signal }),
        controller,
    }
}

export const subscribeFund = (customerId: string, fund: FUND_MODEL) => {
    const controller = loadAbort();
    return {
        call: axios.patch(`${subscribeFundUrl}/${customerId}`, fund, { signal: controller.signal }),
        controller,
    }
}

export const withdrawalFund = (customerId: string, fund: FUND_MODEL) => {
    const controller = loadAbort();
    return {
        call: axios.patch(`${withdrawalFundUrl}/${customerId}`, fund, { signal: controller.signal }),
        controller,
    }
}

export const historyTransactions = () => {
    const controller = loadAbort();
    return {
        call: axios.get(getAllTransactionsUrl, { signal: controller.signal }),
        controller,
    }
}