function solve(input) {
    const length = Number(input[0])
    const pieces = input.slice(1, length + 1)
    let commands = input.slice(length + 1)

    const album = new Map()
    pieces.map(piece => {
        let data = piece.split("|")
        let name = data[0]

        album.set(name, {
            composer: data[1],
            key: data[2]
        })
    })
    let line = ""

    while (commands.length > 0) {
        line = commands.shift()
        if (line === "Stop") {
            break
        }
        let data = line.split("|")
        let command = data[0]
        let piece = data[1]

        if (command === "Add") {
            let composer = data[2]
            let key = data[3]
            if (album.has(piece)) {
                console.log(`${piece} is already in the collection!`)
            } else {
                album.set(piece, {
                    composer: composer,
                    key: key
                })
                console.log(`${piece} by ${composer} in ${key} added to the collection!`)
            }
        }
        if (command === "Remove") {
            if (album.has(piece)) {
                album.delete(piece)
                console.log(`Successfully removed ${piece}!`)
            } else {
                console.log(`Invalid operation! ${piece} does not exist in the collection.`)
            }
        }
        if (command === "ChangeKey") {
            let newKey = data[2]
            let pieceData = album.get(piece)
            if (album.has(piece)) {
                album.set(piece, {
                    composer: pieceData.composer,
                    key: newKey
                })
                console.log(`Changed the key of ${piece} to ${newKey}!`)
            } else {
                console.log(`Invalid operation! ${piece} does not exist in the collection.`)
            }
        }
    }

    for (const [piece, data] of album) {
        console.log(`${piece} -> Composer: ${data.composer}, Key: ${data.key}`)
    }
}

solve([
    '3',
    'Fur Elise|Beethoven|A Minor',
    'Moonlight Sonata|Beethoven|C# Minor',
    'Clair de Lune|Debussy|C# Minor',
    'Add|Sonata No.2|Chopin|B Minor',
    'Add|Hungarian Rhapsody No.2|Liszt|C# Minor',
    'Add|Fur Elise|Beethoven|C# Minor',
    'Remove|Clair de Lune',
    'ChangeKey|Moonlight Sonata|C# Major',
    'Stop'
])
// Sonata No.2 by Chopin in B Minor added to the collection!
// Hungarian Rhapsody No.2 by Liszt in C# Minor added to the collection!
// Fur Elise is already in the collection!
// Successfully removed Clair de Lune!
// Changed the key of Moonlight Sonata to C# Major!
// Fur Elise -> Composer: Beethoven, Key: A Minor
// Moonlight Sonata -> Composer: Beethoven, Key: C# Major
// Sonata No.2 -> Composer: Chopin, Key: B Minor
// Hungarian Rhapsody No.2 -> Composer: Liszt, Key: C# Minor

solve([
    '4',
    'Eine kleine Nachtmusik|Mozart|G Major',
    'La Campanella|Liszt|G# Minor',
    'The Marriage of Figaro|Mozart|G Major',
    'Hungarian Dance No.5|Brahms|G Minor',
    'Add|Spring|Vivaldi|E Major',
    'Remove|The Marriage of Figaro',
    'Remove|Turkish March',
    'ChangeKey|Spring|C Major',
    'Add|Nocturne|Chopin|C# Minor',
    'Stop'
])
// Spring by Vivaldi in E Major added to the collection!
// Successfully removed The Marriage of Figaro!
// Invalid operation! Turkish March does not exist in the collection.
// Changed the key of Spring to C Major!
// Nocturne by Chopin in C# Minor added to the collection!
// Eine kleine Nachtmusik -> Composer: Mozart, Key: G Major
// La Campanella -> Composer: Liszt, Key: G# Minor
// Hungarian Dance No.5 -> Composer: Brahms, Key: G Minor
// Spring -> Composer: Vivaldi, Key: C Major
// Nocturne -> Composer: Chopin, Key: C# Minor