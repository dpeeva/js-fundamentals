function solve(input) {
    const companies = new Map()
    input.map(entry => {
        let data = entry.split(" -> ")
        let name = data[0]
        let employee = data[1]

        if (companies.has(name)) {
            let employees = new Set([...companies.get(name), employee])
            companies.set(name, employees)
        } else {
            let employees = new Set([employee])
            companies.set(name, employees)
        }
    })

    const keys = [...companies.keys()].sort((a, b) => a.localeCompare(b))

    for (const key of keys) {
        console.log(key)
        const employeesSet = companies.get(key)
        for (const employee of employeesSet) {
            console.log(`-- ${employee}`)
        }
    }
}

solve([
    'SoftUni -> AA12345',
    'SoftUni -> BB12345',
    'Microsoft -> CC12345',
    'HP -> BB12345'
])
// HP
// -- BB12345
// Microsoft
// -- CC12345
// SoftUni
// -- AA12345
// -- BB12345

solve([
    'SoftUni -> AA12345',
    'SoftUni -> CC12344',
    'Lenovo -> XX23456',
    'SoftUni -> AA12345',
    'Movement -> DD11111'
])
// Lenovo
// -- XX23456
// Movement
// -- DD11111
// SoftUni
// -- AA12345
// -- CC12344