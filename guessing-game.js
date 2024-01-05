const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
let secretNumber;
let numAttempts;
let randomInRange = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return secretNumber =  Math.floor(Math.random() * (max - min + 1) + min);
}




let checkGuess = num => {
   
    
    if (num > secretNumber) {
        console.log('Too High.');
        numAttempts--;
        return false;
    }
    if (num < secretNumber) {
        console.log('Too low.');
        numAttempts--
        return false;
    }
    if (num === secretNumber) {-79
        console.log('Correct!');
        return true;
    }
};

let askLimit = () => {
    rl.question('What is your limit ', (limit) => {
        console.log(`You have ${limit} geusses.`)
        numAttempts = limit;
        askRange();
    })
}
let askRange = () => {
    
    rl.question('Enter a minimum number ', (numMin) => {
        rl.question('Enter a maximum number ', (numMax) => {
            console.log(`I'm thinking of a number between ${numMin} and ${numMax}...`);
            numMin = Number(numMin);
            numMax = Number(numMax);
            randomInRange(numMin, numMax)
            askGuess();
        })
    })
}
let win = 1;
let askGuess = () => {
    if (numAttempts === 0) {
        if (win >= 1) {
            console.log(`you lost after ${win - 1} games. Better luck next time.`)
            win = 1;
        }
        
        return rl.close();
    }
    rl.question('Enter a guess: ', (answer) => {
        if (checkGuess(Number(answer))){
            if (win > 0) console.log(`You win round ${win}!`)
            else console.log('You win!');
            win++;
            rl.question(`best of ${win}? (y or n)`, (answer2) => {
                if (answer2.toLowerCase() === 'y') {
                    askLimit();
                }
                if (answer2.toLowerCase() === 'n') 
                {
                    return rl.close();
                }
            })
             
        } 
        else askGuess();
    })
    
    
}
askLimit();

