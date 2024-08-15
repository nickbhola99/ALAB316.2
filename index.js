const app = document.getElementById('app')
//const gameBox = document.createElement('table')
const randomNum = Math.trunc(Math.random()*100+1)
console.log(randomNum);
let guess
let output = ''
setTimeout(() => {
    console.log(('Correct'));
    
}, 2000)
window.alert(`Pick Number from 1-100`)

// window.alert(
//     'Welcome! Please guaess a number between 1-100'
// )
do {
    guess = parseInt(window.prompt("Please pick a number between 1-100"))
    if(randomNum === guess){
        output = "Good job!"
    }
    else{
        output = "Please try again!"
    }
    window.alert(output)
} while (randomNum !== guess);
