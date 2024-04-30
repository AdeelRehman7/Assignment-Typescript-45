let guestarr : string[] = ["faisal", "adeel", "qasim", "ali"];
let canNotAttend : string = "ali"
let newGuest : string = "noman"
guestarr[guestarr.indexOf(canNotAttend)] = newGuest;
console.log (guestarr)
// guestarr.map((items) =>
// console.log(`Dear ${items}, I found a bigger dinner table so I am invited more peoples.`)
// );
let guestbeg : string ="saif"
guestarr.unshift(guestbeg);
console.log

let middleguest : string = "arsalan"
let middleindex = guestarr.length/3
guestarr.splice(middleindex,0,middleguest)
console.log

guestarr.push("danish")
console.log(guestarr)

guestarr.map((items) =>
console.log (` dear ${items}, you are invited in the more people list on dinner`));