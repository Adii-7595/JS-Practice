
class Person {
    constructor(firstName, lastName) {
        this._firstName = firstName;
        this._lastName = lastName
    }
    get firstName() {
        return this._firstName;
    }

    set firstName(value) {
        this._firstName = value;
    }

    get lastName() {
        return this._lastName
    }

    set lastName(value) {
        this._lastName = value;
    }
}

const person = new Person('adi', 'gupta');

console.log(`first name : ${person.firstName}`)
console.log(`last name : ${person.lastName}`)


person.firstName = 'sonal';
person.lastName = 'tiwari';

console.log(`first name : ${person.firstName}`)
console.log(`last name : ${person.lastName}`)





class BankAccount {
    #balance;

    constructor(initialBalance = 0) {
        this.#balance = initialBalance;
    }

    deposit(amount) {
        if (amount > 0) {
            this.#balance += amount;
            console.log(`deposited: Rs ${amount}`)

        } else {
            console.log('Deposit amount must pe positive');
        }
    }

    withdraw(amount) {
        if (amount > 0 && amount <= this.#balance) {
            this.#balance -= amount;
            console.log(`withdrawn amount: Rs${this.amount}`);

        } else {
            console.log('Withdrawal amount must be positive');
        }
    }


    getBalance() {
        return this.#balance;
    }
}


const account = new BankAccount(100)

account.deposit(50)
console.log(`current balance: Rs${account.getBalance()}`);
account.deposit(50)

console.log(`current balance: Rs${account.getBalance()}`);
account.withdraw(50)
console.log(`current balance: Rs${account.getBalance()}`);
account.deposit(5000)

console.log(`current balance: Rs${account.getBalance()}`);
account.withdraw(500)

console.log(`current balance: Rs${account.getBalance()}`);