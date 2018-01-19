import {TransactionOrigin} from "./TransactionOrigin";
import {Transaction} from "./Transaction";
import {AccountType} from "./AccountType";

export interface Account {
    accountHolderName: string;
    accountHolderBirthDate: Date;
    balance: number;
    accountType: AccountType;
    accountHistory: Transaction[];
    success: boolean;
    resultBalance: number;
    amount: number;
    description: string;
    transactionDate: Date;
    errorMessage: string;
    dateOpened: Date;
    monthlyTransactions: number;
    withdrawMoney(amount: number, description: string, transactionOrigin: TransactionOrigin): Transaction;
    depositMoney(amount: number, description: string): Transaction;
}