import { readInput, parseInputLines } from "../../../utils/fileReader.js"

export function solve(input: string): number{

  const lines = parseInputLines(input);

  const left = lines.map(item => Number(item.trim().split('   ')[0])).sort();
  const right = lines.map(item => Number(item.trim().split('   ')[1])).sort();
  let distance:number = 0; 

  const diff = left.map((leftItem, index) => 
    Math.abs(leftItem - right[index])
  )

  distance = diff.reduce((sum, diff) => sum + diff, 0);

  return distance;
}