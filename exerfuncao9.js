let valorEmDolar = parseFloat(prompt("informe um valor em dolar")) 
let valorEmReais = converterDolarParaReal(valorEmDolar);
function converterDolarParaReal(valorEmDolar) {
    let cotacaoDolar = 4.80;
    let valorEmReais = valorEmDolar * cotacaoDolar;
    return valorEmReais;
}

alert(`${valorEmDolar} dólares equivalem a ${valorEmReais} reais.`);