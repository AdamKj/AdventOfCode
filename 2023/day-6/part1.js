const times = []
const distances = []

document.querySelector("pre").innerText.split("/n").forEach((item) => {
    console.log(item.split(":"))
    if (item !== "") {
        const type = item.split(":")[0]
        const values = item.split(":")[1]
        values.match(/\d+/g).map((num, index) => {
            if (type === "Time") {
                times.push({ id: index + 1, value: Number(num), type: type })
            } else {
                distances.push({ id: index + 1, value: Number(num), type: type })
            }
        })
    }
})

times.map(time => {
    let posWins = 0;
    const distance = distances.filter(dist => dist.id === time.id)[0]
    for (let i = 0; i < time.value; i++) {
        if (i * (time.value - i) > distance.value) {
            posWins++
        }
    }
    return posWins;
}).reduce((acc, val) => acc * val, 1)
