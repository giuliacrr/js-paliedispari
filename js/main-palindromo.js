const wordByUser = prompt("Insert a word");//input from user
let wordToMirror = wordByUser.split("");

//wordToMirror =  //Split è una funzione che tramuta le stringhe in array di lettere.
//split("") senza spazio in mezzo alle "", rende ogni lettera una sottostringa. Se invece (" "), la stringa dividerà non in lettere ma in parole.
console.log(wordToMirror);
const answer = palindrome(wordToMirror);
if (answer === true) {
  console.log("It's a palindrome word!");
} else {
  console.log("The word in NOT palindrome.")
}

//Funzione per verificare se è palindromo
function palindrome(word) {
  let wordMirrored = [];
  //Come leggo un array?
  console.log("Here we have the array written from left to right");
  let x = 0;
  for (x; x < word.length; x++) {
    console.log(word[x]);
  }
  //With this cycle I'm going to push the mirrored elements of the first array in a secondary array:
  console.log("And now from right to left");
  let y = word.length - 1;
  for (y; y >= 0; y--) {
    console.log(word[y]);
    wordMirrored.push(word[y]);
  }
  //Let's print the mirrored Array
  console.log("We have now a mirrored array:")
  console.log(wordMirrored);

  let i = 0;
  let ifPalindromo = true;
  for (i; i < word.length; i++) {
    if (word[i] === wordMirrored[i]) {
      console.log(word[i]);
      console.log(wordMirrored[i]);
    } else {
      ifPalindromo = false;
    }
  }
  return ifPalindromo;
}

