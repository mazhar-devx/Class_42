class MathUtils {
    static  PI: number = 3.14;
    static circleArea(radius: number): number{
        return MathUtils.PI * radius * radius;
    }
}

console.log(MathUtils.PI);
console.log(MathUtils.circleArea(5))


enum Status {
    Pending = "PENDING",
    InProgress = "IN_PROGRESS",
    Completed = "COMPLETED",
}
let currentStatus: Status = Status.InProgress;
console.log(currentStatus);