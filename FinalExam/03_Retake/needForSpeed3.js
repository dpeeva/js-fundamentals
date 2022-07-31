function solve(input) {
    const length = Number(input[0])
    const cars = input.slice(1, length + 1)
    let commands = input.slice(length + 1)

    const garage = new Map()
    cars.map(car => {
        let data = car.split("|")
        let name = data[0]

        garage.set(name, {
            mileage: Number(data[1]),
            fuel: Number(data[2])
        })
    })
    let line = ""

    while (commands.length > 0) {
        line = commands.shift()
        if (line === "Stop") {
            break
        }
        let data = line.split(" : ")
        let command = data[0]
        let car = data[1]

        if (command === "Drive") {
            let distance = Number(data[2])
            let fuelNeeded = Number(data[3])
            const carInfo = garage.get(car)
            let km = carInfo.mileage
            let fuel = carInfo.fuel

            if (carInfo.fuel - fuelNeeded >= 0) {
                km = carInfo.mileage + distance
                fuel = carInfo.fuel - fuelNeeded
                console.log(`${car} driven for ${distance} kilometers. ${fuelNeeded} liters of fuel consumed.`)
                garage.set(car, {
                    mileage: km,
                    fuel: carInfo.fuel - fuelNeeded
                })
            } else {
                console.log(`Not enough fuel to make that ride`)
            }

            if (km >= 100000) {
                console.log(`Time to sell the ${car}!`)
                garage.delete(car)
            }
        }
        if (command === "Refuel") {
            let fuelToAdd = Number(data[2])
            const carInfo = garage.get(car)
            fuelToAdd = fuelToAdd + carInfo.fuel > 75 ? 75 - carInfo.fuel : fuelToAdd
            garage.set(car, {
                mileage: carInfo.mileage,
                fuel: carInfo.fuel + fuelToAdd
            })
            console.log(`${car} refueled with ${fuelToAdd} liters`)
        }
        if (command === "Revert") {
            let kilometers = Number(data[2])
            const carInfo = garage.get(car)
            let km = carInfo.mileage - kilometers < 10000 ? 10000 : carInfo.mileage - kilometers
            garage.set(car, {
                mileage: km,
                fuel: carInfo.fuel
            })
            console.log(`${car} mileage decreased by ${carInfo.mileage - km} kilometers`)
        }
    }

    for (const [car, data] of garage) {
        console.log(`${car} -> Mileage: ${data.mileage} kms, Fuel in the tank: ${data.fuel} lt.`)
    }
}

solve([
    '3',
    'Audi A6|38000|62',
    'Mercedes CLS|11000|35',
    'Volkswagen Passat CC|45678|5',
    'Drive : Audi A6 : 543 : 47',
    'Drive : Mercedes CLS : 94 : 11',
    'Drive : Volkswagen Passat CC : 69 : 8',
    'Refuel : Audi A6 : 50',
    'Revert : Mercedes CLS : 500',
    'Revert : Audi A6 : 30000',
    'Stop'
])
// Audi A6 driven for 543 kilometers. 47 liters of fuel consumed.
// Mercedes CLS driven for 94 kilometers. 11 liters of fuel consumed.
// Not enough fuel to make that ride
// Audi A6 refueled with 50 liters
// Mercedes CLS mileage decreased by 500 kilometers
// Audi A6 -> Mileage: 10000 kms, Fuel in the tank: 65 lt.
// Mercedes CLS -> Mileage: 10594 kms, Fuel in the tank: 24 lt.
// Volkswagen Passat CC -> Mileage: 45678 kms, Fuel in the tank: 5 lt.

solve([
    '4',
    'Lamborghini Veneno|11111|74',
    'Bugatti Veyron|12345|67',
    'Koenigsegg CCXR|67890|12',
    'Aston Martin Valkryie|99900|50',
    'Drive : Koenigsegg CCXR : 382 : 82',
    'Drive : Aston Martin Valkryie : 99 : 23',
    'Drive : Aston Martin Valkryie : 2 : 1',
    'Refuel : Lamborghini Veneno : 40',
    'Revert : Bugatti Veyron : 2000',
    'Stop'
])
// Not enough fuel to make that ride
// Aston Martin Valkryie driven for 99 kilometers. 23 liters of fuel consumed.
// Aston Martin Valkryie driven for 2 kilometers. 1 liters of fuel consumed.
// Time to sell the Aston Martin Valkryie!
// Lamborghini Veneno refueled with 1 liters
// Bugatti Veyron mileage decreased by 2000 kilometers
// Lamborghini Veneno -> Mileage: 11111 kms, Fuel in the tank: 75 lt.
// Bugatti Veyron -> Mileage: 10345 kms, Fuel in the tank: 67 lt.
// Koenigsegg CCXR -> Mileage: 67890 kms, Fuel in the tank: 12 lt.