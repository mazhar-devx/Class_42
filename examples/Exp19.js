var username;
username = {
    batchID: 123,
    name: "ABC",
};
console.log(username);
function printId(id) {
    if (typeof id === "string") {
        console.log("ID is a string: ".concat(id.toUpperCase()));
    }
    else {
        console.log("ID is a number: ".concat(id));
    }
}
printId(101);
printId("abc");
