type Sum = (a:number, b:number , c?:number)=>number

let checkData: Sum = (a,b,c=0)=>{
    return a + b + c;
}

console.log(checkData(2,3))