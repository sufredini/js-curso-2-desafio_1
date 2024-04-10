let numero = parseFloat(prompt("informe um numero"))
let fatorial = calcularFatorial(numero);
function calcularFatorial(numero) {
    if (numero === 0 || numero === 1) {
        return 1;
    } else {
        let resultado = 1;
        let contador = 2;
        while (contador <= numero) {
            resultado *= contador;
            contador++;
        }
        return resultado;
    }
}

alert(`O fatorial de ${numero} é ${fatorial}`);