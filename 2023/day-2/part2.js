document.querySelector("pre").innerText.split("\n").map(el => {
    const id = Number(el.split(' ')[1]?.replace(':', ''))
    const obj = {
        'id': id,
        'red': 0,
        'green': 0,
        'blue': 0
    }

    el.split(':')[1]?.trim(/\g/).split(';').map(i => {
        const arr = i.split(',').map(j => j.trim(/\g/))
        arr.map(e => {
            const a = e.split(' ')
            const count = a[0]
            const color = a[1]
            if (obj[color] < Number(count)) {
                obj[color] = Number(count)
            }
        })
        return obj
    })
    if (Number(id)) {
        return obj.red * obj.green * obj.blue
    } else {
        return 0;
    }
}).reduce((a, c) => a + c, 0)