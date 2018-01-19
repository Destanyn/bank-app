"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var RetiermentAccount = (function () {
    function RetiermentAccount() {
        this.balance = 10000000;
        this.userAge = 64;
        this.earlyWithdrawal = (this.balance * .1);
        this.dateOpened = new Date();
    }
    RetiermentAccount.prototype.withdrawMoney = function (amount, description, transactionOrigin) {
        var currentBalance = this.balance;
        this.accountType = 3;
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
                    if (this.userAge < 65) {
                        this.balance -= this.earlyWithdrawal;
                        this.success = true;
                        this.errorMessage = '';
                        this.resultBalance = this.balance -= amount;
                        this.transactionDate = new Date();
                        this.monthlyTransactions--;
                    }
                    else {
                        this.success = true;
                        this.errorMessage = '';
                        this.resultBalance = this.balance;
                        this.transactionDate = new Date();
                        this.description = description;
                    }
                }
            }
            else {
                this.errorMessage = "number of transactions is too much";
            }
        }
        else
            this.amount = amount;
        if (amount > currentBalance) {
            this.success = false;
            this.errorMessage = "Can't";
            this.resultBalance = this.balance;
            this.transactionDate = new Date;
            this.description = description;
        }
        else {
            this.success = true;
            this.errorMessage = "";
            this.resultBalance = this.balance -= amount;
            this.transactionDate = new Date;
            this.description = description;
        }
        return;
    };
    RetiermentAccount.prototype.depositMoney = function (amount, description) {
        this.balance += amount;
        this.resultBalance = this.balance;
        this.success = true;
        this.description = description;
        this.errorMessage = "";
        this.transactionDate = new Date();
        return;
    };
    return RetiermentAccount;
}());
exports.RetiermentAccount = RetiermentAccount;
