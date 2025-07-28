/*

GET inputPhrase and shift from command-line arguments
INITIALIZE empty string encryptedPhrase

FOR each char IN inputPhrase:
    IF char is a letter:
        DETERMINE char code
        APPLY shift (positive or negative)
        HANDLE wrap-around from z to a or A to Z
        APPEND shifted char to encryptedPhrase
    ELSE:
        APPEND char as-is to encryptedPhrase

DISPLAY encryptedPhrase



function ceasarcipher () {

    const input = process.argv[2]; //must be string ?
    const shiftnum = process.arg[3];
    let encrypted = "" // string 

    /* if (input not string) { 
        console.log("please enter a string");
        return;
    } 
    
    for (let l of input) {
        if (l.match( a letter)) {

            // conversion
            // shift, conversion needed. ASCII code
            l + shiftnum
            encrypted.append(l)
        }

        else {  //(l is whitespace or punctuation not letter)#
            // do not change
            encrypted.append(l)
        }
    }

    console.log(encrypted)
}

ceasarcipher()

//conversion Versuche: 

// ASCII ohne Wraparound
for (let i = 0; i < input.length; i++) {
    let l = input[i]; 
    if (l == whitespce) {
        encrypted += shifted; //just copy, and go on
    }
    else {      //if l is a letter
        let shifted = String.fromCharCode(l.charCodeAt(0) + shiftnum); // convert & shift
        encrypted += shifted; 
    }
}
 
for i in Range(input.length) {

    let shifted = String.fromCharCode(l.charCodeAt(i) + shiftnum); // conversion
    encrypted.append(shifted)
}

let code = char.charCodeAt(i) ; 
*/

// with array instead of ASCII

function ceasarcipher () {

    const input = process.argv[2]; 
    const shiftnum = Number(process.argv[3]);
    let encrypted = "";  

    const alphabetcap = [
        'A','B','C','D','E','F','G','H','I','J','K','L','M',
        'N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
    const alphabetmin = [
        'a','b','c','d','e','f','g','h','i','j','k','l','m',
        'n','o','p','q','r','s','t','u','v','w','x','y','z'];
      
    /* if (input not string) { 
        console.log("please enter a string");
        return;
    } */

    if (!input || isNaN(shiftnum)) {
        console.log("Please write: node script.js <text> <number>");
        return;
    }

    for (let i = 0; i < input.length; i++) { // l in input
        let l = input[i]; 

        if (alphabetmin.includes(l)) {      //if l is a letter
            let index = alphabetmin.indexOf(l); // find the letter in alphabet, take its index, 
            index += shiftnum
            if (index < 26) {
                encrypted += alphabetmin[index]; 
            }
            else {
                index -= 26
                encrypted += alphabetmin[index];
            }
            
        }
        else if (alphabetcap.includes(l)) {      //if l is a letter
            let index = alphabetcap.indexOf(l); // find the letter in alphabet, take its index, 
            index += shiftnum
            if (index < 26) {
                encrypted += alphabetcap[index]; 
            }
            else {
                index -= 26
                encrypted += alphabetcap[index];
            }
            
        }
        else {  // non letter characters
            encrypted += l;
        }
    }

    console.log(encrypted)
}

ceasarcipher()