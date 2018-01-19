export interface Transaction{
    success:boolean;
    amount: number;
    resultBalance: number;
    transactionDate: Date;
    description: string;
    errorMessage: string;

}