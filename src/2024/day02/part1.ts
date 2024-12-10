import { parseInputLines } from "../../../utils/fileReader.js";

export function solve(input: string) : number{
    const lines : string[] = parseInputLines(input);
    let report : number = 0;

    lines.forEach(row => {
        const values = row.split(' ').map(Number);

        for(let i = 0; i < values.length - 1; i++) {
            const diff = Math.abs(values[i + 1] - values[i]);

            if (diff <= 3) {
                report++;
            }
        }
    })

    return report;
}