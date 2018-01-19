"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SavingsAccount = (function () {
    function SavingsAccount() {
        this.balance = 10000;
        this.dateOpened = new Date();
    }
    SavingsAccount.prototype.withdrawMoney = function (amount, description, transactionOrigin) {
        var currentBalance = this.balance;
        this.accountType = 2;
        this.amount = amount;
        if (transactionOrigin == 1 || transactionOrigin == 2) {
            if (this.monthlyTransactions >= 1) {
                if (amount > currentBalance) {
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
                this.errorMessage = "number of transactions is too much";
            }
        }
        else {
            this.amount = amount;
            if (amount > currentBalance) {
                this.success = false;
                this.errorMessage = "Can't";
                this.resultBalance = this.balance;
                this.transactionDate = new Date();
                this.description = description;
            }
        }
        return;
    };
    SavingsAccount.prototype.depositMoney = function (amount, description) {
        this.balance += amount;
        this.resultBalance = this.balance;
        this.success = true;
        this.description = description;
        this.errorMessage = "";
        this.transactionDate = new Date();
        return;
    };
    return SavingsAccount;
}());
exports.SavingsAccount = SavingsAccount;
