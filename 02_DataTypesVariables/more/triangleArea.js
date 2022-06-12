function solve(a, b, c) {
    const semiPerimeter = (a + b + c) / 2
    const area = Math.sqrt(
        (semiPerimeter * semiPerimeter - semiPerimeter * a) * (semiPerimeter - b) * (semiPerimeter - c)
    )
    console.log(area)
}

solve(
    2,
    3.5,
    4
) // 3. 4994419197923547

solve(
    3,
    5.5,
    4
) // 5.854685623498498