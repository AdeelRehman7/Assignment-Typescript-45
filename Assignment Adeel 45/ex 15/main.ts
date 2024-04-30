let guestArr : string[] = ["faisal","adeel","noor","qasim"];

let canNotAttend : string = "faisal"

let newGuest : string = "ali"

guestArr[guestArr.indexOf(canNotAttend)] = newGuest;
console.log(guestArr)