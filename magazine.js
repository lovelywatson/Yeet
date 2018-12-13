
// Complete the checkMagazine function below.
function checkMagazine(magazine, note) {

    let notearr = Array.from(note);
    let magarr = Array.from(magazine);
    notearr.sort();
    magarr.sort();
    let match = 0;

    for (let i = 0; i < magarr.length; i++) {
        if (magarr[i] === notearr[match]) {
            match++;
        }
    }
    let result = match == notearr.length;
    if (result == false || notearr.length > magarr.length) {
        console.log('No');
    } else {
        console.log("Yes");
    }
}
   
let mag = "15 6 apgo clm w lxkvg mwz elo bg elo lxkvg elo apgo apgo w elo bg";
let note = "elo lxkvg bg mwz clm w";
checkMagazine(mag, note);
