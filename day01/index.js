const fs = require('fs');
const file = fs.readFileSync('./input').toString().split("\n");

const isPrime = num => {
    for(let i = 2, s = Math.sqrt(num); i <= s; i++)
        if(num % i === 0) return false; 
    return num > 1;
}

function getSolutionPart1() {
    sum = 0;
    for(i = 0; i < file.length; i++) {
        x = parseInt(file[i]);
        if(isPrime(x)) sum += x * i;
    }
    return sum;
}

function getSolutionPart2() {
    sum = 0
    for(i = 0; i < file.length; i++) {
        x = parseInt(file[i]);
        if(!isPrime(x)) sum += x * ((i % 2) ? -1 : 1);
    }
    return sum;
}

const part = process.env.part || "part1";

if (part === "part1")
    console.log(getSolutionPart1());
else
    console.log(getSolutionPart2());