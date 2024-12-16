class Animal {
    name: string;
    constructor(name: string){
        this.name = name;
    }
    speak(): void {
        console.log(`${this.name} makes a noise.`)
    }
}

const animal = new Animal("Dog");
animal.speak();