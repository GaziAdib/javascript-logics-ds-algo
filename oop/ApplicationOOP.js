console.log('OOP Application');

// Bank Deposite Application
// total types of account normal account, student account, vip account

class Customer {
    constructor(accountNumber, username, email, accountType) {
        this.accountNumber = accountNumber
        this.username = username;
        this.email = email;
        this.accountType = accountType;
        this.totalBalance = 0;
    }

    // customer can deposite based in acount type (nornmal, vip, student) some amount in bank

    deposite(amount) {
        if (this.accountType == 'normal') {
            if (amount <= 25000) {
                this.totalBalance += Number(amount);
            } else {
                console.log('You Cannot Deposite more than 25000 in Normal Account')
            }
        } else if (this.accountType == 'vip') {
            this.totalBalance += Number(amount);
        } else {
            if (amount <= 10000) {
                this.totalBalance += Number(amount);
                console.log('You Cannot Deposite more than 10000 in Normal Account')
            }
        }

    }


    // withdraw some amount based on accountType

    withdraw(amount) {
        if (this.accountType == 'normal') {
            if (amount <= 25000) {
                this.totalBalance -= Number(amount);
            } else {
                console.log('You Cannot Withdraw more than 25000 in Normal Account')
            }
        } else if (this.accountType == 'vip') {
            this.totalBalance -= Number(amount);
        } else {
            if (amount <= 10000) {
                this.totalBalance -= Number(amount)
            } else {
                console.log('You Cannot Withdraw more than 10000 in Normal Account')
            }
        }
    }

    // check account Infomation (total Balance, account Number, email, username, accountType)

    checkAccountInfo(accountNumber) {
        if (!accountNumber) {
            console.log('No Account Number Provided')
        } else {
            console.log(`Your Account Info Account No: ${accountNumber}, Name: ${this.username} with Email: ${this.email} with Account Type: ${this.accountType} has total Balance of ${this.totalBalance}`)
        }
    }
}

let normalCustomer = new Customer(123456789, 'adib', 'adib@gmail.com', 'normal');

let vipCustomer = new Customer(12345678910, 'vip', 'vip@gmail.com', 'vip');

let studentCustomer = new Customer(12345678911, 'najifa', 'najifa@gmail.com', 'student');

// deposite

normalCustomer.deposite(20000);

// print check account balance

normalCustomer.checkAccountInfo(123456789)

// withdraw

normalCustomer.withdraw(18000);

// print again the info after the withdraw

normalCustomer.checkAccountInfo(123456789)

// deposite again 
normalCustomer.deposite(50000);

// print
normalCustomer.checkAccountInfo(123456789)


// class Admin extends Customer {

// }

// // oop inheritance things in full Detail
// const admin = new Admin(1234567891, 'admin', 'admin@gmail.com', 'vip')

// admin.deposite(50000);

// admin.checkAccountInfo(1234567891);





class Admin extends Customer {

    // change account type of customer

    changeAccountType(accNumber, type) {
        if (accNumber !== '') {
            this.accountType = type;
            this.accountNumber = accNumber;
            console.log('account type changed')
        }

    }

}

// oop inheritance things in full Detail
let admin = new Admin(1234567891, 'admin', 'admin@gmail.com', 'vip')

admin.deposite(50000);

admin.checkAccountInfo(1234567891);

admin.changeAccountType(123456789, 'vip');

admin.checkAccountInfo(123456789);


