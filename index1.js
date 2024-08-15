const app = document.getElementById('app')

const randomNum = Math.trunc(Math.random()*100+1)
console.log(randomNum);

function guessNumber(randomNum){
    let guess = parseInt(window.prompt(`Please guess a number between 1-100`))

    let attempt = 1
    let returnMessage

    if (! isNaN(guess)){
        while (guess !== randomNum && attempt < 10){
            if (guess < randomNum){
                returnMessage = `Number is higher than your guess. Please try again you have ${10-attempt} tries remaining`
            }
            else{
                returnMessage = `Number is lower than your guess. Please try again you have ${10-attempt} tries remaining`
            }
            attempt++
            guess = parseInt(window.prompt(`${returnMessage}, please pick a new number`))
            console.log(returnMessage);
            console.log(attempt);
           
        }

    }
    else{
        returnMessage = 'Please enter a valid number, restart game'
    }
    if (guess === randomNum){
        returnMessage = `YOU WIN! The number was ${randomNum}. you guessed the number in ${attempt} attempts`
    }
    else if(attempt === 10){
        returnMessage = 'Game Over, you had more than 10 tries'
    }
    window.alert(returnMessage);
 
}

guessNumber(randomNum)