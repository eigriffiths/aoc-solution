import { parseInputLines } from "../../../utils/fileReader.js";

export function solve(input: string) : number{
    const lines : string[] = parseInputLines(input);
    let report = 0;
    lines.forEach(row => {
     const values = row.split(' ').map(Number);
     
     const increasing = values.every((val, index) => 
       index === 0 || val > values[index - 1]
     );
     
     const decreasing = values.every((val, index) => 
       index === 0 || val < values[index - 1]
     );
     
     // If not consistently increasing or decreasing, skip this row
     if (!increasing && !decreasing) return;
     
     // Check all differences
     const validDifferences = values.slice(1).every((val, idx) => {
       const diff = Math.abs(val - values[idx]);
       return diff >= 1 && diff <= 3;
     });
     
     if (validDifferences) {
       report++;
     }
    });

    return report;
}