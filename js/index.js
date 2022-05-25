

const tabuleiro = document.getElementsByTagName('input');
const reinicirJogo = document.getElementById('reinicirJogo');

const jogadorVez = document.getElementById('jogador');
let jogador = '';
let vencedor = '';

sortearJogador();

for (let i = 0; i < 9; i++) {
    tabuleiro[i].addEventListener(Click, (event) => {
        if (event.target.value == "" && vencedor == '') {
            event.target.value = jogador;
            event.target.style.color = 'black';

            trocaJogador();
        }
    })
}

let trocaJogador = function () {
    if (jogador == 'X') {
        jogador = 'O';
        jogadorVez.innerText = 'O';
        jogadorVez.style.color = '#F00'
    } else {
        jogador = 'X';
        jogadorVez.innerText = 'X';
        jogadorVez.style.color = '#00F'
    }
}

sortearJogador = function () {

}

function vencedor() {
    if (botao1 == botao2 & botao1 == botao3) {
        console.log('teste')
    }
}