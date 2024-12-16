var Animal = /** @class */ (function () {
    function Animal(name) {
        this.name = name;
    }
    Animal.prototype.speak = function () {
        console.log("".concat(this.name, " makes a noise."));
    };
    return Animal;
}());
var animal = new Animal("Dog");
animal.speak();
