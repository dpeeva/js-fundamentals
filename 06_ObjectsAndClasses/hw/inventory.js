function solve(input) {
    const heroes = []
    let line = []

    for (let i = 0; i < input.length; i++) {
        line = input[i].split("/").map(a => a.trim())

        heroes.push({
            name: line[0],
            level: Number(line[1]),
            items: line[2].split(",")
        })
    }

    heroes.sort((a, b) => (a.level - b.level)).map(hero => console.log(
        `Hero: ${hero.name}\nlevel => ${hero.level}\nitems => ${hero.items.join(",")}`
    ))
}

solve([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
])
// Hero: Hes
// level => 1
// items => Desolator, Sentinel, Antara
// Hero: Derek
// level => 12
// items => BarrelVest, DestructionSword
// Hero: Isacc
// level => 25
// items => Apple, GravityGun

solve([
    'Batman / 2 / Banana, Gun',
    'Superman / 18 / Sword',
    'Poppy / 28 / Sentinel, Antara'
])
// Hero: Batman
// level => 2
// items => Banana, Gun
// Hero: Superman
// level => 18
// items => Sword
// Hero: Poppy
// level => 28
// items => Sentinel, Antara