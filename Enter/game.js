//Select a random word from the "allWords" array and assign it to a variable called "selectedWord"
let randomIndex = Math.floor(Math.random() * (allWords.length - 1)); //Don't worry about this math, but it will select a random number between 0 and the last index of the allWords array.
selectedWord = allWords[randomIndex]; // Use that random index in allWords and set that to a new variable that will hold our selectedWord.


//Scramble the selectedWord and display it inside of a div called "scrambledWord"
document.getElementById("scrambledWord").innerHTML = selectedWord
  .split("") //This will split the word into an array of letters
  .sort(() => Math.random() - 0.5) //This will randomly sort the array of letters
  .join(""); // Now we want to join all those array elements back together into a string



// This is a placeholder. You will need to move code into this funcation as part of the assignment. HINT -- the code you want to move into this function is above. :)
function nextWord() {

  let selectedWord="";
let result = text.toLowerCase();

  const allWords = ["Costumes", "Monster", "Disguise", "Ghost", "Witch", "Pumpkin", "Candle", "Zombie", "Frankenstein", "October", "Scarecrow", "Pirate", "Crow", "Cat", "Broomstick", "Vampire", "Prince", "Princess", "Candy", "Werewolf", "Mask", "Spell", "Goblin", "Ghoul", "Alien", "Mummy", "Spooky", "Creepy", "Slimy", "Fangs", "Blood", "Skeleton", "Graveyard", "Party", "Screaming", "Bats", "Skull", "Wicked", "Scary"];


//Select a random word from the "allWords" array and assign it to a variable called "selectedWord"
let randomIndex = Math.floor(Math.random() * (allWords.length - 1)); //Don't worry about this math, but it will select a random number between 0 and the last index of the allWords array.
selectedWord = allWords[randomIndex]; // Use that random index in allWords and set that to a new variable that will hold our selectedWord.


//Scramble the selectedWord and display it inside of a div called "scrambledWord"
document.getElementById("scrambledWord").innerHTML = selectedWord
  .split("") //This will split the word into an array of letters
  .sort(() => Math.random() - 0.5) //This will randomly sort the array of letters
  .join(""); // Now we want to join all those array elements back together into a string
  document.getElementById("unscrambled").innerHTML="";
 }

document.getElementById ("myWord").trimEnd();

// This function is called when the user clicks on the "Check" button.
function check() {
  if (selectedWord.toLowerCase() === document.getElementById("myWord").value) {
    alert("CORRECT!");
  } {nextWord(); }
}

//This function gets called when the user clicks on the "Give Up" button.
function giveUp() {
  document.getElementById("myWord").value = selectedWord;
}


nextWord();