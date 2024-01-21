class Customer {
    constructor(firstName, lastName) {

        this.firstName = firstName;
        this.lastName = lastName;
    }
    customerName() {
        return this.firstName + ' ' + this.lastName;
    }
}

class Account {
    constructor(customer, name, balance) {
        this.customer = customer;
        this.name = name;
        this.balance = balance;
    }
    displayAccountDetails() {
        console.log(this.customer.customerName(), this.name, this.balance);
    }
}

let praveen = new Customer('Praveen', 'Kumar');
// praveen.customerName();

let hdfc = new Account(praveen, 'HDFC', 1000);
hdfc.displayAccountDetails();

let sbi = new Account(praveen, 'SBI', 5000);
sbi.displayAccountDetails();
