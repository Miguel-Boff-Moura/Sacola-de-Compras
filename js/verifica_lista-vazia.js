import { addItemCompra } from "./addItemCompra.js";

const inputItem = document.querySelector("#input-item");
const listaDeCompras = document.querySelector("#lista-de-compras");
const msgListaVazia = document.querySelector('.mensagem_lista-vazia');

export function verificaListaVazia() {
  if (inputItem.value.trim() === "") {
    alert("O campo não pode estar vazio!");
    return;
  }

  addItemCompra();
  atualizarMensagemListaVazia();
  inputItem.value = "";
  inputItem.focus();
}

export function atualizarMensagemListaVazia() {
  const quantidadeLI = listaDeCompras.querySelectorAll('li').length;
  if (!msgListaVazia) return;

  if (quantidadeLI === 0) {
    msgListaVazia.style.display = 'block';
  } else {
    msgListaVazia.style.display = 'none';
  }
}
