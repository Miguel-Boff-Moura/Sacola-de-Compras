import { verificaListaVazia, atualizarMensagemListaVazia } from "./js/verifica_lista-vazia.js";
import geraData from "./js/geraData.js";

const btnSalvarItem = document.querySelector("#adicionar-item");
const listaDeCompras = document.querySelector("#lista-de-compras");
const containerLista = document.querySelector(".container-lista");
const listaDeComprados = document.querySelector("#lista-de-comprados");
const divListaComprados = document.querySelector(".div_lista-comprados");
const inputModal = document.getElementById("novoNome");
const modal = document.getElementById("modal");

// Ajusta a visibilidade da mensagem ao carregar a página
atualizarMensagemListaVazia();

btnSalvarItem.addEventListener("click", function (evento) {
  evento.preventDefault();

  verificaListaVazia();
});

listaDeCompras.addEventListener("click", function (evento) {
  if (evento.target.type === "checkbox") {
    const liComprado = evento.target.closest("li");
    liComprado.classList.add("item-comprado");

    // Adicionar este li na de lista de comprados
    listaDeComprados.appendChild(liComprado);

    // Tornar a lista de comprados visível
    listaDeComprados.parentElement.style.display = "block";

    // Riscar o texto do li se o checkbox estiver marcado
    liComprado.querySelector(".tit-item").style.textDecoration = evento.target.checked ? "line-through" : "none";
  
    // Verificar se a Lista de Compras está fazia no momento que move o item para a lista de Comprados
    atualizarMensagemListaVazia();

    // Atualizar a data
    const pData = liComprado.querySelector('.texto-data');
    pData.textContent = `Item comprado ${geraData()}`;

    // Deixar a 'checkbox' disabled
    evento.target.disabled = true;
  }
});

containerLista.addEventListener("click", function (evento) {
  if (evento.target.className === "botao-deletar") {
    const liApagar = evento.target.closest("li");
    var resposta = confirm("Você tem certeza que deseja apagar este item?");
    
    if(resposta){
      liApagar.remove();
      if(listaDeComprados.children.length === 0){
        divListaComprados.style.display = 'none';
      }
      atualizarMensagemListaVazia();
    }
  }

  const li = evento.target.closest("li");
  var itemAtual = li.querySelector(".tit-item");

  if (evento.target.className === "botao-editar") {
    inputModal.value = itemAtual.textContent; // coloca o nome atual no input
    modal.style.display = "flex";        // mostra modal
    inputModal.focus();

    const divBtnsModal = document.querySelector(".botoes");

    divBtnsModal.addEventListener('click', function (evento) {
      if (evento.target.className === "cancelar"){
        modal.style.display = "none";
      } else if (evento.target.className === "salvar"){
        if (itemAtual) {
            itemAtual.textContent = inputModal.value;
        }
        modal.style.display = "none";
      }
    });
  }
});
