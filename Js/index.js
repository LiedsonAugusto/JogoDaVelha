import { diagonais, empate, horizontal, vertical } from "./decisoesDoJogo.js"
import { corDisponibilidade, trocaCor, voltarCorTema } from "./eventos.js"

const jogador = document.querySelector('.jogador')
const theme = document.querySelector(':root')
const itens = document.querySelectorAll('.itens')
const buttonTheme = document.querySelector('.themeButton')
const buttonFont = document.querySelector('#buttonFont')
const main = document.querySelector('.main')

let rodada = 1

buttonTheme.addEventListener('click', trocaCor)

document.querySelectorAll('.itens').forEach(corDisponibilidade)

document.querySelectorAll('.itens').forEach(voltarCorTema)

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
        testVencedor()
        trocaJogador()
    })
})

function trocaJogador(){
    rodada % 2 === 0 ? jogador.textContent = "Jogador O" : jogador.textContent = "Jogador X"
}

function testVencedor(){
    
    if(horizontal() || vertical() || diagonais()){
        confirm(`Vencedor: ${jogador.textContent}`)
        rodada = 1
        itens.forEach(x => {
            x.textContent = ""
            x.dataset.value = ""
        })
    } else {
        if(empate()){
            confirm('Empate!')
            rodada = 1
            itens.forEach(x => {
                x.textContent = ""
                x.dataset.value = ""
        })
        }
    }
}