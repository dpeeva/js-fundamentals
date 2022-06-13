function solve(input) {
    const efficiency = Number(input[0]) + Number(input[1]) + Number(input[2])
    let students = Number(input[3])
    let time = Math.ceil(students / efficiency)
    time += (Math.ceil(time / 3) - 1)
    console.log(`Time needed: ${time}h.`)
}

solve(['5', '6', '4', '20']) // Time needed: 2h.
solve(['1', '2', '3', '45']) // Time needed: 10h.
solve(['3', '2', '5', '40']) // Time needed: 5h.

// Borderline cases
solve(['1', '1', '1', '9']) // Time needed: 3h.
solve(['1', '1', '1', '12']) // Time needed: 5h.
solve(['1', '1', '1', '15']) // Time needed: 6h.
solve(['1', '1', '1', '18']) // Time needed: 7h.
solve(['1', '1', '1', '21']) // Time needed: 9h.