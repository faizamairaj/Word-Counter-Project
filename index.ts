#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

async function counter () {
    const answers = await inquirer.prompt ([                    
        {
            name: "sentence",
            type: "input",
            message: chalk.bold.italic.magenta("Enter Your Sentence to Count The Word :")
        }
    ]);
    if (answers.sentence.length === 0) {
      console.log (chalk.bold.italic.yellow("Make a Sentence."));
    }
    let Word = answers.sentence.trim().split(" ");
    console.log(Word);
    console.log(chalk.bold.italic.red(`Your Sentence Word Count Is : ${Word.length}`));
}
await counter();
(async function() {
    while (true) {
         const input = await inquirer.prompt([
            {
                type: "list",
                name: "question",
                message:("Do You Want to Continue or Exit ?"),
                choices:['Continue','Exit']
            }
         ]);
         if (input.question === "Exit") {
           console.log(chalk.bold.italic.green("Thanks For Using This App 'GOOD BYE!' "));
           break;
         } else {
            await counter ();
         }
    }
}) ();
