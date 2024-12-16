var user = {
    name: "Muddassir",
    age: 28,
    welcome: function () {
        return "Welcome, ".concat(this.name, ".");
    }
};
console.log(user.welcome());
