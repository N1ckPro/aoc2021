import { readFileSync } from "fs"

const input = readFileSync("./Day5/Input.txt").toString().split("\r\n")

let instructions = input.map((instruction) => {
    return instruction.split('->')
})

let diagram: number[][] = []
instructions.forEach((instruction) => {
    const beginningString = instruction[0].split(',')
    const endString = instruction[1].split(',')

    const x1 = Number(beginningString[0])
    const y1 = Number(beginningString[1])
    const x2 = Number(endString[0])
    const y2 = Number(endString[1])

    if (x1 != x2 && y1 != y2) return

    const sigX = Math.sign(x2 - x1)
    const sigY = Math.sign(y2 - y1)
    for (let i = 0; i <= Math.abs(x2 - x1) || i <= Math.abs(y2 - y1); i++) {
        if (!diagram[x1 + i * sigX]) diagram[x1 + i * sigX] = []
        if (!diagram[x1 + i * sigX][y1 + i * sigY]) diagram[x1 + i * sigX][y1 + i * sigY] = 0
        diagram[x1 + i * sigX][y1 + i * sigY] ++
    }
})

let counter = 0
diagram.forEach((line) => {
    line.forEach((pos) => {
        if (pos >= 2) counter++
    })
})
console.log("Part One:", counter)