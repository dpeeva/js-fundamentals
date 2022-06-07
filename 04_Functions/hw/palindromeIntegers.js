function solve(numbers) {
    const isPalindrome = n => {
        const nString = n + ""
        const length = parseInt(nString.length / 2)
        let isPalindrome = true
        for (let i = 0; i < length; i++) {
            if (nString[i] !== nString[nString.length - 1 - i]) {
                isPalindrome = false
                break
            }
        }
        return isPalindrome
    }

    const results = []
    numbers.map(n => {
        results.push(isPalindrome(n))
    })

    results.map(r => console.log(r))
}

solve([123, 323, 421, 121])
// false
// true
// false
// true

solve([32, 2, 232, 1010])
// false
// true
// true
// false