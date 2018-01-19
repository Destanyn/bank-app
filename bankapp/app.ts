import { RetiermentAccount } from "./RetiermentAccount";

import {SavingsAccount} from "./SavingsAccount";

import {CheckingAccount} from "./CheckingAccount";

let checking = new CheckingAccount();

let savings = new SavingsAccount();

let Retierment = new RetiermentAccount();

console.log(savings.withdrawMoney(400,"Shoes",2));
console.log(savings.success);
console.log(savings.errorMessage);
console.log(savings.transactionDate);
console.log(savings.balance);
console.log(savings.description);
console.log(savings.monthlyTransactions);

console.log(checking.withdrawMoney(200,"nails",1));
console.log(checking.success);
console.log(checking.errorMessage);
console.log(checking.transactionDate);
console.log(checking.balance);
console.log(checking.description);

console.log(Retierment.withdrawMoney(4000,"makeup",2));
console.log(Retierment.success);
console.log(Retierment.errorMessage);
console.log(Retierment.transactionDate);
console.log(Retierment.balance);
console.log(Retierment.description);
console.log(Retierment.monthlyTransactions);