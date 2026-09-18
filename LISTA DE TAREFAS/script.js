// ----- Variaveis dos IDs do HTML -----

const formTarefa = document.getElementById("form-tarefa")
const inputTarefa = document.getElementById("input-tarefa")
const listaTarefas = document.getElementById("lista-tarefas")


// Estrutura de uma tarefa (o CSS ja espera isso):
// <li class="tarefa">
//     <button class="btn-check" title="Concluir">&#10003;</button>
//     <span class="texto-tarefa">texto</span>
//     <button class="btn-deletar" title="Deletar">&#10005;</button>
// </li>


// 1. Escute o evento "submit" do formTarefa (nao o click do botao).
//    Impeca o recarregamento da pagina. -> preventDefault

// 2. Dentro do listener, pegue o texto digitado no inputTarefa. -> .value

// 3. Se o texto estiver vazio, saia da funcao sem criar nada. -> trim() e return

// 4. Crie um <li>, de a ele a classe "tarefa" e monte o conteudo acima.
//    -> createElement, classList.add

// 5. Coloque o <li> dentro do listaTarefas SEM apagar os que ja existem.
//    -> appendChild (innerHTML = ... apagaria tudo)

// 6. Limpe o inputTarefa.

// 7. Um unico listener de "click" no listaTarefas cuida dos dois botoes
//    de todas as tarefas, inclusive as criadas depois. -> event.target

// 8. Clique no .btn-check: alterna a classe "concluida" no <li> pai.
//    -> classList.toggle, closest(".tarefa")

// 9. Clique no .btn-deletar: remove o <li> pai. -> .remove()


// Bonus: contador de pendentes | salvar no localStorage | editar com dblclick
