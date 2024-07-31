const process = require("node:process");

const userInput = process.argv[2].toUpperCase();

const handsOptions = [{value: "ROCK", counter: "PAPER"}, {value: "PAPER", counter: "SCISSORS"}, {value: "SCISSORS", counter: "ROCK"}];

if(!handsOptions.includes(userInput.value)){
    console.log("Input must be eaither ROCK, PAPER or SCISSORS!!!")
    return;
}

let userChoice = handsOptions.find((choice) => choice.value = userInput)
const machineChoice = handsOptions[Math.floor(Math.random() + 1)].value;

if(userInput === machineChoice.counter){
    console.log("Player wins");
}

if(machineChoice === userInput.cou)

