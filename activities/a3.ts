class Animal {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
    makeSound(): void {
        console.log("animal sound");
    }
}
class Dog extends Animal {
    constructor(name: string) {
        super(name);
    }
    makeSound(): void {
        console.log(this.name," Is that real");
    }
}
const a = new Animal("Animal");
a.makeSound();
const myDog = new Dog("Dog");
myDog.makeSound(); 