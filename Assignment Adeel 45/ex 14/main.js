// let GuestArr : string[] = ["faisal","mehmood","adeel","noman"];
// let guestArr: string = "faisal"
// console.log(canNotAttend + " " "can not attend the dinner.")
// let newGuest : string = "noor"
// GuestArr [guestArr.indexOf(canNotattend)] = newGuest;
// console.log(GuestArr)
var GuestArr = ["faisal", "mehmood", "adeel", "noman"];
GuestArr.map(function (items) {
    return console.log("Dear ".concat(items, ", you are invited to the dinner."));
});
