function makeGreat(magicians) {
    var greatMagicians = [];
    for (var i = 0; i < magicians.length; i++) {
        greatMagicians.push(magicians[i] + " the Great");
    }
    return greatMagicians;
}
function showMagicians(magicians) {
    console.log("The following are great magicians:");
    for (var i = 0; i < magicians.length; i++) {
        console.log(magicians[i]);
    }
}
var magicians = ["Faisal", "Adeel", "Hassan"];
var greatMagicians = makeGreat(magicians);
console.log("Original array of magicians:");
showMagicians(magicians);
console.log("New array of great magicians:");
showMagicians(greatMagicians);
