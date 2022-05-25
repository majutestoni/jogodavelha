

const tabuleiro = document.getElementsByTagName('input');
const reinicirJogo = document.getElementById('reiniciarJogo');

const jogadorVez = document.getElementById('jogador');
let vencedor = '';
let jogador = '';
//sortearJogador();

function sortearJogador () {
    if (Math.floor(Math.random() * 2) == 0) {
        jogador = 'O'
        jogadorVez.innerText = 'O';
        jogadorVez.style.color = '#F00';
    } else {
        jogador = 'X';
        jogadorVez.innerText = 'X';
        jogadorVez.style.color = '#00F';
    }
}
sortearJogador();

function trocarJogador() {
    if (jogador == 'X') {
        jogador = 'O';
        jogadorVez.innerText = "O";
        jogadorVez.style.color = '#F00';

    } else {
        jogador = 'X';
        jogadorVez.innerText = "X";
        jogadorVez.style.color = '#00F';
    }
}

for (let i = 0; i < 9; i++) {
    tabuleiro[i].addEventListener('click', (event) => {
        if (event.target.value == '' && vencedor == '') {
            event.target.value = jogador;
            event.target.style.color = 'white';

            trocarJogador();
            vencedor = vitoria();

            if (vencedor != '') {
                jogadorVez.innerText = `${vencedor} venceu`;
            }
        }
    })
}

reinicirJogo.addEventListener('click', () => {
    for (let i = 0; i < 9; i++) {
        tabuleiro[i].value = '';
        tabuleiro[i].style.color = 'white'
        tabuleiro[i].style.backgroundColor = 'rgb(44, 110, 47)'

    }
    vencedor = '';

    sortearJogador();
})






let vitoria = function () {
    if ((tabuleiro[0].value == tabuleiro[1].value) && (tabuleiro[1].value == tabuleiro[2].value) && tabuleiro[0].value != '') {
        tabuleiro[0].style.backgroundColor = '#0F0';
        tabuleiro[1].style.backgroundColor = '#0F0';
        tabuleiro[2].style.backgroundColor = '#0F0';

        return tabuleiro[0].value;

    } else if ((tabuleiro[3].value == tabuleiro[4].value) && (tabuleiro[4].value == tabuleiro[5].value) && tabuleiro[3].value != '') {
        tabuleiro[3].style.backgroundColor = '#0F0';
        tabuleiro[4].style.backgroundColor = '#0F0';
        tabuleiro[5].style.backgroundColor = '#0F0';

        return tabuleiro[3].value;

    } else if ((tabuleiro[6].value == tabuleiro[7].value) && (tabuleiro[7].value == tabuleiro[8].value) && tabuleiro[6].value != '') {
        tabuleiro[6].style.backgroundColor = '#0F0';
        tabuleiro[7].style.backgroundColor = '#0F0';
        tabuleiro[8].style.backgroundColor = '#0F0';

        return tabuleiro[6].value;

    } else if ((tabuleiro[0].value == tabuleiro[3].value) && (tabuleiro[3].value == tabuleiro[6].value) && tabuleiro[0].value != '') {
        tabuleiro[0].style.backgroundColor = '#0F0';
        tabuleiro[3].style.backgroundColor = '#0F0';
        tabuleiro[6].style.backgroundColor = '#0F0';

        return tabuleiro[0].value;

    } else if ((tabuleiro[1].value == tabuleiro[4].value) && (tabuleiro[4].value == tabuleiro[7].value) && tabuleiro[1].value != '') {
        tabuleiro[1].style.backgroundColor = '#0F0';
        tabuleiro[4].style.backgroundColor = '#0F0';
        tabuleiro[7].style.backgroundColor = '#0F0';

        return tabuleiro[1].value;

    } else if ((tabuleiro[2].value == tabuleiro[5].value) && (tabuleiro[5].value == tabuleiro[8].value) && tabuleiro[2].value != '') {
        tabuleiro[2].style.backgroundColor = '#0F0';
        tabuleiro[5].style.backgroundColor = '#0F0';
        tabuleiro[8].style.backgroundColor = '#0F0';

        return tabuleiro[2].value;
    } else if ((tabuleiro[0].value == tabuleiro[4].value) && (tabuleiro[4].value == tabuleiro[8].value) && tabuleiro[0].value != '') {
        tabuleiro[0].style.backgroundColor = '#0F0';
        tabuleiro[4].style.backgroundColor = '#0F0';
        tabuleiro[8].style.backgroundColor = '#0F0';

        return tabuleiro[0].value;

    } else if ((tabuleiro[2].value == tabuleiro[4].value) && (tabuleiro[4].value == tabuleiro[6].value) && tabuleiro[2].value != '') {
        tabuleiro[2].style.backgroundColor = '#0F0';
        tabuleiro[4].style.backgroundColor = '#0F0';
        tabuleiro[6].style.backgroundColor = '#0F0';

        return tabuleiro[2].value;
    }

    return '';
}