function solve(input) {
    const towns = input.map(item => {
        let data = item.split(" | ")
        return {
            name: data[0],
            latitude: Number(data[1]).toFixed(2),
            longitude: Number(data[2]).toFixed(2)
        }
    })
    towns.map(town => console.log(
        `{ town: '${town.name}', latitude: '${town.latitude}', longitude: '${town.longitude}' }`
    ))
}

solve([
    'Sofia | 42.696552 | 23.32601',
    'Beijing | 39.913818 | 116.363625'
])
// { town: 'Sofia', latitude: '42.70', longitude: '23.33' }
// { town: 'Beijing', latitude: '39.91', longitude: '116.36' }

solve([
    'Plovdiv | 136.45 | 812.575'
])
// { town: 'Plovdiv', latitude: '136.45', longitude: '812.58' }