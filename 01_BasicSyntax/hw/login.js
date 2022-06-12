function solve(input) {
    const username = input[0]
    const length = username.length
    let password = []

    for (let i = length - 1; i >= 0; i--) {
        password.push(username[i])
    }

    password = password.join("")

    let inputLength = input.length
    let currentIndex = 1

    while (inputLength) {
        if (input[currentIndex] !== password) {
            if (currentIndex === 4) {
                console.log(`User ${username} blocked!`)
                break
            }
            console.log(`Incorrect password. Try again.`)
        } else {
            console.log(`User ${username} logged in.`)
            break
        }
        inputLength--
        currentIndex++
    }
}

solve(['Acer', 'login', 'go', 'let me in', 'recA'])
// Incorrect password. Try again.
// Incorrect password. Try again.
// Incorrect password. Try again.
// User Acer logged in.

solve(['momo', 'omom'])
// User momo logged in.

solve(['sunny', 'rainy', 'cloudy', 'sunny', 'not sunny'])
// Incorrect password. Try again.
// Incorrect password. Try again.
// Incorrect password. Try again.
// User sunny blocked!