var MathUtils = /** @class */ (function () {
    function MathUtils() {
    }
    MathUtils.circleArea = function (radius) {
        return MathUtils.PI * radius * radius;
    };
    MathUtils.PI = 3.14;
    return MathUtils;
}());
console.log(MathUtils.PI);
console.log(MathUtils.circleArea(5));
var Status;
(function (Status) {
    Status["Pending"] = "PENDING";
    Status["InProgress"] = "IN_PROGRESS";
    Status["Completed"] = "COMPLETED";
})(Status || (Status = {}));
var currentStatus = Status.InProgress;
console.log(currentStatus);
