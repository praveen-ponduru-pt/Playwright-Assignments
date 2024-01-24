

const BankAccount = {
    balance: 5000
}

const savingsAccount = Object.create(BankAccount);
savingsAccount.withdrawl = function (amount) {
    if (amount > 0) {
        this.balance -= amount;
        console.log(this.balance);
    }
    else
        console.log('Enter amount greater than 0');
};

const currentAccount = Object.create(BankAccount);

currentAccount.deposit = function (amount) {
    if (amount > 0) {
        this.balance += amount;
        console.log(this.balance);
    }
    else
        console.log('Enter amount greater than 0');
};


savingsAccount.withdrawl(500);
currentAccount.deposit(1000);


// function BankAccount(accountNumber, balance) {
//     this.accountNumber = accountNumber;
//     this.balance = balance;
// }

// BankAccount.prototype.deposit = function (amount) {
//     if (amount > 0) {
//         this.balance += amount;
//         console.log(this.balance);
//     }
//     else
//         console.log('Enter amount greater than 0');

// }

// BankAccount.prototype.withdraw = function (amount) {
//     if (amount > 0) {
//         this.balance -= amount;
//         console.log(this.balance);
//     }
//     else
//         console.log('Enter amount greater than 0');
// }

// function SavingsAccount(accountNumber, balance) {
//     BankAccount.call(this, accountNumber, balance);
// }

// function CurrentAccount(accountNumber, balance) {
//     BankAccount.call(this, accountNumber, balance);
// }

// SavingsAccount.prototype = Object.create(BankAccount.prototype);
// SavingsAccount.prototype.constructor = SavingsAccount;

// CurrentAccount.prototype = Object.create(BankAccount.prototype);
// CurrentAccount.prototype.constructor = CurrentAccount;

// const savingsAcc = new SavingsAccount('123', 1000);
// const currentAcc = new CurrentAccount('456', 10000);

// savingsAcc.deposit(500);
// currentAcc.withdraw(1000);