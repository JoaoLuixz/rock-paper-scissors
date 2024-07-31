const process = require("node:process");
const handOptions = require("./resources");

const userInput = process.argv[2];

if (!userInput) {
  console.log("Input must be eaither ROCK, PAPER or SCISSORS!!!");
  return;
}

const userChoice = handOptions.find(
  (choice) => choice.value === userInput.toUpperCase()
);

if (!userChoice) {
  console.log("Input must be eaither ROCK, PAPER OR SCISSORS!!!");
  return;
}

const machineChoice =
  handOptions[Math.floor(Math.random() * handOptions.length)];

console.log(`\nUser: ${userChoice.value}\nMachine: ${machineChoice.value}\n`);

if (userChoice.value === machineChoice.counter) {
  console.log("Player wins\n");
  return;
}

if (machineChoice.value === userChoice.counter) {
  console.log("Machine wins\n");
  return;
}

if (userChoice.value === machineChoice.value) {
  console.log("TIE\n");
}
