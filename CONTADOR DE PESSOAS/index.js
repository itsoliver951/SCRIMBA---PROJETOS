let count = 0;
let incrementar = document.getElementById('contador');
let decrementar = document.getElementById('contador');

function adicionarPessoa() {
    count = count + 1;
    incrementar.innerText = count;
}

function removerPessoa() {
    count = count - 1;
    decrementar.innerText = count;
}

