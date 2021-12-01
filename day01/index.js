const fs = require('fs');
const file = fs.readFileSync('./input.txt').toString().split("\n").map(numStr => parseInt(numStr));

function getSolutionPart1() {
    sum = 0;
    for(i = 1; i < file.length; i++) {
        if(file[i] > file[i - 1]) sum++;
    }
    return sum;
}

function getSolutionPart2() {
    totalInc = 0;
    prevSum = file[0] + file[1] + file[2];
    for(i = 1; i < file.length; i++) {
        currSum = file[i] + file[i + 1] + file[i + 2];
        if(currSum > prevSum) totalInc++;
        prevSum = currSum;
    }
    return totalInc;
}

const part = process.env.part || "part1";

if (part === "part1")
    console.log(getSolutionPart1());
else
    console.log(getSolutionPart2());