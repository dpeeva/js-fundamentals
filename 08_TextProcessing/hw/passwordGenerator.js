function solve(input) {
    let phrase = (input[0] + input[1]).split("")
    const chars = input[2].split("")
    const vowels = {
        a: 1,
        o: 1,
        e: 1,
        i: 1,
        u: 1
    }
    let index = 0
    phrase.map((char, i) => {
        if (vowels[char]) {
            phrase = [phrase.slice(0, i).join(""), chars[index].toUpperCase(), phrase.slice(i + 1).join("")].join("").split("")
            index++
            if (index > chars.length - 1) {
                index = 0
            }
            // console.log(phrase.join(""))
        }
    })
    const final = phrase.map((_, i) => phrase[phrase.length - i - 1])
    console.log(`Your generated password is ${final.join("")}`)
}

solve([
    'ilovepizza',
    'ihatevegetables',
    'orange'
])
// Your generated password is sElbGtNgAvRtOhEGzzNpAvRlO

solve([
    'easymoneyeazylife',
    'atleasttencharacters',
    'absolute'
])
// Your generated password is srTtcUrLhcnOttsSBltAEfTlyzULyOnSmysBA

solve([
    'areyousureaboutthisone',
    'notquitebutitrustyou',
    'disturbed'
])
// Your generated password is SIytsDrtDtEbBtRUqtTnSnIsDhttDEbBRrUsTSyIrD
