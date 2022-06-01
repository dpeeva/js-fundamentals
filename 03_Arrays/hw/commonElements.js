function solve(a, b) {
    const common = []
    a.map(e => {
        if (b.indexOf(e) !== -1) {
            common.push(e)
        }
    })
    common.map(e => {
        console.log(e)
    })
}

solve(
    ['Hey', 'hello', 2, 4, 'Peter', 'e'],
    ['Petar', 10, 'hey', 4, 'hello', '2']
)
// hello
// 4

solve(
    ['S', 'o', 'f', 't', 'U', 'n', 'i', ' '],
    ['s', 'o', 'c', 'i', 'a', 'l']
)
// o
// i