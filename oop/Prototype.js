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

// protototype Inheritance
function Admin(...args) {
    User.apply(this, args);
    console.log('args', args);
}

// created an object similar to User Prototype
Admin.prototype = Object.create(User.prototype);

let user1 = new User('adib@gmail.com', 'adib');
let admin = new Admin('admin@gmail.com', 'admin');

admin.login();
admin.logout();

// console.log('admin', admin.login());

// user1.login();
// user1.logout();

