import { readFileSync } from "fs";
import path from "path";

const input = readFileSync(path.resolve("inputs", "2-1.txt")).toString();

type Command = 'forward' | 'up' | 'down';
type Instruction = { command: Command, units: number };
type Position = { horizontal: number, depth: number, aim: number}

const instructions: Instruction[] = input.split("\n").map((instructionLine) => instructionLine.split(' ')).map(splitInstruction => ({ command: splitInstruction[0] as Command, units: parseInt(splitInstruction[1], 10)}));

const startingPosition: Position = { horizontal: 0, depth: 0, aim: 0};

const finalPosition = instructions.reduce((position, instruction) => applyInstruction(position, instruction), startingPosition);

console.log(finalPosition);
console.log('Solution:', finalPosition.depth * finalPosition.horizontal);

function applyInstruction(position: Position, instruction: Instruction): Position {
    switch (instruction.command) {
        case 'up': {
            return { ...position, aim: position.aim - instruction.units };
        }
        case 'down': {
            return { ...position, aim: position.aim + instruction.units };
        }
        case 'forward': {
            return { ...position, horizontal: position.horizontal + instruction.units, depth: position.depth + position.aim * instruction.units };
        }
    }
}


