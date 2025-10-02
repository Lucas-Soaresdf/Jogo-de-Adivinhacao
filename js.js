// gera um número aleatório 
let numSecreto = Math.floor(Math.random() * 20) + 1;
let tentativasRestantes = 3; //tentativas
function verificar(){
    //pega o valor que o usuário digitou
    let palpite = Number(document.getElementById('palpite').value);
    let res = document.getElementById('res')
    let tentativas = document.getElementById('tentativas')
    if (tentativasRestantes > 0) {
 //verifica o palpite
    if (palpite === numSecreto){
        res.innerText = 'Parábens! você acertou!'
         fimDeJogo();
    } else if (palpite > numSecreto){
        res.innerText = 'O número secreto é menor!'
    } else {
        res.innerText = 'O número secreto é maior!'
    }
    tentativasRestantes--
    tentativas.innerText = 'Tentativas restantes:' + tentativasRestantes;
     
    if (tentativasRestantes === 0 && palpite !== numSecreto){
        res.innerText = 'Fim de jogo! O Número era ' + numSecreto;
        fimDeJogo();
    }
}
    }
    function fimDeJogo(){
        numSecreto = Math.floor(Math.random() * 20) + 1;
        tentativasRestantes = 3;
        document.getElementById('palpite').value = '';
        document.getElementById('res').innerText = '';
        document.getElementById('tentativas').innerText = '';
         document.getElementById("palpite").disabled = false;
      document.querySelector("button[onclick='verificar()']").disabled = false;
      document.getElementById("btnReiniciar").style.display = "none";

    }

   