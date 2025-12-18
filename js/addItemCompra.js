import geraData from "./geraData.js";

const listaDeCompras = document.querySelector("#lista-de-compras");
const inputItem = document.querySelector("#input-item");
let contador = 1;

export function addItemCompra() {
    contador++;

    const itemListaDeCompras = document.createElement("li");

    const listaItemContainer = document.createElement("div");
    listaItemContainer.className = "lista-item-container";

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.id = `checkbox-${contador}`;
    checkbox.className = "checkbox-item";

    const pItem = document.createElement("p");
    pItem.className = "tit-item";
    pItem.textContent = inputItem.value;
    pItem.style.marginLeft = "8px";
    pItem.style.display = "inline";

    const deleteBtn = document.createElement("button");
    deleteBtn.className = "botao-deletar";

    const editBtn = document.createElement("button");
    editBtn.className = "botao-editar";

    const pData = document.createElement("p");
    pData.className = "texto-data";
    pData.textContent = geraData();

    listaDeCompras.appendChild(itemListaDeCompras);
    itemListaDeCompras.appendChild(listaItemContainer);
    listaItemContainer.appendChild(checkbox);
    listaItemContainer.appendChild(pItem);
    listaItemContainer.appendChild(deleteBtn);
    listaItemContainer.appendChild(editBtn);
    itemListaDeCompras.appendChild(pData);

    inputItem.focus();
}
