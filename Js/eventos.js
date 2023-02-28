const theme = document.querySelector(':root')
const buttonFont = document.querySelector('#buttonFont')
const main = document.querySelector('.main')

const trocaCor = ()=>{

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
}
const corDisponibilidade = (item)=>{
    
    item.addEventListener('mouseover', (ev)=>{
        if(item.dataset.value === ""){
            ev.currentTarget.style.backgroundColor = "rgb(146, 241, 135)"
        } else {
            ev.currentTarget.style.backgroundColor = "rgb(228, 99, 99)"
        }
    })
}

const voltarCorTema = (item)=>{
    item.addEventListener('mouseout', (ev)=>{
        if(main.dataset.theme === 'white'){
            ev.currentTarget.style.backgroundColor = "var(--bg-color)"
        } else{
            ev.currentTarget.style.backgroundColor = "var(--bg-color)"
        }
    })
}


export { voltarCorTema, corDisponibilidade, trocaCor}