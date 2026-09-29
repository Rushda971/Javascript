//password validator(minimum 8 character)
// let password=prompt("Enter password:");
// if (password.length===8){
// console.log("you are login succesfully");}
// else{
// console.log("Length of password must be 8 character ");
// }

//word counter
// let array=["Strings are for storing text Strings are written with quotes"];
// let counter=array[0].trim();
// console.log(counter.length);

//Remove all spaces from string
/*let array=["Strings are for storing text Strings are written with quotes"];
let spaces=array[0].split(" ").join("");
let result = array[0].replaceAll(" ", "");
console.log(spaces);
console.log(result);*/

//find the longest word in String
/*let array=["Strings are for storing text Strings are written with quotes"];
let longest="";
let words=array[0].split(" ");
for(let word of words){
    if (word.length>longest.length){
        longest=word;
    }
}
console.log(longest);*/

//Replace all ocurrence of word with another word
let words="Strings are for storing text Strings are written with quotes";
let occurence=words.replaceAll("String","Array");
console.log(occurence);

//count the occurence of a character in a string
