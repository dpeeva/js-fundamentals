// 80 of 100
function solve(input) {
    const pattern = /(?<filename>\w{1,}(\.[a-z]+){0,})\.(?<ext>[a-z]+)/g
    let result = pattern.exec(input)

    let name = ""
    let ext = ""

    if (result !== null) {
        name = result.groups.filename
        ext = result.groups.ext
    }
    console.log(`File name: ${name}`)
    console.log(`File extension: ${ext}`)
}

solve('C:\\Internal\\training-internal\\Template.pptx')
// File name: Template
// File extension: pptx

solve('C:\\Projects\\Data-Structures\\LinkedList.cs')
// File name: LinkedList
// File extension: cs