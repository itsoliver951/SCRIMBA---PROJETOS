let pessoas = []

let inputText = document.getElementById("inputText");

const btnCadastro = document.getElementById("btn-cadastro");

let listaPessoas = document.getElementById("lista-Pessoas");

btnCadastro.addEventListener("click", function() {
    const nome = inputText.value.trim()

    // Barra campo vazio (ou so com espacos) antes de entrar no array
    if (nome === "") {
        inputText.focus()
        return
    }

    pessoas.push(nome)
    listaPessoas.innerHTML = ""

    for (let i = 0; i<pessoas.length; i++) {
        listaPessoas.innerHTML += `<li>${pessoas[i]}</li>`
    }
    
    inputText.value = ""
})

inputText.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault(); // Evita o comportamento padrão (como recarregar a página)
    btnCadastro.click(); // Simula o clique no botão
  }
});
