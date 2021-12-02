import { readFileSync } from "fs"

const input = readFileSync("./Day2/input.txt").toString().split("\r\n")
let horizontal = 0
let depth = 0
let aim = 0

input.forEach((data) => {
    const dataArray = data.split(' ')
    const instruction = dataArray[0]
    const number = Number(dataArray[1])

    switch (instruction) {
        case 'forward':
            horizontal += number
            return depth += aim * number
        case 'up':
            return aim -= number
        case 'down':
            return aim += number
    }
})

console.log("Part Two:", horizontal * depth)