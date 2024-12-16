interface Person {
    name: string
}
interface Employee {
batchID: number
}
type User = Person & Employee;
let username: User;
username = {
    batchID : 123,
    name : "ABC",
}
console. log(username ) ;



function printId (id: number | string){
    if (typeof id === "string") {
        console.log(`ID is a string: ${id.toUpperCase()}`)
    }
    else{
        console.log(`ID is a number: ${id}`)
    }
}
printId(101);
printId("abc")