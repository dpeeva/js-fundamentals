function solve(input) {
    const employees = input.map(a => ({
        name: a,
        num: a.length
    }))
    employees.map(e => console.log(`Name: ${e.name} -- Personal Number: ${e.num}`))
}

solve([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
])