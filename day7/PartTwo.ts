import { readFileSync } from "fs"

const input = readFileSync("./Day7/Input.txt").toString().split("\r\n")

const positions = input[0].split(',').map((position) => Number(position))

const mean = Math.round(positions.reduce((sum, current) => sum += current) / positions.length)

let totalFuel = 0
positions.forEach((position) => {
    for (let i = 0; i <= Math.abs(position - mean + 1); i++) {
        totalFuel += i
    }
})

console.log("Part Two:", totalFuel)