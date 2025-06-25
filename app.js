let numerosJaSorteados= [];
let numeroSecreto = numeroAleatorio();
console.log (`${numeroSecreto}`);
let tentativa= 1;

let palavraTentativa = tentativa > 1 ? 'tentativas':'tentativa';
//let titulo = document.querySelector ("h1")
//titulo.innerHTML = "jogo Do Numero Secreto"
//
//let textoParagrafo = document.querySelector ('p')
//textoParagrafo.innerHTML = 'Escolha um numero entre 1 e 10'
let outraPalavraTentativas = `voce ganhou com ${tentativa} ${palavraTentativa}`;
function exibirNaTela (tag, texto) {

let campo = document.querySelector (tag);
campo.innerHTML = texto};
function exibirMensagemInicial(){
exibirNaTela  ("h1", "jogo do numero secreto");
exibirNaTela ("p", "escolha um numero de 1 a 10");
}
exibirMensagemInicial();

function verificarChute() {
console.log ("botao funciono");
let chute = document.querySelector("input").value;
console.log(chute==numeroSecreto);
let outraPalavraTentativas = `voce ganhou com ${tentativa} ${palavraTentativa}`;



if (chute == numeroSecreto) { 
    exibirNaTela ("h1", "voce acertou ");
exibirNaTela ("p", `${outraPalavraTentativas} `);
 document.getElementById("reiniciar").removeAttribute ("disabled");
 limparCampo();
}
else{
if(chute > numeroSecreto) { 
exibirNaTela ("p", "o numero secreto e menor");
limparCampo();

}

else {
    exibirNaTela ("p", "o numero secreto e maior");

limparCampo();

}
tentativa++
}
}
function numeroAleatorio () {
    let numeroEscolhido =parseInt(Math.random ()*10 + 1);
    if (numerosJaSorteados.includes(numeroEscolhido)){

    return numeroAleatorio;

    }else{
        numerosJaSorteados.push(numeroEscolhido);
        return numeroEscolhido;
    }
    
        
 
}
if(numerosJaSorteados== 10){
     numerosJaSorteados = [];
 }
    
function limparCampo(){
    chute = document.querySelector("input");
    chute.value = "";};
    

function botaoReiniciarJogo(){
    numeroSecreto=numeroAleatorio();
    tentativa=1;
    limparCampo();
    exibirMensagemInicial();
    document.getElementById("reiniciar").setAttribute ("disabled",true);
}
