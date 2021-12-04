const fs = require('fs');
const file = fs.readFileSync('./input.txt').toString().split("\n\n");
const callOuts = file[0].split(',');
const boards = [];
for(i = 1; i < file.length; i++) {
    boards.push(file[i].split('\n').map(r => r.replace(/^ / , '').replace(/  /g, ' ').split(' ')));
}

const checkBoard = board => {
    // Check rows
    for(i = 0; i < board.length; i++) {
        for(j = 0; j < board[i].length; j++) {
            if(board[i][j]) break;
            if(j === board[i].length - 1) return true;
        }
    }
    // Check cols
    for(i = 0; i < board[0].length; i++) {
        for(j = 0; j < board.length; j++) {
            if(board[j][i]) break;
            if(j === board.length - 1) return true;
        }
    }
    return false;
}

const applyCallout = (board, num) => {
    for(i = 0; i < board.length; i++) {
        for(j = 0; j < board[i].length; j++) {
            if(board[i][j] === num) board[i][j] = undefined;
        }
    }
}

const sumBoard = board => {
    sum = 0;
    for(i = 0; i < board.length; i++) {
        for(j = 0; j < board[i].length; j++) {
            if(board[i][j]) sum += parseInt(board[i][j]);
        }
    }
    return sum;
}

function getSolutionPart1() {
    for(const num of callOuts) {
        for(const board of boards) {
            applyCallout(board, num);
            if(checkBoard(board)) return sumBoard(board) * num;
        }
    }
    return "Something went wrong";
}

const boardCount = () => {
    sum = 0;
    boards.forEach(board => {
        if(board) sum++;
    });
    return sum;
}

function getSolutionPart2() {
    for(const num of callOuts) {
        for(let i = 0; i < boards.length; i++) {
            if(boards[i]) {
                applyCallout(boards[i], num);
                if(checkBoard(boards[i]) && boardCount() !== 1) boards[i] = undefined;
                else if(checkBoard(boards[i]) && boardCount() === 1) return sumBoard(boards[i]) * num;
            }
        }
    }
    return "Something went wrong";
}

const part = process.env.part || "part1";

if (part === "part1")
    console.log(getSolutionPart1());
else
    console.log(getSolutionPart2());