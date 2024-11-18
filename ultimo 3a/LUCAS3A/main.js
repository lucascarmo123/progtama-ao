let nomeUsuário= '';
let elemento=document.querySelector('#nome_usuário');
while(nomeUsuário==''){
    nomeUsuário=prompt('Qual é o seu nome?');
}
if(nomeUsuário==null){
    elemento.textContent='Seja muito bem-vindo';
} else {
    elemento.textContent=nomeUsuário;
}