import { readFileSync } from "fs"

const input = readFileSync("./Day1/input.txt").toString().split("\r\n")
let increments = 0
let previousNumber: number

input.forEach((data, i) => {
    const number = Number(data) + Number(input[i + 1]) + Number(input[i + 2])
    if (previousNumber < number) increments++
    previousNumber = number
})
console.log("Part Two:", increments)