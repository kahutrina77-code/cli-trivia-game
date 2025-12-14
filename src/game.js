import { select } from "@inquirer/prompts";
import chalk from "chalk";
import { questions } from "./questions.js";
import { score, resetScore } from "./score.js";
import { startTimer } from "./timer.js";

export async function startGame() {
  resetScore();
  let timeUp = false;

  const timer = startTimer(30000, () => {
    timeUp = true;
    console.log(chalk.red("\nTime is up!"));
  });

  for (const q of questions) {
    if (timeUp) break;

    const answer = await select({
      message: q.question,
      choices: q.options.map(opt => ({ name: opt, value: opt }))
    });

    if (answer === q.answer) {
      score.correct++;
      console.log(chalk.green("Correct!"));
    } else {
      score.wrong++;
      console.log(chalk.red("Incorrect."));
    }
  }

  clearTimeout(timer);
  console.log(chalk.blue(`\nFinal Score: ${score.correct} correct, ${score.wrong} wrong`));
}
