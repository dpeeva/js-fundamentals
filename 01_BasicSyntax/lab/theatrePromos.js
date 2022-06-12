function solve(day, age) {
    const group1 = {
        Weekday: "12$",
        Weekend: "15$",
        Holiday: "5$"
    }
    const group2 = {
        Weekday: "18$",
        Weekend: "20$",
        Holiday: "12$"
    }
    const group3 = {
        Weekday: "12$",
        Weekend: "15$",
        Holiday: "10$"
    }

    if (age >= 0 && age <= 18) {
        console.log(group1[day])
    } else if (age > 18 && age <= 64) {
        console.log(group2[day])
    } else if (age > 64 && age <= 122) {
        console.log(group3[day])
    } else {
        console.log("Error!")
    }
}

solve('Weekday', 42) // 18$
solve('Holiday', -12) // Error!
solve('Holiday', 15) // 5$