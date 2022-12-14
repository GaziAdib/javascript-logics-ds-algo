console.log('OOP Concepts in JavaScripts');

// const userOne = {
//     username: 'Adib',
//     email: 'adib@gmail.com',
//     login() {
//         console.log(`${this.username} with email: ${this.email} has Logged In!`)
//     },
//     logout() {
//         console.log(`${this.username} with email: ${this.email} has Logged Out!`)
//     }

// }

// userOne.username = 'Choya';
// userOne['email'] = 'choya@gmail.com';
// console.log(userOne);


// CLASSES OOP in JS

class User {
    constructor(email, name) {
        this.email = email;
        this.name = name;
        this.score = 0;
    }

    login() {
        console.log(`${this.email} just logged In!`);
        return this;
    }

    logout() {
        console.log(`${this.email} just logged Out!`);
        return this;
    }

    updateScore() {
        this.score++;
        console.log(`${this.email} score is now ${this.score}`)
        return this;
    }
}

// const user1 = new User('adib@gmail.com', 'adib');
// const user2 = new User('choya@gmail.com', 'choya');

// METHOD Chaining (use this)
// user1.login().updateScore().updateScore().logout();
// user2.login().updateScore().updateScore().logout();

// console.log(user1);


// Inheritance in JS



class Admin extends User {

    deleteUser(user) {
        users = users.filter(u => {
            return u.email !== user.email
        });
    }

}


// create Admin

const user1 = new User('adib@gmail.com', 'adib');
const user2 = new User('choya@gmail.com', 'choya');
const admin = new Admin('admin@gmail.com', 'admin');

let users = [user1, user2, admin]

admin.deleteUser(user1);

admin.login();

console.log(users);





























