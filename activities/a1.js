var Employee = /** @class */ (function () {
    function Employee(name, age) {
        this.name = name;
        this.age = age;
    }
    Employee.prototype.sayHello = function () {
        return "Hello, my name is ".concat(this.name, " and I am ").concat(this.age, " years old.");
    };
    return Employee;
}());
var hello = new Employee("Mazhar", 19);
console.log(hello.sayHello());
