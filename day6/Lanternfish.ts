export function calculateFish(input: number[], days: number): number {
    let fishes = {
        0: 0,
        1: 0,
        2: 0,
        3: 0,
        4: 0,
        5: 0,
        6: 0,
        7: 0,
        8: 0
    }

    input.forEach((data) => {
        fishes[data] ++
    })

    for (let i = 0; i < days; i++) {
        fishes = {
            0: fishes[1],
            1: fishes[2],
            2: fishes[3],
            3: fishes[4],
            4: fishes[5],
            5: fishes[6],
            6: fishes[0] + fishes[7],
            7: fishes[8],
            8: fishes[0]
        }
    }

    let totalFish = 0
    for (const fish in fishes) {
        totalFish += fishes[fish]
    }
    return totalFish
}