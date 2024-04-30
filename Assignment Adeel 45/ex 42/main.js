function makeGreat(magicians) {
    for (var i = 0; i < magicians.length; i++) {
        magicians[i] += " the Great";
    }
}
function showMagicians(magicians) {
    console.log("The following are great magicians:");
    for (var i = 0; i < magicians.length; i++) {
        console.log(magicians[i]);
    }
}
var magicians = ["faisal", "adeel", "Penn & Teller"];
makeGreat(magicians);
showMagicians(magicians);
