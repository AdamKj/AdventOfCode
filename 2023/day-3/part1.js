let number = []
let char = []
let rowNumbers = []
let correctNums = []
document.querySelector("pre").innerText.split("\n").forEach((s, index) => {
    let row = index + 1;
    s.match(/\d+/g)?.map(n => rowNumbers.push({ number: n, row: row }))


    for (let i = 0; i < s.length; i++) {
        let index = i;
        let character = s[i];
        if (!isNaN(character)) {
            number.push({ index: index, value: character, row: row })
        } else if (character !== ".") {
            char.push({ index: index, value: character, row: row })
        }
    }
})
rowNumbers.forEach((item, i) => item.id = `${item.number}-${item.row}-${i}`)
let keys = new Set();

const test = []
number.forEach((item, i) => {
    if (i === 0) {
        const obj = {
            index: [item.index],
            value: item.value,
            row: item.row,
        };
        test.push(obj);
    } else {
        const obj = test[test.length - 1];

        if ((obj.index.includes(item.index - 1) || obj.index.includes(item.index + 1)) && item.row === obj.row) {
            obj.index.push(item.index);
            obj.value += item.value;
        } else {
            const newObj = {
                index: [item.index],
                value: item.value,
                row: item.row,
            };
            test.push(newObj);
        }
    }
})
test.forEach((item, i) => item.id = `${item.value}-${item.row}-${i}`)

test.forEach(n => {
    char.forEach(c => {
        if (c.row === n.row - 1 || c.row === n.row + 1 || c.row === n.row) {
            if (n.index.includes(c.index) || n.index.includes(c.index + 1) || n.index.includes(c.index - 1)) {
                rowNumbers.forEach(num => {
                    if (num.id === n.id) {
                        let key = num.id
                        if (!keys.has(key)) {
                            correctNums.push(num);
                            keys.add(key);
                        }
                    }
                });
            }
        }
    });
});
correctNums.map(n => Number(n.number)).reduce((acc, val) => acc + val, 0)