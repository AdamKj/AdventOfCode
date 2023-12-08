let time = ""
let distance = ""

document.querySelector("pre").innerText.split("/n").forEach((item) => {
    if (item !== "") {
        const type = item.split(":")[0]
        const values = item.split(":")[1]
        values.match(/\d+/g).map(num => {
            if (type === "Time") {
                time += num
            } else {
                distance += num
            }
        })
    }
})

let posWins = 0;
for (let i = 0; i < time; i++) {
    if (i * (time - i) > distance) {
        posWins++
    }
}