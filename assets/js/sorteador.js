const menorValor = 10;
const maiorValor = 1000;

const numeroSecreto = geradorRandom();

function geradorRandom () {
    return parseInt(Math.random() * maiorValor + 1)
}

console.log(numeroSecreto)

const elementoMenorValor = document.getElementById('numero-menor');
elementoMenorValor.innerHTML = menorValor;

const elementoMaiorValor = document.getElementById('numero-maior');
elementoMaiorValor.innerHTML = maiorValor;
