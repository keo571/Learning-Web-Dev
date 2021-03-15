const p1 = {
    score: 0,
    button: document.querySelector('#b1'),
    display: document.querySelector('#s1'),
}

const p2 = {
    score: 0,
    button: document.querySelector('#b2'),
    display: document.querySelector('#s2'),
}

const buttonReset = document.querySelector('#reset');


let isGameOver = false;

const select = document.querySelector('select')
let win = 3;

function updateScores(player, opponent) {
    if (!isGameOver) {
        player.score += 1;
        if (player.score === win) {
            isGameOver = true;
            player.display.classList.add('has-text-success');
            opponent.display.classList.add('has-text-danger');
            player.button.disabled = true;
            opponent.button.disabled = true;
        }
        player.display.innerText = player.score;
    }
}

select.addEventListener('change', function () {
    win = parseInt(this.value);
    reset();
})

p1.button.addEventListener('click', function () {
    updateScores(p1, p2);
})

p2.button.addEventListener('click', function () {
    updateScores(p2, p1);
})


buttonReset.addEventListener('click', reset)

function reset() {
    for (p of [p1, p2]) {
        p.display.innerText = '0';
        p.display.classList.remove('has-text-success', 'has-text-danger');
        p.score = 0;
        isGameOver = false;
        p.button.disabled = false;
    }
}