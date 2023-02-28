const jogador = document.querySelector('.jogador')
const theme = document.querySelector(':root')
const itens = document.querySelectorAll('.itens')
const buttonTheme = document.querySelector('.themeButton')
const buttonFont = document.querySelector('#buttonFont')
const main = document.querySelector('.main')

let rodada = 1
let condicaoDeEmpate = false

buttonTheme.addEventListener('click', (ev)=>{

    if(main.dataset.theme === 'white'){
        theme.style.setProperty('--bg-color', 'rgb(44, 44, 44)')
        theme.style.setProperty('--ft-color', 'white')
        theme.style.setProperty('--tb-color', 'white')
        buttonFont.textContent = 'white theme'
        main.dataset.theme = 'black'

    } else {    
        theme.style.setProperty('--bg-color', 'white')
        theme.style.setProperty('--ft-color', 'black')
        theme.style.setProperty('--tb-color', 'black')
        buttonFont.textContent = 'dark theme'
        main.dataset.theme = 'white'
    }
})

document.querySelectorAll('.itens').forEach((item)=>{
    
    item.addEventListener('mouseover', (ev)=>{
        if(item.dataset.value === ""){
            ev.currentTarget.style.backgroundColor = "rgb(146, 241, 135)"
        } else {
            ev.currentTarget.style.backgroundColor = "rgb(228, 99, 99)"
        }
    })
})

document.querySelectorAll('.itens').forEach((item)=>{
    item.addEventListener('mouseout', (ev)=>{
        if(main.dataset.theme === 'white'){
            ev.currentTarget.style.backgroundColor = "var(--bg-color)"
        } else{
            ev.currentTarget.style.backgroundColor = "var(--bg-color)"
        }
    })
})

document.querySelectorAll('.itens').forEach(function(item){
    item.addEventListener('click', ()=>{
        if(item.dataset.value === ""){
            if(rodada % 2 === 1){
                item.dataset.value = 'X'
                item.textContent = 'X'
            } else {
                item.dataset.value = 'O'
                item.textContent = 'O'
            }
            rodada++
        }
        testVencedor(item)
        trocaJogador()
    })
})

function trocaJogador(){
    rodada % 2 === 0 ? jogador.textContent = "Jogador O" : jogador.textContent = "Jogador X"
}

function testVencedor(item){
    if(horizontal() || vertical() || diagonais() || empate()){
        if(condicaoDeEmpate){
            confirm('Empate!')
        } else {
            confirm(`Vencedor: ${jogador.textContent}`)
        }
        rodada = 1
        condicaoDeEmpate = false
        itens.forEach(x => {
            x.textContent = ""
            x.dataset.value = ""
        })
    }
}

function horizontal(){
    for(let i  = 0; i < 9; i+=3){
        if(itens[i].innerHTML === ""){
            continue
        } else {
            if((itens[i].innerHTML === itens[i+1].innerHTML) && (itens[i+1].innerHTML === itens[i+2].innerHTML)){
                console.log('oi')
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
    condicaoDeEmpate = true
    return true
}