let count = 0;

let numeroTela = document.getElementById('contador')
let resultado = document.getElementById('resultados')

let adicionar = document.getElementById('incrementar')
let remover = document.getElementById('decrementar')
let salvar = document.getElementById('salvar')

function adicionarPessoa() {
    count += 1
    numeroTela.innerHTML = count
}

function removerPessoa() {
    count -= 1
    numeroTela.innerHTML = count
}

function salvarPessoa() {
    resultado.innerHTML += `${count} / ` 
    count = 0
    numeroTela.innerHTML = count
}