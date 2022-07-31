function solve(input) {
    const length = Number(input[0])
    const heroes = input.slice(1, length + 1)
    let commands = input.slice(length + 1)

    const list = new Map()
    heroes.map(hero => {
        let data = hero.split(" ")
        let name = data[0]

        let hp = Number(data[1])
        let mp = Number(data[2])

        list.set(name, {
            HP: hp > 100 ? 100 : hp,
            MP: mp > 200 ? 200 : mp
        })
    })
    let line = ""

    while (commands.length > 0) {
        line = commands.shift()
        if (line === "End") {
            break
        }
        let data = line.split(" - ")
        let command = data[0]
        let name = data[1]

        if (command === "CastSpell") {
            const heroData = list.get(name)
            let mpNeeded = Number(data[2])
            let spell = data[3]
            if (heroData.MP >= mpNeeded) {
                list.set(name, {
                    HP: heroData.HP,
                    MP: heroData.MP - mpNeeded
                })
                console.log(`${name} has successfully cast ${spell} and now has ${heroData.MP - mpNeeded} MP!`)
            } else {
                console.log(`${name} does not have enough MP to cast ${spell}!`)
            }
        }
        if (command === "TakeDamage") {
            const heroData = list.get(name)
            let damage = Number(data[2])
            let attacker = data[3]
            if (damage < heroData.HP) {
                console.log(`${name} was hit for ${damage} HP by ${attacker} and now has ${heroData.HP - damage} HP left!`)
                list.set(name, {
                    HP: heroData.HP - damage,
                    MP: heroData.MP
                })
            } else {
                console.log(`${name} has been killed by ${attacker}!`)
                list.set(name, {
                    HP: 0,
                    MP: heroData.MP
                })
            }
        }
        if (command === "Recharge") {
            const heroData = list.get(name)
            let increase = Number(data[2])
            if (heroData.MP + increase > 200) {
                increase = 200 - heroData.MP
            }
            list.set(name, {
                HP: heroData.HP,
                MP: heroData.MP + increase
            })
            console.log(`${name} recharged for ${increase} MP!`)
        }
        if (command === "Heal") {
            const heroData = list.get(name)
            let increase = Number(data[2])
            if (heroData.HP + increase > 100) {
                increase = 100 - heroData.HP
            }
            list.set(name, {
                HP: heroData.HP + increase,
                MP: heroData.MP
            })
            console.log(`${name} healed for ${increase} HP!`)
        }
    }

    for (const [hero, info] of list) {
        if (info.HP !== 0) {
            console.log(hero)
            console.log(`  HP: ${info.HP}`)
            console.log(`  MP: ${info.MP}`)
        }
    }
}

solve([
    "2",
    "Solmyr 85 120",
    "Kyrre 99 50",
    "Heal - Solmyr - 10",
    "Recharge - Solmyr - 50",
    "TakeDamage - Kyrre - 66 - Orc",
    "CastSpell - Kyrre - 15 - ViewEarth",
    "End"
])
// Solmyr healed for 10 HP!
// Solmyr recharged for 50 MP!
// Kyrre was hit for 66 HP by Orc and now has 33 HP left!
// Kyrre has successfully cast ViewEarth and now has 35 MP!
// Solmyr
//   HP: 95
//   MP: 170
// Kyrre
//   HP: 33
//   MP: 35

solve([
    "4",
    "Adela 90 150",
    "SirMullich 70 40",
    "Ivor 1 111",
    "Tyris 94 61",
    "Heal - SirMullich - 50",
    "Recharge - Adela - 100",
    "CastSpell - Tyris - 1000 - Fireball",
    "TakeDamage - Tyris - 99 - Fireball",
    "TakeDamage - Ivor - 3 - Mosquito",
    "End"
])
// SirMullich healed for 30 HP!
// Adela recharged for 50 MP!
// Tyris does not have enough MP to cast Fireball!
// Tyris has been killed by Fireball!
// Ivor has been killed by Mosquito!
// Adela
//   HP: 90
//   MP: 200
// SirMullich
//   HP: 100
//   MP: 40