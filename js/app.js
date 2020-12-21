const reset = () => {
    let img = document.querySelector("img");
    let answer = document.getElementById("answer");
    answer.innerHTML = "";
    img.removeAttribute("src");
}


const roll = () => {
    let answer = document.getElementById("answer");
    let img = document.querySelector("img");
    dices = ["one", "two", "three", "four", "five", "six"];
    let x = parseInt(Math.random() * 6);
    if (dices[x] == "one") {
        img.setAttribute("src", "./img/diceone.jpg");
        answer.innerHTML = "One";
    }
    if (dices[x] == "two") {
        img.setAttribute("src", "./img/dicetwo.jpg");
        answer.innerHTML = "Two";
    }
    if (dices[x] == "three") {
        img.setAttribute("src", "./img/dicethree.jpg");
        answer.innerHTML = "Three";
    }
    if (dices[x] == "four") {
        img.setAttribute("src", "./img/dicefour.jpg");
        answer.innerHTML = "Four";

    }
    if (dices[x] == "five") {
        img.setAttribute("src", "./img/dicefive.jpg");
        answer.innerHTML = "Five";
    }
    if (dices[x] == "six") {
        img.setAttribute("src", "./img/dicesix.jpg");
        answer.innerHTML = "Six";
    }
}