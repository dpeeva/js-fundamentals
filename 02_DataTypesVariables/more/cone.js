function solve(radius, height) {
    // V = (1/3)πr2h
    const volume = 1 / 3 * (Math.PI * (radius * radius) * height)

    // Slant height of a cone:
    // s = √(r2 + h2) = 5.8309518948453 (for r = 3, h = 5)
    // Lateral surface area of a cone:
    // L = πrs = πr√(r2 + h2) = 54.92756684944273
    // Base surface area of a cone (a circle):
    // B = πr2 = 28.274333882308139
    // Total surface area of a cone:
    // A = L + B = πrs + πr2 = πr(s + r) = πr(r + √(r2 + h2)) = 83,201900731750869

    const slantHeight = Math.sqrt(radius * radius + height * height)
    const lateralSurface = Math.PI * radius * slantHeight
    const baseSurface = Math.PI * (radius * radius)
    const totalSurface = lateralSurface + baseSurface

    console.log(`volume = ${volume.toFixed(4)}`)
    console.log(`area = ${totalSurface.toFixed(4)}`)
}

solve(3, 5)
// volume = 47.1239
// area = 83.2298

solve(3.3, 7.8)
// volume = 88.9511
// area = 122.0159