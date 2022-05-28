function solve(input) {
    const games = input[0].split(" ")

    let current = ""
    let command = ""
    let game = ""
    let extension = ""
    let commands = input.slice(1)
    let index = -1

    while (commands.length) {
        current = commands.shift().split(" ").filter(e => e !== " ")

        if (current === "Play!") {
            break
        }

        command = current[0]
        game = current[1]

        switch (command) {
            case "Install":
                // check if installed, if not => add the game to last position
                if (!games.includes(game)) {
                    games.push(game)
                }
                break
            case "Uninstall":
                // delete the game if it exists
                index = games.indexOf(game)
                if (index > -1) {
                    games.splice(index, 1)
                }
                break
            case "Update":
                // update the game if it exists and place it in the last position
                index = games.indexOf(game)
                if (index > -1) {
                    games.splice(index, 1)
                    games.push(game)
                }
                break
            case "Expansion":
                // check if the game exists => insert after it the expansion in format {game}:{expansion}
                extension = game.split("-")[1]
                game = game.split("-")[0]
                index = games.indexOf(game)
                if (index > -1) {
                    games.splice(index + 1, 0, `${game}:${extension}`)
                }
                break
            default:
                break
        }
    }
    console.log(games.join(" "))
}

solve([
    'CS WoW Diablo',
    'Install LoL',
    'Uninstall WoW',
    'Update Diablo',
    'Expansion CS-Go',
    'Play!'
]) // CS CS:Go LoL Diablo

solve([
    'CS WoW Diablo',
    'Uninstall XCOM',
    'Update PeshoGame',
    'Update WoW',
    'Expansion Civ-V',
    'Play!'
]) // CS Diablo WoW