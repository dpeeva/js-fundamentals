function solve(a, b, c) {
    if (a > 0 && b > 0 && c > 0) {
        console.log("Positive")
    } else {
        if (a * b > 0 && c > 0) {
            console.log("Positive")
        } else if (a * b < 0 && c < 0) {
            console.log("Positive")
        } else {
            console.log("Negative")
        }
    }
}

solve(5, 12, -15) // Negative

solve(-6, -12, 14) // Positive

// Borderline cases
solve(-1, -1, -1) // Negative
solve(1, 1, 1) // Positive