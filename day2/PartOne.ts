import { readFileSync } from "fs"

const input = readFileSync("./Day2/input.txt").toString().split("\r\n")
let horizontal = 0
let depth = 0

input.forEach((data) => {
    const dataArray = data.split(' ')
    const instruction = dataArray[0]
    const number = Number(dataArray[1])

    switch (instruction) {
        case 'forward':
            return horizontal += number
        case 'up':
            return depth -= number
        case 'down':
            return depth += number
    }
})

console.log("Part One:", horizontal * depth)