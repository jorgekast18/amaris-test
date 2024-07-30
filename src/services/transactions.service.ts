import axios from 'axios';
import { loadAbort } from '../utilities';
import { FUND_MODEL, SUBSCRIBE_FUND_MODEL } from '@models';
import { getAllFunds, subscribeFundUrl, getAllTransactionsUrl, withdrawalFunddUrl } from '../constants/urls';

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

export const subscribeFund = (fund: SUBSCRIBE_FUND_MODEL) => {
    const controller = loadAbort();
    return {
        call: axios.post(subscribeFundUrl, fund, { signal: controller.signal }),
        controller,
    }
}

export const withdrawalFund = (fund: SUBSCRIBE_FUND_MODEL) => {
    const controller = loadAbort();
    return {
        call: axios.post(withdrawalFunddUrl, fund, { signal: controller.signal }),
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