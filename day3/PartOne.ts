import { readFileSync } from "fs"

const input = readFileSync("./Day3/Input.txt").toString().split("\r\n")

let frequency: number[][] = []
for (let i = 0; i <= 11; i++) {
    frequency.push([0, 0])
}

for (let i = 0; i < input.length; i++) {
    for (let j = 0; j < input[i].length; j++) {
        if (input[i][j] == '0') frequency[j][0] ++
        else frequency[j][1] ++
    }
}

let gamma = '', epsilon = ''
frequency.forEach((data) => {
    if (data[0] > data[1]) {
        gamma += '0'
        epsilon += '1'
    } 
    else {
        gamma += '1'
        epsilon += '0'
    }
})

console.log('Part One:', parseInt(gamma, 2) * parseInt(epsilon, 2))