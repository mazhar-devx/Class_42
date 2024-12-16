function sum(...items:number[]){
    return items.reduce((acc,curr)=> acc + curr,0);
}

console.log(sum(2,3,4))