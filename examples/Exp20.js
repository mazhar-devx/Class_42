function search(data, item) {
    return data.find(function (value) { return value === item; });
}
var userlDs = [1, 2, 3, 4, 5];
var usersNameList = ["Muddassir , ", " SKILLS", "CAREER"];
var reslds = search(userlDs, 5);
var resNames = search(usersNameList, "SKILS");
console.log(reslds);
console.log(resNames);
