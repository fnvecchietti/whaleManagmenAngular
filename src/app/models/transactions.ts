import { ApiResponse } from "./endpoints";

export interface Transaction {
    type: string
    amount: number
    account_ref: string
    currency_ref: string
    description: string
}


export interface TransactionResponse {
    transactionId: string;
    type: string;
    date: Date;
    amount: number;
    username: string;
}


export interface UserTransactions extends ApiResponse {
    rows: Array<TransactionResponse>
}