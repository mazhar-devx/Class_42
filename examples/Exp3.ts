import { notStrictEqual } from "assert";

interface Person{
    name: string;
    age: number;
}

interface Employee extends Person{
    employeeId: number;
    department: string;
}

const employee: Employee = {
    name: "Muddassir",
    age: 28,
    employeeId: 101,
    department: "Engineering"
};

console.log(employee);