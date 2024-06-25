function multiplyNode(node, count) {
    for (let i = 0; i < count - 1; i++) {
        const copy = node.cloneNode(true);
        node.parentNode.insertBefore(copy, node);
    }
}

multiplyNode(document.querySelector('.box'), window.innerHeight);

if (window.innerWidth < 750) {
    for (const item of document.getElementsByClassName("mobile-disabled")) {
        item.style.color = '#232323';
        item.style.backgroundColor = '#232323';
    }
}

let showInterestCard = true;
let showHistoryCard = true;
let isOpen = false;

const showInterest = () => {
    showInterestCard = !showInterestCard;
    document.getElementById("interest").style.left = showInterestCard ? '42%' : '10%';
}

const showHistory = () => {
    showHistoryCard = !showHistoryCard;
    document.getElementById("history-card").style.left = showHistoryCard ? '42%' : '72%';
}

const clearAll = () => {
    return document.getElementById('result').value = "";
}

const display = (value, parentesis = false) => {
    if (parentesis) {
        isOpen = !isOpen;
    }

    return document.getElementById('result').value += value;
}

const calculateInterest = () => {
    const c = document.getElementById('c').value;
    const i = document.getElementById('i').value / 100;
    const t = document.getElementById('t').value;

    const result = c * Math.pow((1 + i), t);
    document.getElementById('interest-result').value = result.toFixed(2);
}

const calculate = () => {
    const history = document.getElementById('history-inner');
    const expression = document.getElementById('result').value;

    if (expression === "") {
        return;
    }

    let result = document.getElementById('result').value = eval(document.getElementById('result').value);

    let item = document.createElement('p');
    let text = document.createTextNode(`${expression} = ${result}`);

    item.appendChild(text);
    history.appendChild(item);
}

document.addEventListener("keypress", function(event) {
    if (event.key === 'Enter') {
        calculate();
    } else if(event.DOM_KEY_LOCATION_NUMPAD) {
        document.getElementById('result').focus();
    }
});