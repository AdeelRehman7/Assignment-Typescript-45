var guests = ["faisal", "ali", "adeel", "noman", "qasim"];
// console.log("due to limited space, only two people can be invited for dinner. ");
// while (guests.length > 2) {
//     const removedGuest = guests.pop();
//     console.log(`sorry, ${removedGuest}, you're no longer invited to dinner.`);
// }
// guests.forEach((guest) => {
//     console.log(`Dear ${guest}, you're still invited to dinner.`);
// });
guests.pop();
guests.pop();
console.log("final guest list:", guests);
