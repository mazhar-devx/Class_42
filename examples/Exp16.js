"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Car = /** @class */ (function () {
    function Car(brand, year, model) {
        this.brand = brand;
        this.year = year;
        this.model = model;
    }
    Car.prototype.getYear = function () {
        return this.year;
    };
    return Car;
}());
var ElectricCar = /** @class */ (function (_super) {
    __extends(ElectricCar, _super);
    function ElectricCar(brand, year, model) {
        return _super.call(this, brand, year, model) || this;
    }
    ElectricCar.prototype.getModel = function () {
        return this.model;
    };
    return ElectricCar;
}(Car));
var car = new Car("Toyota", 2021, "Corolla");
console.log(car.brand);
console.log(car.getYear());
