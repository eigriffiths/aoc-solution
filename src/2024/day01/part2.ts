import { parseInputLines } from "../../../utils/fileReader.js";

export function solve(input: string): number {
    const lines = parseInputLines(input);

    const left = lines.map(item => Number(item.trim().split('   ')[0])).sort();
    const right = lines.map(item => Number(item.trim().split('   ')[1])).sort();

    return 1;
}