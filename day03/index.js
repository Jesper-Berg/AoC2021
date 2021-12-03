const fs = require('fs');
const file = fs.readFileSync('./input.txt').toString().split("\n");

function getSolutionPart1() {
    sum = new Array(file[0].length).fill(0);
    file.forEach(binStr => binStr.split('').map((val, i) => sum[i] += parseInt(val)));
    gammaBin = sum.map(total => (total > file.length / 2) ? 1 : 0).join('');
    epsilonBin = gammaBin.split('').map(num => parseInt(num) ? 0 : 1).join('');
    return parseInt(gammaBin, 2) * parseInt(epsilonBin, 2);
}

const findRating = async (list, index, mostFrequent) => {
    if(list.length === 1) return list[0];
    sum = list.filter(val => parseInt(val[index])).length;
    desNum = !(sum >= list.length / 2 ? !mostFrequent : mostFrequent) ? 1 : 0; //NOT XOR
    return await findRating(list.filter(val => parseInt(val[index]) === desNum), index + 1, mostFrequent);
}

function getSolutionPart2 () {
    return Promise.all([findRating(file, 0, true), findRating(file, 0, false)])
                .then(values => values.map(val => parseInt(val, 2)).reduce((prev, curr) => prev * curr))
}

const part = process.env.part || "part1";

if (part === "part1")
    console.log(getSolutionPart1());
else
    getSolutionPart2().then(value => console.log(value));