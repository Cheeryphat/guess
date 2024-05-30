//globalvariables
const guessInput = document.querySelector('#guess_input');
const submitGuess = document.querySelector('#submit_guess');
const message = document.querySelector('#message');
const chancesLeft =document.querySelector('#chances_Left');
const restartGame = document.querySelector('#restartGame');
// random number guessing 1-100
let randomNumber =Math.floor(Math.random()*100) + 1;
// No of Chances
let chances = 3;

//Interacting with the DOM
document.addEventListener('DOMContentLoaded',()=>{
       //CHANCES LEFT ALERT
    chancesLeft.textContent = `Chances left: ${chances}`;
    //GUESS SUBMISSION START
    submitGuess.addEventListener('click',() => {
       // converting guessInput string to integer
        const userGuess = parseInt(guessInput.value, 10);
        // IF  userGuess is not a number or low or high perform the below
        if (isNaN(userGuess) || userGuess < 1 || userGuess > 100 ){
            message.textContent ='Please enter a valid number between 1-100'
            return;

        }
        chances--;
        // Comparing userGuess and randomNumber
        if (userGuess === randomNumber){
            
            message.textContent ='Congratulation! you guessed the correct number!'
            endGame();
        }else if (chances === 0){
            
            message.textContent = `Sorry, you've run out of chances. The correct number was ${randomNumber}`
            endGame();
        }else{
            message.textContent =  userGuess < randomNumber ?'Too low':'Too high';
            chancesLeft.textContent =`Chances left:${chances}`;
            
        }

    });//GUESS SUBMISSION END
    // RESTARTING THE GAME
    restartGame.addEventListener('click',()=>{
         
        randomNumber =Math.floor( Math.random()*100) + 1;
        chances = 3;
        guessInput.value = '';
        message.textContent='';
        chancesLeft.textContent =`Chances left ${chances}`;
        submitGuess.style.display ='inline';
        guessInput.style.display ='inline';
        restartGame.style.display ='none';
    }); //RESTARTING THE GAME ENDS
    function endGame(){
        
        submitGuess.style.display = 'none';
        guessInput.style.display ='none';
        restartGame.style.display ='inline';
    }
})