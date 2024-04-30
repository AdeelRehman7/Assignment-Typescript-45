
function makeGreat(magicians: string[]): string[] {
const greatMagicians = [];
for (let i = 0; i < magicians.length; i++) {
greatMagicians.push(magicians[i] + " the Great");
}
return greatMagicians;
    }
    
    
    function showMagicians(magicians: string[]) {
    console.log("The following are great magicians:");
    for (let i = 0; i < magicians.length; i++) {
    console.log(magicians[i]);
    }
    }
    
  
    let magicians = ["Adeel", "Faisal", "Hassan"];
    
  
    let greatMagicians = makeGreat(magicians);
    

    console.log("Original array of magicians:");
    showMagicians(magicians);

    console.log("New array of great magicians:");
    showMagicians(greatMagicians);
    