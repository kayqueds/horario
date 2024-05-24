
function carregar(){
var agora = new Date()
var horaDia =  agora.getHours()
var minutoDia = agora.getMinutes()
var mensagem = document.getElementById('msg')
var ima = document.getElementById('ima')
var fundo =document.body
var titulo = document.getElementsByTagName('h1')[0]
mensagem.innerHTML = `Agora são ${horaDia} horas e ${minutoDia} minutos`


if(horaDia <12 && hora>=0){
    ima.src= './img/dia.jpg'
    titulo.innerHTML = `Bom dia!`
    fundo.style.backgroundColor = 'skyblue'

    
    
}
else if(horaDia <18){

fundo.style.backgroundColor = 'orange'
ima.src= './img/tarde.jpg'
titulo.innerHTML = `Boa tarde!`



}
else{
    fundo.style.backgroundColor = 'purple'
    ima.src = './img/noite.jpg'
    titulo.innerHTML = `Boa noite!`    
}

}