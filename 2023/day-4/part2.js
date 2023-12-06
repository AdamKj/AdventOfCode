let test = []
document.querySelector("pre").innerText.split("\n").map((card, id) => {
    let numbers = card.split(":")[1]?.split("|")
    let trueId = id + 1;
    let nextCard = id + 2
    let cards = 0;
    let extraIterations = 0;
    test.map(n => {
        if (n.card === trueId) {
            extraIterations++
        }
    })

    if (numbers) {
        cards++;
        let winNum = numbers[0];
        let myNum = numbers[1];
        let c = winNum.split(" ").filter(num => myNum.split(" ").includes(num));
        c.filter(n => {
            if (n !== "") {
                return test.push({ id: trueId, card: nextCard++ })
            }
        })
        for (let i = 0; i < extraIterations; i++) {
            nextCard = id + 2;
            c.filter(n => {
                if (n !== "") {
                    return test.push({ id: trueId, card: nextCard++ })
                }
            })
            cards++
        }
    }
    return cards
}).reduce((acc, val) => acc + val, 0)