import chalk from "chalk";
import path from "path";
import fs from "fs"

async function runDay(year: string, day: string, part: string) {
  try {
    // Validate arguments
    if (!year || !day || !part) {
      console.log(chalk.red("Please provide year, day, and part"));
      process.exit(1);
    }
    
    const dayPath = path.resolve(
      process.cwd(), 
      `src/${year}/day${day.padStart(2, '0')}`
    );

    console.log(`Attempting to load: ${dayPath}/part${part}.ts`);

    // Use dynamic import with full path
    const module = await import(`${dayPath}/part${part}.ts`);

    const inputPath = path.join(dayPath, 'input.txt');
    const input = fs.readFileSync(inputPath, 'utf8').trim();

    console.log(chalk.blue(`🎄 Advent of Code 🎄`));
    console.log(chalk.red(`Year: ${year}`));
    console.log(chalk.green(`Day: ${day}`));
    console.log(chalk.yellow(`Part: ${part}`));
  } catch (error) {
    console.log(chalk.red(`Error - ${error}`));
  }
}

const [,, year, day, part] = process.argv;

runDay(year, day, part);