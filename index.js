#! /usr/bin/env node
import inquirer from "inquirer";
const randomNumber = Math.floor(Math.random() * 6 + 1);
const answer = await inquirer.prompt([
    {
        name: "userGuessednumber",
        type: "number",
        message: "Please guess a number between 1-6: ",
    }
]);
if (answer.userGuessednumber === randomNumber) {
    console.log("Congratulations! You have guessed a right number.");
}
else {
    console.log("No! You have guessed a wrong number.");
}
