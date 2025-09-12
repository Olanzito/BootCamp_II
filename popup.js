const botao = document.getElementById("botao");
const reset = document.getElementById("rest");
const titulo = document.querySelector("h2");

let contador = 0;
let tempoRestante = 10;
let timerId = null;      

function atualizarContador() {
    titulo.textContent = `Cliques: ${contador} | Tempo: ${tempoRestante}s`;
}

botao.addEventListener("click", () => {
    if (!timerId) {
        iniciarTimer();
    }

    contador++;
    atualizarContador();
});

reset.addEventListener("click", () => {
    contador = 0;
    tempoRestante = 10;
    botao.disabled = false;

    if (timerId) {
        clearInterval(timerId);
        timerId = null;
    }

    atualizarContador();
});

function iniciarTimer() {
    timerId = setInterval(() => {
        tempoRestante--;
        atualizarContador();

        if (tempoRestante <= 0) {
            clearInterval(timerId);
            timerId = null;
            botao.disabled = true;
            titulo.textContent = `Fim! Total de cliques: ${contador}`;
        }
    }, 1000);
}
atualizarContador();