function solve(input) {
    switch (input) {
        case 1:
            console.log("Monday")
            break
        case 2:
            console.log("Tuesday")
            break
        case 3:
            console.log("Wednesday")
            break
        case 4:
            console.log("Thursday")
            break
        case 5:
            console.log("Friday")
            break
        case 6:
            console.log("Saturday")
            break
        case 7:
            console.log("Sunday")
            break

        default:
            console.log("Invalid day!")
            break
    }
}

solve(3) // Wednesday
solve(6) // Saturday
solve(11) // Invalid day!