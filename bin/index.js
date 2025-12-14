#!/usr/bin/env node

import { select } from "@inquirer/prompts";
import chalk from "chalk";
import { startGame } from "../src/game.js";

async function mainMenu() {
  const choice = await select({
    message: "Trivia Game",
    choices: [
      { name: "Start Quiz", value: "start" },
      { name: "Quit", value: "quit" }
    ]
  });

  if (choice === "start") {
    await startGame();
    mainMenu();
  } else {
    console.log(chalk.blue("Goodbye!"));
    process.exit(0);
  }
}

mainMenu();
