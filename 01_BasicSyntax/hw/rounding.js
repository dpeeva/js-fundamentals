function solve(n, precision) {
    const rounding = precision > 15 ? 15 : precision
    console.log(parseFloat(n.toFixed(rounding)))
}

solve(3.1415926535897932384626433832795, 2) // 3.14
solve(10.5, 3) // 10.5