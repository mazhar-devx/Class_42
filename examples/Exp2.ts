interface User {
    name: string;
    age: number;
    welcome(): string;
}
const user: User = {
    name: "Muddassir",
    age: 28,
    welcome(){
        return `Welcome, ${this.name}.`;
    }
};


console.log(user.welcome())