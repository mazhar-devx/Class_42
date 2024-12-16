let numbers: number[] = [1,2,3,4,5];
numbers.forEach(num =>{
    console.log(num * 2 )
})

let doubled = numbers.map(num => num *2);
console.log(doubled);

let evenNumbers = numbers.filter(num => num % 2 == 0);
console.log(evenNumbers);

let sum_ = numbers.reduce((acc, num)=> acc + num, 0);
console.log(sum_)


let found = numbers.find(num => num % 2 === 0);
console.log(found);

numbers.sort((a,b)=> b - a);
console.log(numbers)