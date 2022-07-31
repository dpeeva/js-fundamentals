function solve(input) {
    const index = input.indexOf("Sail")
    const cities = input.slice(0, index)
    const commands = input.slice(index + 1)

    const list = new Map()
    cities.map(city => {
        let data = city.split("||")
        let name = data[0]

        if (list.has(name)) {
            const cityData = list.get(name)
            list.set(name, {
                population: cityData.population + Number(data[1]),
                gold: cityData.gold + Number(data[2])
            })
        } else {
            list.set(name, {
                population: Number(data[1]),
                gold: Number(data[2])
            })
        }
    })
    let line = ""

    while (commands.length > 0) {
        line = commands.shift()
        if (line === "End") {
            break
        }
        const data = line.split("=>")
        const command = data[0]
        const info = data[1].split(" - ")
        const name = info[0]

        if (command === "Plunder") {
            const cityData = list.get(name)
            const people = Number(data[2])
            const gold = Number(data[3])

            console.log(`${name} plundered! ${gold} gold stolen, ${people} citizens killed.`)

            if (cityData.gold - gold === 0 || cityData.population - people === 0) {
                console.log(`${name} has been wiped off the map!`)
                list.delete(name)
            } else {
                list.set(name, {
                    population: cityData.population - people,
                    gold: cityData.gold - gold
                })
            }

        }
        if (command === "Prosper") {
            const cityData = list.get(name)
            const gold = Number(data[2])

            if (gold < 0) {
                console.log(`Gold added cannot be a negative number!`)
            } else {
                list.set(name, {
                    population: cityData.population,
                    gold: cityData.gold + gold
                })
                console.log(`${gold} gold added to the city treasury. ${name} now has ${cityData.gold + gold} gold.`)
            }
        }
    }

    if (list.size > 0) {
        console.log(`Ahoy, Captain! There are ${list.size} wealthy settlements to go to:`)
        for (const [city, info] of list) {
            console.log(`${city} -> Population: ${info.population} citizens, Gold: ${info.gold} kg`)
        }
    } else {
        console.log(`Ahoy, Captain! All targets have been plundered and destroyed!`)
    }
}

solve([
    "Tortuga||345000||1250",
    "Santo Domingo||240000||630",
    "Havana||410000||1100",
    "Sail",
    "Plunder=>Tortuga=>75000=>380",
    "Prosper=>Santo Domingo=>180",
    "End"
])
// Tortuga plundered! 380 gold stolen, 75000 citizens killed.
// 180 gold added to the city treasury. Santo Domingo now has 810 gold.
// Ahoy, Captain! There are 3 wealthy settlements to go to:
// Tortuga -> Population: 270000 citizens, Gold: 870 kg
// Santo Domingo -> Population: 240000 citizens, Gold: 810 kg
// Havana -> Population: 410000 citizens, Gold: 1100 kg

solve([
    "Nassau||95000||1000",
    "San Juan||930000||1250",
    "Campeche||270000||690",
    "Port Royal||320000||1000",
    "Port Royal||100000||2000",
    "Sail",
    "Prosper=>Port Royal=>-200",
    "Plunder=>Nassau=>94000=>750",
    "Plunder=>Nassau=>1000=>150",
    "Plunder=>Campeche=>150000=>690",
    "End"
])
// Gold added cannot be a negative number!
// Nassau plundered! 750 gold stolen, 94000 citizens killed.
// Nassau plundered! 150 gold stolen, 1000 citizens killed.
// Nassau has been wiped off the map!
// Campeche plundered! 690 gold stolen, 150000 citizens killed.
// Campeche has been wiped off the map!
// Ahoy, Captain! There are 2 wealthy settlements to go to:
// San Juan -> Population: 930000 citizens, Gold: 1250 kg
// Port Royal -> Population: 420000 citizens, Gold: 3000 kg
