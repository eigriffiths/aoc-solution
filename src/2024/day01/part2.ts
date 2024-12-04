import { parseInputLines } from "../../../utils/fileReader.js";

export function solve(input: string): number {
    const lines = parseInputLines(input);

    const left: number[] = lines.map(item => Number(item.trim().split('   ')[0])).sort();
    const right: number[] = lines.map(item => Number(item.trim().split('   ')[1])).sort();

    let similarity: number = 0; 
    
    left.map(item => {
        const count: number = right.filter(rightItem => rightItem === item).length;

        similarity += item * count;
    })
    return similarity;
}