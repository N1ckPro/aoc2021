import { readFileSync } from "fs"

const input = readFileSync("./Day4/Input.txt").toString().split("\r\n")

const numbers = input[0].split(",")
let completeBoards: string[][][] = []
let boardCount = 0
for (let i = 2; i < input.length; i += 6) {
    completeBoards.push([])
    for (let j = 0; j <= 4; j++) {
        completeBoards[boardCount].push(input[i + j].split(' ').filter((data) => data != ''))
    }
    boardCount ++
}

let boards: string[][][] = []
let columns: number[][] = []
let rows: number[][] = []

for (let i = 0; i < completeBoards.length; i++) {
    columns.push([])
    rows.push([])
    for (let j = 0; j <= 4; j++) {
        columns[i][j] = 0
        rows[i][j] = 0
    }
}

let completedBoards = 0
let completedBoardIds: boolean[] = []
loop: for (const number of numbers) {
    boardLoop: for (let i = 0; i < completeBoards.length; i++) {
        if (completedBoardIds[i]) continue boardLoop
        if (number == numbers[0]) boards.push([])
        for (let j = 0; j <= 4; j++) {
            if (number == numbers[0]) boards[i].push([])
            for (let k = 0; k <= 4; k++) {
                if (number == completeBoards[i][j][k]) {
                    boards[i][j][k] = number
                    rows[i][j] ++
                    columns[i][k] ++

                    if (rows[i][j] == 5 || columns[i][k] == 5) {
                        completedBoards ++
                        completedBoardIds[i] = true
                        if (completedBoards == 100) {
                            boardFound(Number(number), i)
                            break loop
                        }
                        else continue boardLoop
                    }
                }
            }
        }
    }
}

function boardFound(number: number, i: number) {
    const winningBoardFull = completeBoards[i]
    const winningBoard = boards[i]

    let totalNotFound = 0
    for (let i = 0; i <= 4; i++) {
        for (let j = 0; j <= 4; j++) {
            if (winningBoard[i][j] == undefined) totalNotFound += Number(winningBoardFull[i][j])
        }
    }
    console.log('Part Two:', totalNotFound * number)
}