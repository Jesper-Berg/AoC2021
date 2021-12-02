const fs = require('fs');
const file = fs.readFileSync('./input.txt').toString().split("\n").map(str => str.split(' '));

function getSolutionPart1() {
    depth = 0;
    pos = 0;
    file.forEach(ins => {
        value = parseInt(ins[1]);
        switch(ins[0]) {
            case 'forward':
                pos += value;
                break;
            case 'down':
                depth += value;
                break;
            case 'up':
                depth -= value;
        }
    })
    return pos * depth;
}

function getSolutionPart2() {
    depth = 0;
    pos = 0;
    aim = 0;
    file.forEach(ins => {
        value = parseInt(ins[1]);
        switch(ins[0]) {
            case 'forward':
                pos += value;
                depth += value * aim;
                break;
            case 'down':
                aim += value;
                break;
            case 'up':
                aim -= value;
        }
    })
    return pos * depth;
}

const part = process.env.part || "part1";

if (part === "part1")
    console.log(getSolutionPart1());
else
    console.log(getSolutionPart2());