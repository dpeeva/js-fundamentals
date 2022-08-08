// not submitted
function solve(input) {
    let password = input[0]
    let commands = input.slice(1)

    let line = commands.shift()
    let command = ""

    const isValidIndex = (index, arr) => index >= 0 && index < arr.length

    while (commands.length > 0) {
        if (line === "Complete") {
            break
        }
        data = line.split(" ")
        command = data[0]
        if (command === "Make") {
            let caseCommand = `to${data[1]}Case`
            let index = Number(data[2])
            let arr = password.split("")
            if (isValidIndex(index, arr)) {
                let char = arr[index]
                arr.splice(index, 1, char[caseCommand]())
                password = arr.join("")
                console.log(password)
            }
        }
        if (command === "Insert") {
            let index = Number(data[1])
            let char = data[2]
            let arr = password.split("")
            if (isValidIndex(index, arr)) {
                arr.splice(index, 0, char)
                password = arr.join("")
                console.log(password)
            }
        }
        if (command === "Replace") {
            let char = data[1]
            let value = Number(data[2])
            let ascii = char.charCodeAt(0)
            let newChar = String.fromCharCode(ascii + value)

            let index = password.indexOf(char)
            if (index !== -1) {
                let arr = password.split("")
                arr = arr.map(c => c === char ? newChar : c)
                password = arr.join("")
                console.log(password)
            }
        }
        if (command === "Validation") {
            if (password.length < 8) {
                console.log(`Password must be at least 8 characters long!`)
            }
            let pattern = /\W{1,}/g
            let result = pattern.exec(password)
            if (result) {
                console.log(`Password must consist only of letters, digits and _!`)
            }
            let arr = password.split("")
            let uppercase = 0
            let lowercase = 0
            let digits = 0
            arr.map(c => {
                if (c.charCodeAt(0) >= 65 && c.charCodeAt(0) <= 90) {
                    uppercase++
                }
                if (c.charCodeAt(0) >= 97 && c.charCodeAt(0) <= 122) {
                    lowercase++
                }
                if (c.charCodeAt(0) >= 48 && c.charCodeAt(0) <= 57) {
                    digits++
                }
            })
            if (uppercase === 0) {
                console.log(`Password must consist at least one uppercase letter!`)
            }
            if (lowercase === 0) {
                console.log(`Password must consist at least one lowercase letter!`)
            }
            if (digits === 0) {
                console.log(`Password must consist at least one digit!`)
            }
        }

        line = commands.shift()
    }
}

solve([
    'invalidpassword*',
    'Add 2 p',
    'Replace i -50',
    'Replace * 10',
    'Make Upper 2',
    'Validation',
    'Complete'
])
// 7nval7dpassword*
// 7nval7dpassword4
// 7nVal7dpassword4

solve([
    '123456789',
    'Insert 3 R',
    'Replace 5 15',
    'Validation',
    'Make Lower 3',
    'Complete'
])
// 123R456789
// 123R4D6789
// Password must consist at least one lowercase letter!
// 123r4D6789