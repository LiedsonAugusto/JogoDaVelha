const itens = document.querySelectorAll('.itens')
let condicaoDeEmpate = false

function horizontal(){
    for(let i  = 0; i < 9; i+=3){
        if(itens[i].innerHTML === ""){
            continue
        } else {
            if((itens[i].innerHTML === itens[i+1].innerHTML) && (itens[i+1].innerHTML === itens[i+2].innerHTML)){
                return true
            }
        }
    }
    return false
}

function vertical(){
    for(let i = 0; i < 3; i++){
        if(itens[i].innerHTML === ""){
            continue
        } else {
            if((itens[i].innerHTML === itens[i+3].innerHTML) && (itens[i+3].innerHTML === itens[i+6].innerHTML)){
                return true
            }
        }
    }
    return false
}

function diagonais(){
    if(itens[0].innerHTML !== ""){
        if((itens[0].innerHTML === itens[4].innerHTML) && (itens[4].innerHTML === itens[8].innerHTML)){
            return true
        }
    }
    if(itens[2].innerHTML !== ""){
        if((itens[2].innerHTML === itens[4].innerHTML) && (itens[4].innerHTML === itens[6].innerHTML)){
            return true
        }
    }
    return false
}

function empate(){
    for(let i = 0; i < 9; i++){
        if(itens[i].innerHTML === ""){
            return false
        }
    }
    return true
}

export {horizontal, vertical, diagonais, empate}