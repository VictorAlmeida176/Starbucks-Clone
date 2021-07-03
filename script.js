let balls = document.querySelector("balls")
let Quant = document.querySelectorAll('.slides .imagens')
let atual =0
let imagens = document.getElementById('atual')
let next = document.getElementById("next")
let voltar = document.getElementById("voltar")

for(let i=0;i<Quant.length;i++){
    var div = document.createElement('div')
    div.id=1
    balls.appendChild(div)
}

document.getElementById('0').classList.add("imgAtual")
let pos = document.querySelectorAll('.balls div')

for(let i=0;i<pos.length;i++){
    pos[i].addEventListener('click',function(){
        atual=pos[i]
        slide()
    })
}

voltar.addEventListener('click',()=>{
    atual--
    slide()
})

next.addEventListener("click",()=>{
    atual++
    slide()
})

function slide(){
    if(atual>=Quant.length){
        atual = 0
    }else if(atual<0){
        atual=Quant.length-1
    }
    document.querySelector('imgAtual').classList.remove("imgAtual")
    imagens.style.marginLeft= -100*atual+"vw"
    document.getElementById(atual).classList.add("imgAtual")
}
slide()
