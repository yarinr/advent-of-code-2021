import { readFileSync } from "fs";
import path from "path";

const input = readFileSync(path.resolve("inputs", "1-1.txt")).toString();
const depths = input.split("\n").map((depth) => parseInt(depth, 10));

const increasingDepthsCount = depths.filter(
  (depth, index, depths) => depth > (depths[index - 1] ?? Infinity)
).length;
console.log({ increasingDepthsCount });

const windowSize = 3;
let increasingWindowsCount = 0;
for (let i = windowSize; i < depths.length; i++) {
  if (depths[i - windowSize] < depths[i]) {
    increasingWindowsCount++;
  }
}
console.log({ increasingWindowsCount });
