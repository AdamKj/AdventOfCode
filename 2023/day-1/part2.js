const obj = {
 'one': '1',
 'two': '2',
 'three': '3',
 'four': '4',
 'five': '5',
 'six': '6',
 'seven': '7',
 'eight': '8',
 'nine': '9',
 'zero': '0'
}

document.querySelector("pre").split("\n").map(word => {
    let b = ""
    let d = "";
    word.match(/\w/g)?.some(c => {
        let o = Object.keys(obj).some(key => {
            if (b.includes(key)) {
                d += obj[key]
                return true;
            }
            return false
        })
        if (o) return true;
        if (Number(c)) {
            d += c
            return true;
        } else {
            b += c
            if (obj[b]) {
                d += obj[b]
                return true;
            }
        }
        return false;
    })
    b = ""

    word.match(/\w/g)?.reverse().some(c => {
        let o = Object.keys(obj).some(key => {
            if (b.includes(key)) {
                d += obj[key]
                return true;
            }
            return false
        })
        if (o) return true;
        if (Number(c)) {
            d += c
            return true
        } else {
            b = c + b
            if (obj[b]) {
                d += obj[b]
                return true;
            }
        }
        return false;
    })
    b = ""
    return Number(d)
}).reduce((arr, val) => arr + val, 0)