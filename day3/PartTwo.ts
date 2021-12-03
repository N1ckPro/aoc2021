import { readFileSync } from "fs"

const input = readFileSync("./Day3/Input.txt").toString().split("\r\n")

let oxygenData = input
for (let i = 0; i <= 11; i++) {
    oxygenData = filterInput(oxygenData, "OXYGEN", i)
    if (oxygenData.length == 1) break
}

let co2Data = input
for (let i = 0; i <= 11; i++) {
    co2Data = filterInput(co2Data, "CO2", i)
    if (co2Data.length == 1) break
}

console.log('Part Two:', parseInt(oxygenData[0], 2) * parseInt(co2Data[0], 2))

function filterInput(input: string[], type: "OXYGEN" | "CO2", length: number): string[] {
    let frequency = [0, 0]

    for (let i = 0; i < input.length; i++) {
        if (input[i][length] == '0') frequency[0] ++
        else frequency[1] ++
    }
    let newArray = []
    let symbol = ((frequency[0] <= frequency[1] && type == 'OXYGEN') || (frequency[0] > frequency[1] && type == 'CO2')) ? '1' : '0'
    for (let i = 0; i < input.length; i++) {
        if (input[i][length] == symbol) newArray.push(input[i])
    }
    return newArray
}