function solve(input) {
    const pattern = /(?<name>\b[A-Z][a-z]{1,}\b \b[A-Z][a-z]{1,}\b)/g
    let result = pattern.exec(input)
    names = []

    while (result !== null) {
        names.push(result.groups.name)
        result = pattern.exec(input)
    }

    console.log(names.join(" "))
}

solve("Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov, Ivan	Ivanov") // Ivan Ivanov Test Testov