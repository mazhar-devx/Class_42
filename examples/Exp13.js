var numbers = [1, 2, 3, 4, 5];
numbers.forEach(function (num) {
    console.log(num * 2);
});
var doubled = numbers.map(function (num) { return num * 2; });
console.log(doubled);
var evenNumbers = numbers.filter(function (num) { return num % 2 == 0; });
console.log(evenNumbers);
var sum_ = numbers.reduce(function (acc, num) { return acc + num; }, 0);
console.log(sum_);
var found = numbers.find(function (num) { return num % 2 === 0; });
console.log(found);
numbers.sort(function (a, b) { return b - a; });
console.log(numbers);
