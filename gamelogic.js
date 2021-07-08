function displayWordSoFar(word, guesses) {
  const {wordSoFar} = gameState(word, guesses);
  return wordSoFar;
 }

function isGameWon(word, guesses) {
  if(displayWordSoFar(word, guesses).includes("_")) {
    return false;
  }
  return true;
}

function isGameLost(word, guesses) {
  const {countWrongLetters} = gameState(word, guesses);
  if(countWrongLetters < 7) {
    return false;
  }
   return true;
}

function gameState(word, guesses) {
  let WordSoFar = [] ;
  let countWrongLetters = guesses.length;
  const wordArray = word.split("");
    for (let i = 0; i < wordArray.length; i++) {
    for (let j = 0; j < guesses.length ; j++) {
      if (guesses[j] === wordArray[i]) {
        WordSoFar.push( wordArray[i]);
        countWrongLetters = --countWrongLetters;
        break;
      }
    }
    if(WordSoFar.length === i  ) {
      WordSoFar.push("_");
    }
  }
  let result = {
    wordSoFar: WordSoFar.join(" ") + " ",
    countWrongLetters: countWrongLetters
  };
  return result;
}

module.exports = {
  displayWordSoFar: displayWordSoFar,
  isGameWon: isGameWon,
  isGameLost: isGameLost,
};

