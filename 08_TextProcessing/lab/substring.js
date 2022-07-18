function solve(input, startIndex, count) {
    // Version 1
    // console.log(input.slice(startIndex, startIndex + count))

    // Version 2
    console.log(input.substring(startIndex, startIndex + count))

    // Version 3 - deprecated
    // console.log(input.substr(startIndex, count))
}

solve('ASentence', 1, 8)
solve('SkipWord', 4, 7)