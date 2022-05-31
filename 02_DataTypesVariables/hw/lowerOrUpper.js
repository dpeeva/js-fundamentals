function solve(char) {
    const code = char.charCodeAt(0)
    if (code >= 65 && code <= 90) {
        console.log("upper-case")
    }
    if (code >= 97 && code <= 122) {
        console.log("lower-case")
    }
}

solve('L') // upper-case
solve('f') // lower-case