function sum() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    return items.reduce(function (acc, curr) { return acc + curr; }, 0);
}
console.log(sum(2, 3, 4));
