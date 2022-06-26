// not submitted
function solve(input) {
    const budget = Number(input[0])
    const students = Number(input[1])
    const price = {
        flour: Number(input[2]),
        eggs: Number(input[3]) * 10,
        apron: Number(input[4])
    }

    const flour = (students - Math.floor(students / 5)) * price.flour
    const eggs = students * price.eggs
    const apron = Math.ceil(students + students * 0.2) * price.apron

    const total = flour + eggs + apron

    if (budget >= total) {
        console.log(`Items purchased for ${total.toFixed(2)}$`)
    } else {
        console.log(`${(total - budget).toFixed(2)}$ more needed.`)
    }
}

solve([50, 2, 1.0, 0.1, 10.0]) // Items purchased for 34.00$
solve([100, 25, 4.0, 1.0, 6.0]) // 410.00$ more needed.
solve([946, 20, 12.05, 0.42, 27.89]) // 0.16$ more needed.