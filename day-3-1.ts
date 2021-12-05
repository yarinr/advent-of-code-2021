import { readFileSync } from "fs";
import path from "path";

const input = readFileSync(path.resolve("inputs", "3-1.txt")).toString();
const binaryNumbers: string[] = input.split("\n");
const bitsPerNumber = binaryNumbers[0].length;
let gammaRate = "";
let epsilonRate = "";

for (let i = 0; i < bitsPerNumber; i++) {
    const bitsCount = bitsCountAtPosition(binaryNumbers, i);
    let mostCommonBit: string;
    let leastCommonBit: string;

    if (bitsCount['0'] > bitsCount['1']) {
        mostCommonBit = '0';
        leastCommonBit = '1';
    } else {
        mostCommonBit = '1';
        leastCommonBit = '0';
    }
    gammaRate = gammaRate.concat(mostCommonBit);
    epsilonRate = epsilonRate.concat(leastCommonBit)
}

const gammaRateDecimal = parseInt(gammaRate, 2);
const epsilonRateDecimal = parseInt(epsilonRate, 2);
console.log({ gammaRate, epsilonRate, gammaRateDecimal, epsilonRateDecimal, solution: gammaRateDecimal * epsilonRateDecimal });

function bitsCountAtPosition(binaryNumbers: string[], position: number): {[ bit: string]: number } {
    return binaryNumbers.map(binaryNumber => binaryNumber[position]).reduce((bitCounter, currentBit) => ({...bitCounter, [currentBit]: (bitCounter[currentBit] ?? 0) + 1}), {} as { [bit: string]: number});
}
