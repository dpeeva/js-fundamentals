// 90 of 100
function solve(input) {
    const lectures = Number(input[1])
    const additionalBonus = Number(input[2])
    const data = input.slice(3)

    const students = data.map((attendances, i) => {
        return {
            id: i,
            attendances: Number(attendances),
            total: Math.ceil((Number(attendances) / lectures) * (5 + additionalBonus))
        }
    })

    const studentsSortedByBonus = students.sort((a, b) => b.total - a.total).sort((a, b) => b.attendances - a.attendances)
    const maxBonus = studentsSortedByBonus[0].total
    const attendances = studentsSortedByBonus[0].attendances

    console.log(`Max Bonus: ${maxBonus}.`)
    console.log(`The student has attended ${attendances} lectures.`)
}

solve([
    '5', '25', '30',
    '12', '19', '24',
    '16', '20'
])
// Max Bonus: 34.
// The student has attended 24 lectures.

solve([
    '10', '30', '14', '8',
    '23', '27', '28', '15',
    '17', '25', '26', '5',
    '18'
])
// Max Bonus: 18.
// The student has attended 28 lectures.
