function solve(pages, rate, days) {
    const readingHours = pages / rate
    console.log(readingHours / days)
}

solve(212, 20, 2) // 5.3
// Total time to read the book: 212 pages / 20 pages per hour = 10.6 hours
// Required hours per day: 10.6 hours / 2 days = 5.3 hours per day 

solve(432, 15, 4) // 7.2
// Total reading time of the book: 432 pages / 15 pages per hour = 28.8 hours
// Required hours per day: 28.8 hours / 4 days = 7.2 hours per day