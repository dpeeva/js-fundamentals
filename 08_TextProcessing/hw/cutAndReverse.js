function solve(input) {
    const first = input.slice(0, input.length / 2)
    const firstReversed = first.split("").map((_, i) => first[first.length - i - 1]).join("")
    console.log(firstReversed)

    const second = input.slice(input.length / 2)
    const secondReversed = second.split("").map((_, i) => second[second.length - i - 1]).join("")
    console.log(secondReversed)
}

solve('tluciffiDsIsihTgnizamAoSsIsihT')
// ThisIsDifficult
// ThisIsSoAmazing

solve('sihToDtnaCuoYteBIboJsihTtAdooGoSmI')
// IBetYouCantDoThis
// ImSoGoodAtThisJob