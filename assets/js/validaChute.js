function verificaValidez(chute) {
    const numero = +chute;

    if(chuteInvalido(numero)) {
        if(chute.toUpperCase() === "GAME OVER" || chute.toUpperCase() === "FIM DE JOGO") {
            document.body.innerHTML = `
                <h1 class="titulo">Mondo-bummongo, dude, you wanna stop?</h1>
                <h2 class="informacao">But that's ok, you must be tired from all the fun we had</h2>
                <h2 class="informacao">If you wanna play again with your favorite turtle friendo again, just press the button, dude!</h2>
                <button id="jogar-novamente" class="btn__jogar">Wanna go again, dude?</button>
            `
            document.body.style.backgroundColor = "#0002A1";
        }
        
        elementoChute.innerHTML += `<div>Wait, dude... I mean, I'm no Donnie but that's no number I know!</div>`

        return;
    }

    if(numeroForaEscopo(numero)) {
        elementoChute.innerHTML += `
        <div>Wait a sec, lemme check with Donnie</div>
        <div>Bummer, man, that's not our number... Our number is between ${menorValor} and ${maiorValor}, but party on, dude!`

        return;
    }

    if(numero === numeroSecreto) {
        document.body.innerHTML = `
            <h1 class="titulo">C O W A B U N G A !</h1>
            <h2 class="informacao">You got it for real, dude! You're the most tubulous dude around, not even Master Splinter could guess it!</h2>
            <h2 class="informacao, box">${numeroSecreto}</h2>

            <button id="jogar-novamente" class="btn__jogar">Wanna go again, dude?</button>
        `
    }else if(numero < numeroSecreto) {
        elementoChute.innerHTML += `<div>Bummer, man... Our tubuloso number is higher <i class="fa-solid fa-arrow-up"></i></div>`
        return;
    } else {
        elementoChute.innerHTML += `<div>Bummer, man... Our tubuloso number is lower <i class="fa-solid fa-arrow-down"></i></div>`
        return;
    }
}

function chuteInvalido(numero) {
    return Number.isNaN(numero);
}

function numeroForaEscopo(numero) {
    return numero > maiorValor || numero < menorValor
}

document.body.addEventListener('click', e => {
    if(e.target.id == 'jogar-novamente') {
        window.location.reload();
    }
})
