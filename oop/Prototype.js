console.log('prototype');

function User(email, name) {
    this.email = email;
    this.name = name;
    this.online = false;
}

User.prototype.login = function () {
    this.online = true;
    console.log(`${this.email} has Logged in!`);
}

User.prototype.logout = function () {
    this.online = false;
    console.log(`${this.email} has Logged Out!`);
}

let user1 = new User('adib@gmail.com', 'adib');

user1.login();
user1.logout();

