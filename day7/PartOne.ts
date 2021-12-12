import { readFileSync } from "fs"

const input = readFileSync("./Day7/Input.txt").toString().split("\r\n")

const positions = input[0].split(',').map((position) => Number(position)).sort((a, b) => a - b)
const median = positions[positions.length / 2]

let totalFuel = 0
positions.forEach((position) => {
    totalFuel += Math.abs(position - median)
})
console.log("Part One:", totalFuel)