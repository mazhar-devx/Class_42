let numbers: number[] = [1,2,3,4,5];

numbers.push(6);
console.log(numbers);

let lastNumber = numbers.pop();
console.log(lastNumber)
console.log(numbers)


let firstNumber = numbers.shift();
console.log(firstNumber)
console.log(numbers)

numbers.unshift(0)
console.log(numbers)