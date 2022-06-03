function solve(arr) {
    const length = arr.length
    const end = parseInt(arr.length / 2)
    let front, back

    for (let i = 0; i < end; i++) {
        front = arr[i]
        back = arr[length - 1 - i]
        arr.splice(i, 1, back)
        arr.splice(length - 1 - i, 1, front)
    }

    console.log(arr.join(" "))
}

solve(['a', 'b', 'c', 'd', 'e']) // e d c b a 
solve(['abc', 'def', 'hig', 'klm', 'nop']) // nop klm hig def abc
solve(['33', '123', '0', 'dd']) // dd 0 123 33