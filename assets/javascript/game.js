        //computer's choice for guess
        var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n",
            "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"
        ];

        // Creating variables to hold the number of wins, losses, # of guesses left, and an empty array for user guessed letters.
        var wins = 0;
        var losses = 0;
        var guessesLeft = 15;
        var letters = [];

        // This function is run whenever the user presses a key.
        document.onkeyup = function (event) {

            // records user input guess
            var userGuess = event.key;
            letters.push(userGuess);
            //choices a random array item for computer to use for game
            var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
            //allows user input of capital letters converted toLowerCase to ensure functionality of game with capital letters
            var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

            // logic for outcome of the game, displaying Alert message for win/loss
            if (userGuess === computerGuess) {
                wins++;
                alert("!!!YOU WIN!!!");
            } else {
                guessesLeft--;
            }
            // this code serves as rudamentary "reset" function for the game to continue playing w/out refresh
            if (guessesLeft === 0) {
                alert("GAME OVER Please Play Again");
                losses++;
                guessesLeft = 15;
            }

            // multi point HTML variable to display all game data to the page
            var html =
                "<h2>Are you Psychic?</h2>" +
                "<h4>Can you guess what letter I am thinking off. . . </h4>" +
                "<p>You chose: " + userGuess + "</p>" +
                "<p>The computer chose: " + computerGuess + "</p>" +
                "<p>Wins: " + wins + "</p>" +
                "<p>Losses: " + losses + "</p>" +
                "<p>Guesses Left: " + guessesLeft + "</p>" +
                "<p>Letters Guessed: " + letters + "</p>";


            // id tag of "game" used in HTML div to write game to document 
            document.querySelector("#game").innerHTML = html;
        };
