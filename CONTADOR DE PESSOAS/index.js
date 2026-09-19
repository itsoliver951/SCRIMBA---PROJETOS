let count = 0;

let numeroTela = document.getElementById('contador')

let adicionar = document.getElementById('incrementar')
let remover = document.getElementById('decrementar')
let zerar = document.getElementById('zerar')

function adicionarPessoa() {
    count += 1
    numeroTela.innerHTML = count
}

function removerPessoa() {
    count -= 1
    numeroTela.innerHTML = count
}

function zerarPessoa() {
    count = 0
    numeroTela.innerHTML = count
}