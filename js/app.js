let pista = 100;
let cadeiraSuperior = 200;
let cadeiraInferior = 400;

function comprar() {
    let quantidade = parseInt(document.getElementById('qtd').value);
    let tipoDeIngresso = document.getElementById('tipo-ingresso').value;

    let quantidadePista = document.getElementById('qtd-pista');
    let quantidadeCadeiraSuperior = document.getElementById('qtd-superior');    
    let quantidadeCadeiraInferior = document.getElementById('qtd-inferior');

    if (tipoDeIngresso == 'pista' && quantidade <= pista) {
        pista -= quantidade;
        quantidadePista.innerHTML = pista.toString();
    } else if (tipoDeIngresso == 'superior' && quantidade <= cadeiraSuperior) {
        cadeiraSuperior -= quantidade;
        quantidadeCadeiraSuperior.innerHTML = cadeiraSuperior.toString();
    } else if (tipoDeIngresso == 'inferior' && quantidade <= cadeiraInferior) {
        cadeiraInferior -= quantidade;
        quantidadeCadeiraInferior.innerHTML = cadeiraInferior.toString();
    } else {
        alert('Quantidade indisponível');
    }

    document.getElementById('qtd').value = 0;
}