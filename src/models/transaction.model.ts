import { CLIENT_MODEL } from "./clients.model";
import { FUND_MODEL } from "./fund.model";

export enum TransactionType {
    SUBSCRIPTION = 'Inscripción',
    WITHDRAWAL = 'Retiro'
}

export interface TRANSACION_MODEL {
    id: string;
    type: TransactionType;
    customer: CLIENT_MODEL;
    fund: FUND_MODEL;
    amount: number;
}