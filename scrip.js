const process = require("node:process");

const userInput = process.argv[2].toUpperCase();

const handsOptions = [
    {value: "ROCK", counter: "PAPER"},
    {value: "PAPER", counter: "SCISSORS"},
    {value: "SCISSORS", counter: "ROCK"}
];

const userChoice = handsOptions.find((choice) => choice.value = userInput)

if(userChoice === undefined){
    console.log("Input must be eaither ROCK, PAPER or SCISSORS!!!")
    return;
}

const machineChoice = handsOptions[Math.floor(Math.random() * handsOptions.length)];

console.log(`\nUser: ${userChoice.value}\nMachine: ${machineChoice.value}\n`);

if(userChoice.value === machineChoice.counter){
    console.log("Player wins");
    return;
}

if(machineChoice.value === userChoice.counter){
    console.log("Machine wins")
    return;
}
