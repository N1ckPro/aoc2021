import { readFileSync } from "fs"
import { calculateFish } from "./Lanternfish"

const input = readFileSync("./Day6/Input.txt").toString().split("\r\n")

let fishes = input[0].split(',').map((data) => Number(data))

console.log("Part Two:", calculateFish(fishes, 256))