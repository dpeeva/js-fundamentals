function solve(x1, y1, x2, y2) {
    // Calculate a and b sides of triangle
    let a = 0
    let b = 0

    // Distance x
    if ((x1 > 0 && x2 < 0) || (x1 > 0 && x2 < 0)) {
        a = Math.abs(x1) + Math.abs(x2)
    } else {
        a = Math.abs(Math.abs(x1) - Math.abs(x2))
    }

    // Distance y
    if ((y1 > 0 && y2 < 0) || (y1 > 0 && y2 < 0)) {
        b = Math.abs(y1) + Math.abs(y2)
    } else {
        b = Math.abs(Math.abs(y1) - Math.abs(y2))
    }

    // Calculate c (distance), using Pythagorean theorem: c*c = a*a + b*b
    console.log(Math.sqrt(a * a + b * b))
}

solve(2, 4, 5, 0) // 5
solve(2.34, 15.66, -13.55, -2.9985) // 24.50778901186315