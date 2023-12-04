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

document.querySelector("pre").innerText.split("\n").map(word => {
    let a = word
        .split('')
        .map(char => {
            for (const key in obj) {
                if (key[0] === char) {
                    return obj[key];
                }
            }
            return '';
        })
        .filter(val => val !== '');

    if (a?.length > 0) {
        if (a.length > 1) {
            return Number(a[0] + a[a.length - 1])
        }
        return Number(a[0] + a[0])
    }
    return 0
}).reduce((arr, val) => arr + val, 0)