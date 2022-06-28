function solve(input) {
    let line = ""
    let movies = []

    const isAddMovie = (str) => str.indexOf("addMovie") > -1
    const isDirectedBy = (str) => str.indexOf("directedBy") > -1
    const isOnDate = (str) => str.indexOf("onDate") > -1

    let current
    let name = ""
    let director = ""
    let date = ""

    for (let i = 0; i < input.length; i++) {
        line = input[i]
        if (isAddMovie(line)) {
            current = line.split("addMovie").map(a => a.trim()).filter(a => a !== "")
            // if not in movies, add name
            name = current[0]
            if (!movies[name]) {
                movies[name] = {}
            }
            continue
        }
        if (isDirectedBy(line)) {
            current = line.split("directedBy").map(a => a.trim()).filter(a => a !== "")
            // if in movies, add director
            name = current[0]
            director = current[1]
            if (movies[name]) {
                movies[name].director = director
            }
            continue
        }
        if (isOnDate(line)) {
            current = line.split("onDate").map(a => a.trim()).filter(a => a !== "")
            // if in movies, add date
            name = current[0]
            date = current[1]
            if (movies[name]) {
                movies[name].date = date
            }
            continue
        }
    }

    Object.keys(movies).map(name => {
        if (movies[name].director && movies[name].date) {
            console.log(
                `{"name":"${name}","director":"${movies[name].director}","date":"${movies[name].date}"}`
            )
        }
    })
}

solve([
    'addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen'
])
// {"name":"Fast and Furious","date":"30.07.2018","director":"Rob Cohen"}
// {"name":"Godfather","director":"Francis Ford Coppola","date":"29.07.2018"}

solve([
    'addMovie The Avengers',
    'addMovie Superman',
    'The Avengers directedBy Anthony Russo',
    'The Avengers onDate 30.07.2010',
    'Captain America onDate 30.07.2010',
    'Captain America directedBy Joe Russo'
])
// {"name":"The Avengers","director":"Anthony Russo","date":"30.07.2010"}