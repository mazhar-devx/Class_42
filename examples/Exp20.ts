function search<T>(data: T[], item: T):T | undefined {
    return data.find(value =>value === item);
}
    let userlDs: Array<number> = [1,2,3,4,5];
    let usersNameList: Array<string> = ["Muddassir , " ," SKILLS", "CAREER"];
    let reslds = search(userlDs, 5);
    let resNames = search(usersNameList, "SKILS");
    console.log(reslds);
    console.log(resNames) ;