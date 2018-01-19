"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var TransactionOrigin_1 = require("./TransactionOrigin");
var CheckingAccount = (function () {
    function CheckingAccount() {
        this.balance = 10000;
        this.dateOpened = new Date();
    }
    CheckingAccount.prototype.withdrawMoney = function (amount, description, transactionOrigin) {
        var currentBalance = this.balance;
        this.accountType = 1;
        if (transactionOrigin == TransactionOrigin_1.TransactionOrigin.branch || transactionOrigin == TransactionOrigin_1.TransactionOrigin.phone || transactionOrigin == TransactionOrigin_1.TransactionOrigin.web) {
            this.amount = amount;
            if (amount > currentBalance) {
                this.success = false;
                this.errorMessage = "The Amount is too high";
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
            }
            return;
        }
    };
    CheckingAccount.prototype.depositMoney = function (amount, description) {
        this.balance += amount;
        this.resultBalance = this.balance;
        this.success = true;
        this.description = description;
        this.errorMessage = "";
        this.transactionDate = new Date();
        return;
    };
    return CheckingAccount;
}());
exports.CheckingAccount = CheckingAccount;
