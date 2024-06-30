#! /usr/bin/env node
import inquirer from 'inquirer';
const currency = {
    USD: 1,
    EUR: 0.91,
    GBP: 0.76,
    IND: 74.57,
    PKR: 280
};
let user_Answer = await inquirer.prompt([
    {
        name: 'from',
        message: "enter from currency",
        type: "list",
        choices: ["USD", "EUR", "GBP", "IND", "PKR"]
    },
    {
        name: 'to',
        message: "enter to currency",
        type: "list",
        choices: ["USD", "EUR", "GBP", "IND", "PKR"]
    },
    {
        name: 'amount',
        message: "enter your amount",
        type: "number",
    }
]);
let fromAmount = currency[user_Answer.from];
let toAmount = currency[user_Answer.to];
let amount = user_Answer.amount;
let baseAmount = amount / fromAmount;
let convertedAmount = baseAmount * toAmount;
console.log(convertedAmount);
