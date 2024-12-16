import { log } from "console";

class Car {
    public brand: string;
    private year: number;
    protected model: string;
    constructor (brand: string , year: number, model: string){
        this.brand = brand;
        this.year = year;
        this.model = model;
    }
    getYear(): number{
        return this.year;
    }
}

class ElectricCar extends Car{
    constructor (brand: string, year: number, model: string){
        super(brand, year, model);
    }
    getModel(): string{
        return this.model;
    }
}

const car = new Car("Toyota", 2021, "Corolla");
console.log(car.brand);
console.log(car.getYear());
