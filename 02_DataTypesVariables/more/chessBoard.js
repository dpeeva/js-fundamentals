function solve(n) {
    const lines = []
    lines.push(`<div class="chessboard">`)
    for (let i = 0; i < n; i++) {
        lines.push(`  <div>`)
        let className = ""
        if (i % 2 !== 0) {
            for (let j = 0; j < n; j++) {
                if (j % 2 !== 0) {
                    className = "black"
                } else {
                    className = "white"
                }
                lines.push(`    <span class="${className}"></span>`)
            }
        } else {
            for (let j = 0; j < n; j++) {
                if (j % 2 !== 0) {
                    className = "white"
                } else {
                    className = "black"
                }
                lines.push(`    <span class="${className}"></span>`)
            }
        }
        lines.push(`  </div>`)
    }
    lines.push(`</div>`)

    lines.map(line => console.log(line))
}

solve(3)
{/* <div class="chessboard">
  <div>
    <span class="black"></span>
    <span class="white"></span>
    <span class="black"></span>
  </div>
  <div>
    <span class="white"></span>
    <span class="black"></span>
    <span class="white"></span>
  </div>
  <div>
    <span class="black"></span>
    <span class="white"></span>
    <span class="black"></span>
  </div>
</div> */}
