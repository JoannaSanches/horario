function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var min = data.getMinutes()
    msg.innerHTML = `Agora são ${hora} horas e ${min} minutos`

    if(hora >= 0 && hora < 12) {
    //Bom Dia!
        img.src = 'img/manha.jpg'
        document.body.style.background = '#c5d8e8'
    } else if(hora >= 12 && hora <= 18) {
        //Boa Tarde!
        img.src = 'img/tarde.jpg'
        document.body.style.background = '#eb6b44'
    } else {
        //Boa Noite!
        img.src = 'img/noite.jpg'
        document.body.style.background = '#0d0a30'
    }
}
