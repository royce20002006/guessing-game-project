const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });



let secretNumber = 15;

let checkGuess = num => {
    if (num > secretNumber) {
        console.log('Too High.');
        return false;
    }
    if (num < secretNumber) {
        console.log('Too low.');
        return false;
    }
    if (num === secretNumber) {
        console.log('Correct!');
        return true;
    }
};

let askGuess = () => {
    rl.question('Enter a guess: ', (answer) => {
        if (checkGuess(Number(answer))){
            console.log('You win!');
            rl.close();
        } 
        else askGuess();
    })
        
    
}

askGuess();