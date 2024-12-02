import fs from 'fs';
import path from 'path';

export function readInput(inputPath) {
  try {
    return fs.readFileSync(path.resolve(inputPath), 'utf8').trim();
  } catch (error) {
    console.error(`Error reading input file: ${error.message}`);
    return null;
  }
}

export function parseInputLines(input) {
  return input.split('\n');
}