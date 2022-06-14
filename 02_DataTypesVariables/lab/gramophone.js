function solve(band, album, song) {
    const songDuration = (album.length * band.length) * song.length / 2
    const rotations = songDuration / 2.5
    console.log(`The plate was rotated ${Math.ceil(rotations)} times.`)
}

solve('Black Sabbath', 'Paranoid', 'War Pigs') // The plate was rotated 167 times.
solve('Rammstein', 'Sehnsucht', 'Engel') // The plate was rotated 81 times.