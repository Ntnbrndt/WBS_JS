// Pseudo code:


// GET inputPhrase from command-line argument
// SPLIT inputPhrase into words

// FOR each word IN words:
//     IF word starts with vowel:
//         ADD "way" to end of word
//     ELSE IF word starts with two consonants:
//         MOVE first two letters to end and ADD "ay"
//     ELSE:
//         MOVE first letter to end and ADD "ay"

// JOIN words back into a sentence
// DISPLAY Pig Latin phrase


    // for (l in englishPhrase):
    // if l is a letter 
    //     add to word
    // else if l is " "
    //     end word
    //     add word to array?
    // else (if not letter)
    //     add to array

function piglatin() {
    const input = process.argv[2];
    let latinizedWords = []; // result

    const vowels = ['a','e','i','o','u','A','E','I','O','U']

    if (!input) {
        console.log("Please write: node script.js <text>");
        return;
    }
    
    const words = input.split(" ");             //splitting into words:

    for (let word of words) {

        if (vowels.includes(word[0])) {         // word starts with vowel: 
            word += "way";                      // add way to end
        }

        else { // if(vowels.includes(word[0]))  // word starts with consonant:
            if (vowels.includes(word[1])) {     // second letter vowel
                 word = word.slice(1) + word[0] + "ay";
            }
            else { //(!vowels.includes(word[1])) // second letter consonant
                word = word.slice(2) + word.slice(0, 2) + "ay";
            }
        }
        latinizedWords.push(word);               // add changed word to final string)
    }
    const latinized = latinizedWords.join(" ");
    console.log(latinized)
}

piglatin() 