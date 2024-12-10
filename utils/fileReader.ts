import fs from 'fs';
import path from 'path';

export function readInput(inputPath) : string | null {
  try {
    return fs.readFileSync(path.resolve(inputPath), 'utf8').trim();
  } catch (error) {
    console.error(`Error reading input file: ${error.message}`);
    return null;
  }
}

export function parseInputLines(input) : string[] {
  return input.split('\n');
}