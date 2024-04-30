var guestArr = ["faisal", "adeel", "noor", "qasim"];
var canNotAttend = "faisal";
var newGuest = "ali";
guestArr[guestArr.indexOf(canNotAttend)] = newGuest;
console.log(guestArr);
