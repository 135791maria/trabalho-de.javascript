const input = document.querySelector(".input-principal")
const botao = document.querySelector(".botao-adicionar")
const listaCompleta = document.querySelector("#tarefas")


let arrayDeTarefas = [""]
function mostrarNaTela(){
let novaLista = ""
    arrayDeTarefas.forEach(tarefa => {

        novaLista = novaLista + `
    <li class="item-tarefa">
        <p>${tarefa}</p>
    </li>
       
     `
    })
    listaCompleta.innerHTML = novaLista
}

function cliqueiNoBotao(){

    arrayDeTarefas.push(input.value)

    mostrarNaTela()
}

botao.addEventListener("click", cliqueiNoBotao)