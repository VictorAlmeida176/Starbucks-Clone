const slide = document.querySelector(".slides")
const next =document.querySelector("#next")
const back = document.querySelector("#voltar")
const imagens = document.querySelectorAll(".imagens")
let index = 0
const bolas=document.querySelectorAll(".bolas")

    function proxSlide(n){
    mostraSlide(index+=n)
         
     }   




function slideAtual(n){
    mostraSlide(index=n)
}

function mostraSlide(n){
    let i ;
    // Verificar se a posição atual é maior que a quantidade de imagens
    if(n>imagens.length){
       
        index=1
        
    }

     // Verificar se a posição atual é menor que a quantidade de imagens

    if(n<1){
        index=imagens.length   
    }
    
    // Retirar de tela todas as imagens que não estão selecionadas
    for(i=0; i<imagens.length; i++){
        imagens[i].style.display = "none"
    }

    // Retirar os estilos das bolas não selecionadas
    for(i=0; i<bolas.length; i++){
        bolas[i].className = bolas[i].className.replace(" imgAtual","")
    }

    // Apresentar em tela a imagem selecionada
    imagens[index-1].style.display = "block"

    // Acrescentar estilo na img selecionada
    bolas[index-1].className += " imgAtual"
}