
    // Creates an array that lists out all of the options (Rock, Paper, or Scissors).
    var computerChoices = "abcdef";
    var computerGuess = null;
    var userGuesses = [];
    // Creating variables to hold the number of wins, losses, and ties. They start at 0.
    var wins = 0;
    var losses = 0;
    var guess_left = 9;
    var guess_done =[];
    // Create variables that hold references to the places in the HTML where we want to display things.
    
    
    // This function is run whenever the user presses a key.
    document.onkeyup = function(event) {
      // Determines which key was pressed.
      var userGuess = event.key;
      var winsText = document.getElementById("wins-text");
    var lossesText = document.getElementById("losses-text");
    var guessesText = document.getElementById("Guesses-text");
    var guessSoFarText = document.getElementById("Guess-so-far-text");
    var computerGuessText =document.getElementById("Computer-guess-text");
      
      // Randomly chooses a choice from the options array. This is the Computer's guess.
     
      if (computerGuess==null) {
          var randomindex = Math.floor(Math.random()*computerChoices.length);
        computerGuess = computerChoices [randomindex];
        computerGuessText.textContent= computerGuess ;
        

      }
      
      
      // Check if user guess is same as computer guess

      if (userGuess == computerGuess ) { 
          wins++;
         // Display the win count on screen  
         winsText.textContent="Wins :" + wins;

         //Reset to guess left to 0 because user has won this round.
         computerGuess = null;
         guess_left = 9;
         //Display the guess left on the screen
         guessesText.textContent ="Guesses Left:" + guess_left;
         // Clear the Guess so far because its new round
         guessSoFarText.textContent ="Your Guesses So Far:" ;
         //Clear the user guess
         userGuesses=[];
        }
        else {
            // Bad guess so update the remaining guess
            guess_left--;
            //Display the guess left on the screen
            guessesText.textContent ="Guesses Left :" + guess_left;
            userGuesses.push(userGuess);
            //Display all the guess
            guessSoFarText.textContent ="Your Guesses So Far :" + userGuesses;
            
            //If all guess are over then 
            //Record the loose count
            if (guess_left==0) {
                    losses++;
                    lossesText.textContent="losses :" + losses;
                    computerGuess = null;
                    //reset guess left for the new round
                    guess_left=9;
                    //display the guess left
                    guessesText.textContent="Guesses Left :" + guess_left;
                   
                   
                    //Empty user guesses
                    userGuesses=[];
                    //display the empty arry
                    guessSoFarText.textContent="Your Guesses So Far :";


            }
            
        }

      
     
        
    };
  