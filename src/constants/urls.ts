const urlBase = 'http://127.0.0.1:8000/api/v1';

// Customers
export const getAllCustomers = `${urlBase}/customers/customers`

// Funds
export const getAllFunds = `${urlBase}/funds`

// Transactions
export const getAllTransactionsUrl = `${urlBase}/transactions/transactions`
export const subscribeFundUrl = `${urlBase}/transactions/transactions`
export const withdrawalFunddUrl = `${urlBase}/transactions/transactions`
