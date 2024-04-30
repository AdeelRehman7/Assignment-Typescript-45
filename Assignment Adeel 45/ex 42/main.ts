
function makeGreat(magicians: string[]) {
    for (let i = 0; i < magicians.length; i++) {
magicians[i] += " the Great";
 }
    }
    

    function showMagicians(magicians: string[]) {
    console.log("The following are great magicians:");
    for (let i = 0; i < magicians.length; i++) {
    console.log(magicians[i]);
}
    }
    

    let magicians = ["Adeel", "Faisal", "Penn & Teller"];
    

    makeGreat(magicians);

    showMagicians(magicians);
    