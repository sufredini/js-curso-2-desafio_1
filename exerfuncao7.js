let peso = parseFloat(prompt("informe seu peso"));
let altura = parseFloat(prompt("informe sua altura"));

function calcularIMC(parAltura, parPeso) {
  
    let imc = parPeso / (parAltura * parAltura);
    return imc.toFixed(2); 
}

    let imc = calcularIMC(altura, peso);
    alert(`o IMC é ${imc}`);