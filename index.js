const { question } = require("readline-sync");
const { displayWordSoFar, isGameWon, isGameLost } = require("./gamelogic");

game("javascript", []);

function game(word, guesses) {
  console.log("Dit heb je tot nu toe geraden: ", guesses);

  const letter = question("Raad een letter: ");

  // voeg de geraden letter toe aan de array met guesses
  guesses.push(letter);

  console.log(displayWordSoFar(word, guesses));

  if(isGameWon(word, guesses)) {
    console.log("Gefeliciteerd! je hebt het woord geraden");
  }
else if (!isGameLost(word, guesses)) {
    // volgende ronde! we roepen game nog een keer aan
    game(word, guesses);
   }
else {
    console.log("helaas , je hebt verloren!!!!");
    console.log(`
__________  
| /     |    ░██████╗░░█████╗░██╗░░░░░░██████╗░░░░░░██╗███████╗
|/     _o_   ██╔════╝░██╔══██╗██║░░░░░██╔════╝░░░░░░██║██╔════╝
|       O    ██║░░██╗░███████║██║░░░░░██║░░██╗░░░░░░██║█████╗░░
|      / \\   ██║░░╚██╗██╔══██║██║░░░░░██║░░╚██╗██╗░░██║██╔══╝░░
|            ╚██████╔╝██║░░██║███████╗╚██████╔╝╚█████╔╝███████╗
===========  ░╚═════╝░╚═╝░░╚═╝╚══════╝░╚═════╝░░╚════╝░╚══════╝
`);
  }

}

// console.log(`
// __________
// | /     |    ░██████╗░░█████╗░██╗░░░░░░██████╗░░░░░░██╗███████╗
// |/     _o_   ██╔════╝░██╔══██╗██║░░░░░██╔════╝░░░░░░██║██╔════╝
// |       O    ██║░░██╗░███████║██║░░░░░██║░░██╗░░░░░░██║█████╗░░
// |      / \\   ██║░░╚██╗██╔══██║██║░░░░░██║░░╚██╗██╗░░██║██╔══╝░░
// |            ╚██████╔╝██║░░██║███████╗╚██████╔╝╚█████╔╝███████╗
// ===========  ░╚═════╝░╚═╝░░╚═╝╚══════╝░╚═════╝░░╚════╝░╚══════╝
// `);


