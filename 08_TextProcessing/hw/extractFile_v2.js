function solve(input) {
    const parts = input.split("\\")
    const file = parts[parts.length - 1]

    const splitted = file.split(".")
    const ext = splitted.pop()
    const name = splitted.join(".")


    console.log(`File name: ${name}`)
    console.log(`File extension: ${ext}`)
}

solve('C:\\Internal\\training-internal\\Template.pptx')
// File name: Template
// File extension: pptx

solve('C:\\Projects\\Data-Structures\\LinkedList.cs')
// File name: LinkedList
// File extension: cs

// Borderline cases
solve('C:\\Projects\\Data-Structures\\LinkedTemplate.bak.pptx')
// File name: LinkedTemplate.bak
// File extension: pptx