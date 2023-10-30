let pontuacao
pontuacao = parseFloat(0)

function VerificarResposta() {
    let respostaCerta
    respostaCerta = document.getElementById("alternativacerta").checked

    if (respostaCerta == true) {
        alert("Parabéns!!!\nVocê Acertou.")
    } else {
        alert("Que pena, não foi dessa vez.")
    }
}