function solve(input) {
    let command = input.shift()
    let clean = 0

    while (command && input.length >= 0) {
        switch (command) {
            case "soap":
                clean += 10
                break
            case "water":
                clean += clean * .2
                break
            case "vacuum cleaner":
                clean += clean * .25
                break
            case "mud":
                clean -= clean * .1
                break
        }
        command = input.shift()
    }
    console.log(`The car is ${clean.toFixed(2)}% clean.`)
}

solve(['soap', 'soap', 'vacuum cleaner', 'mud', 'soap', 'water'])
// The car is 39.00% clean.

solve(["soap", "water", "mud", "mud", "water", "mud", "vacuum cleaner"])
// The car is 13.12% clean.