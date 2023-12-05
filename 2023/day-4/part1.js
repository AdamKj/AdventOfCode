document.querySelector("pre").innerText.split("\n").map(card => {
    let numbers = card.split(":")[1]?.split("|")
    let score = 0
    if (numbers) {
        let winNum = numbers[0];
        let myNum = numbers[1];
        let c = winNum.split(" ").filter(num => myNum.split(" ").includes(num));
        c.filter(n => {
            if (n !== "") {
                if (score <= 1) {
                    return score++;
                } else {
                    return score = score * 2;
                }
            }
        })
    }
    return score
}).reduce((acc, val) => acc + val, 0)