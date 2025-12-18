function geraData() {
    const diaDaSemana = new Date().toLocaleDateString("pt-BR", {
        weekday: "long",
    });
    const data = new Date().toLocaleDateString("pt-BR");
    const hora = new Date().toLocaleTimeString("pt-BR", {
        hour: "2-digit",
        minute: "2-digit",
    });

    const dataFormatada = `${diaDaSemana} (${data}) às ${hora}`;
    return dataFormatada;
}

export default geraData;
// Poderia ser colocado o 'export defaul' no início da função.
