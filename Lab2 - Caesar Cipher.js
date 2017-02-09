/**
 * Created by Michalos88 on 2/9/2017.
 */
// You will be deciphering a given message. It is encrypted with a Caesar Cipher (https://en.wikipedia.org/wiki/Caesar_cipher)
// that increases by 2 after every 3 characters (including symbol characters, which are not encoded), starting at key = 5.
// You should save this message to a file using a text editor.
// Then, your program will prompt the user for the name of the file,
// decrypt the message stored in the file,
// and then write the decrypted message to a new file called solution.txt.

//Importing
var fs = require("fs");
var path = require("path");
var readline = require("readline");

//Asking a question
let rl = readline.createInterface(process.stdin, process.stdout);
rl.question("What is the name of the file? ", FileName => {
    fs.readFile(path.join(__dirname,FileName+".txt"),"utf-8", (err, data) => {
        if (err) console.error("An error occurred while opening the file!", err);
        else
        {
        Text = deciphering(data);
        savetoFile(Text)

        }
    });

    rl.close();
});


// Saving file
function savetoFile(input) {
    fs.writeFileSync("solution.txt", input);
    
}
//Algorithm for deciphering
function deciphering(text){
    var key = 5;
    var Newstring = '';
    // var Ch2Num = text.charCodeAt(0);
    var nospace = "";
    var space = " ";
    var Totalarray = text.split(space);
    var NumWords = Totalarray.length;
    var i = -1;
    var TotalLetters = Totalarray.join();
    var TotalLettersLen = TotalLetters.length;

    // console.log(NumWords);
    // console.log(Totalarray);
    var j = -1;
    while (i <= NumWords-2){
        i++;
        var word = Totalarray[i];
        // console.log(word,i);
        var wordArray = word.split(nospace);
        var NumLetters = wordArray.length;

    }
    while (j < TotalLettersLen-1){
        j++;
        if(j%3==0&&j!=0){
            key = (key + 2)%26;
        }
        // console.log(j,key);
        var Ch2Num = TotalLetters[j].charCodeAt(0);
        if((65<=Ch2Num && Ch2Num<=90) || (97<=Ch2Num && Ch2Num<=122)){
            if (Ch2Num >= 65 && Ch2Num <= 90&& Ch2Num - key < 65){
                var converted = 90-Math.abs((key-(Ch2Num-64)));
            }
            else if ((97<=Ch2Num && Ch2Num<=122) && (Ch2Num - key < 97) ){
                var converted = 122-Math.abs(key-(Ch2Num-96));
            }
            else{
                converted = Ch2Num - key;
            }
            Newstring += String.fromCharCode(converted);
        }
        else{
            Newstring += String.fromCharCode(Ch2Num);
        }
    }

    var Newstring1 = Newstring.split(",").join(" ");
    return Newstring1
}


