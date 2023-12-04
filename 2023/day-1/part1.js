document.querySelector("pre").split("\n").map(word => {
    word.split('').map(char => {
        Object.keys(obj).map(key => {
            if (key[0] === char) {

            }
        })
    })
    if (a?.length > 0) {
        if (a.length > 1) {
            return Number(a[0] + a[a.length - 1])
        }
        return Number(a[0] + a[0])
    }
    return 0
})