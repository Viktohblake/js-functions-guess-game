var username = prompt("Enter your username: ");

let userScore = 0;

let rangelimit = 2;

let stage = 1;

function getGuess() {

  const randomNumber = Math.floor(Math.random() * rangelimit) + 1;

  do {

    console.log('Welcome to Stage ' + stage);
    console.log('Current score is ' + userScore);
    
    var guessNumber = prompt("Guess a number between 1 and " + rangelimit + ": " );

    if (guessNumber == randomNumber) {

      stage++;
      rangelimit++;
      userScore++;

      console.log('Congrats, your guess was correct! ' + randomNumber + ' is the random number' + '\n');

    } else {

      console.log('Sorry, your guessed wrong! ' + randomNumber + ' is the random number');

    }

  } while (guessNumber == randomNumber);

}

getGuess();