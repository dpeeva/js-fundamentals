function solve(password) {
    let errors = 0
    if (password.length < 6 || password.length > 10) {
        errors++
        console.log(`Password must be between 6 and 10 characters`)
    }

    const letters = password.split("")
    const digits = []
    letters.map(letter => {
        if (!isNaN(parseInt(letter))) {
            digits.push(letter)
        }
    })

    const forbiddenChars = []
    letters.map(letter => {
        if (!letter.match(/[a-z]/i) && !letter.match(/[0-9]/i)) {
            forbiddenChars.push(letter)
        }
    })

    if (forbiddenChars.length !== 0) {
        errors++
        console.log(`Password must consist only of letters and digits`)
    }

    if (digits.length < 2) {
        errors++
        console.log(`Password must have at least 2 digits`)
    }

    if (errors === 0) {
        console.log(`Password is valid`)
    }
}

solve('logIn')
// Password must be between 6 and 10 characters
// Password must have at least 2 digits

solve('MyPass123')
// Password is valid

solve('Pa$s$s')
// Password must consist only of letters and digits
// Password must have at least 2 digits