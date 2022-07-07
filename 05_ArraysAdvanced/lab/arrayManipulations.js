function solve(input) {
    let arr = input[0].split(" ").map(Number)
    let commands = input.slice(1)
    let line = []
    let command = ""
    let n = 0
    let index = -1

    const add = (arr, n) => {
        arr.splice(arr.length, 0, n)
        return arr
    }
    const remove = (arr, n) => {
        return arr.filter(item => item !== n)
    }
    const removeAt = (arr, index) => {
        arr.splice(index, 1)
        return arr
    }
    const insert = (arr, index, n) => {
        arr.splice(index, 0, n)
        return arr
    }

    for (let i = 0; i < commands.length; i++) {
        line = commands[i].split(" ")
        command = line[0]
        n = Number(line[1])

        if (command === "Add") {
            arr = add(arr, n)
        }
        if (command === "Remove") {
            arr = remove(arr, n)
        }
        if (command === "RemoveAt") {
            arr = removeAt(arr, n)
        }
        if (command === "Insert") {
            index = Number(line[2])
            arr = insert(arr, index, n)
        }
    }

    console.log(arr.join(" "))
}

solve([
    '4 19 2 53 6 43',
    'Add 3',
    'Remove 2',
    'RemoveAt 1',
    'Insert 8 3'
]) // 4 53 6 8 43 3

solve([
    '6 12 2 65 6 42',
    'Add 8',
    'Remove 12',
    'RemoveAt 3',
    'Insert 6 2'
]) // 6 2 6 65 42 8