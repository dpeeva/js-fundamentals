function solve(year, month, day) {
    let y = year !== 1 ? year : 1901
    let m = ""
    switch (month) {
        case 1:
            m = "Jan"
            break
        case 2:
            m = "Feb"
            break
        case 3:
            m = "Mar"
            break
        case 4:
            m = "Apr"
            break
        case 5:
            m = "May"
            break
        case 6:
            m = "Jun"
            break
        case 7:
            m = "Jul"
            break
        case 8:
            m = "Aug"
            break
        case 9:
            m = "Sep"
            break
        case 10:
            m = "Oct"
            break
        case 11:
            m = "Nov"
            break
        case 12:
            m = "Dec"
            break

        default:
            break
    }
    const date = new Date(`${m} ${day}, ${y}`)
    const nextDay = new Date(date)
    nextDay.setDate(date.getDate() + 1)
    console.log(`${nextDay.getFullYear()}-${nextDay.getMonth() + 1}-${nextDay.getDate()}`)
}

solve(2016, 9, 30) // 2016-10-1
solve(2020, 3, 24) // 2020-3-25