import { Account } from "./Accounts";
import {AccountType} from "./AccountType";
import {Transaction} from "./Transaction";
import {TransactionOrigin} from "./TransactionOrigin";


export class SavingsAccount implements Account {

    constructor(){
        this.dateOpened = new Date();
    }

    accountHolderName: string;
    accountHolderBirthDate: Date;
    balance: number = 10000;
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


    withdrawMoney(amount: number, description: string, transactionOrigin: TransactionOrigin): Transaction {
        let currentBalance = this.balance;
        this.accountType = 2;
        this.amount = amount;
        if (transactionOrigin == 1 || transactionOrigin == 2) {
            if(this.monthlyTransactions >=1){
                if(amount> currentBalance){
                    this.success = false;
                    this.errorMessage = "Nope";
                    this.resultBalance = this.balance;
                    this.transactionDate = new Date();
                    this.description = description;
                }
                else {
                    this.success = true;
                    this.errorMessage = "";
                    this.resultBalance = this.balance -= amount;
                    this.transactionDate = new Date();
                    this.description = description;
                    this.monthlyTransactions--;
                }
            }
            else {
                this.errorMessage = "number of transactions is too much"
            }
        }
        else {
            this.amount = amount;
            if(amount > currentBalance ){
                this.success = false;
                this.errorMessage = "Can't";
                this.resultBalance = this.balance;
                this.transactionDate = new Date();
                this.description = description;
            }
        }
        return;
    }


    depositMoney(amount: number, description: string): Transaction {
        this.balance += amount;
        this.resultBalance = this.balance;
        this.success = true;
        this.description = description;
        this.errorMessage = "";
        this.transactionDate = new Date();

        return;
    }
}
