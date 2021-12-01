import { readFileSync } from "fs"

const input = readFileSync("./Day1/input.txt").toString().split("\r\n")
let increments = 0
let previousNumber: number

input.forEach((data, i) => {
    const number = Number(data)
    if (previousNumber < number) increments++
    previousNumber = number
})
console.log("Part One:", increments)