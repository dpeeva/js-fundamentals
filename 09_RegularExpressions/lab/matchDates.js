function solve(input) {
    // Format: dd{separator}MMM{separator}yyyy
    const pattern = /(?<day>\b\d{2}\b)(.|\/|-)(?<month>[A-Z][a-z]{2})\2(?<year>\d{4})/g

    let result = pattern.exec(input)

    while (result !== null) {
        console.log(
            `Day: ${result.groups.day}, Month: ${result.groups.month}, Year: ${result.groups.year}`
        )
        result = pattern.exec(input)
    }
}

solve([
    '13/Jul/1928, 10-Nov-1934, , 01/Jan-1951,f 25.Dec.1937 23/09/1973, 1/Feb/2016'
])
// Day: 13, Month: Jul, Year: 1928
// Day: 10, Month: Nov, Year: 1934
// Day: 25, Month: Dec, Year: 1937

solve([
    '1/Jan-1951 23/october/197 11-Dec-2010 18.Jan.2014'
])
// Day: 11, Month: Dec, Year: 2010
// Day: 18, Month: Jan, Year: 2014