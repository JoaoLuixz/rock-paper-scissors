const process = require("node:process");

const input = process.argv[2].toUpperCase();

const handsOptions = ["ROCK", "PAPER", "SCISSORS"];

if(!handsOptions.find(input)){
    console.log("Input must be eaither ROCK, PAPER or SCISSORS!!!")
}
