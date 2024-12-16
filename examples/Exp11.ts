type mixed = (number | string)[]
function users(data: mixed): void{
    console.log(data);
}

let data: mixed = ["1", 2, 3,"4"];
users(data);