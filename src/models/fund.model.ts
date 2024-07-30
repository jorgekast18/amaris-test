export interface FUND_MODEL {
    id: number;
    name: string;
    minValue: number;
    category: string;

}

export interface SUBSCRIBE_FUND_MODEL {
    fund_id: string;
    customer_id: string;
    amount: number;
    type: string;
}