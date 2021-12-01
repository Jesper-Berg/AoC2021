const fs = require('fs');
const file = fs.readFileSync('./input.txt').toString().split("\n").map(numStr => parseInt(numStr));

function getSolutionPart1() {
    return file.filter((num, i) => num > file[i - 1]).length
}

const sumWindow = i => file[i] + file[i + 1] + file[i + 2];

function getSolutionPart2() {
    return file.filter((num, i) => sumWindow(i) > sumWindow(i - 1)).length
}

const part = process.env.part || "part1";

if (part === "part1")
    console.log(getSolutionPart1());
else
    console.log(getSolutionPart2());