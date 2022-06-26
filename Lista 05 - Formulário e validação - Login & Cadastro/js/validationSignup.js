window.onload= function(){

    //ELEMENTOS
const button = document.getElementById("btn-subscribe")
const name = document.getElementById("name")
const email = document.getElementById("email")
const password = document.getElementById("password")
const confirm = document.getElementById("passwordConfirm")

const daySelect = document.getElementById("selectDay")
const monthSelect = document.getElementById("selectMonth")
const yearSelect = document.getElementById("selectYear")
    
    //ATRIBUTOS
const months = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto',
'Setembro', 'Outubro', 'Novembro', 'Dezembro']

    //EVENTOS

    //FUNÇÕES
function popularMeses(){
    for(let i=0; i<months.length; i++){
        const option = document.createElement('option')
        option.textContent = months[i]
        monthSelect.appendChild(option)
    }
}
function popularDias(mes){
    //deleta todos os filhos do select day
    //se eles existirem
    while(daySelect.firstChild){
        daySelect.removeChild(daySelect.firstChild)
    }
    //guarda o número de dias do mês
    let dia

    if(mes==='Janeiro' || mes==='Março' || mes==='Julho' 
    || mes==='Agosto' || mes==='Outubro'|| mes==='Dezembro'){
        dia = 31
    }else if (mes==='Abril' || mes==='Junho' || mes==='Setembro' || mes==='Novembro'){
        dia = 30
    }else{
        
    }
    //Inserir o dia correto no select de dia
    for(let i=1; i<=dia; i++){
        const option = document.createElement('option')
        option.textContent = i
        daySelect.appendChild(option)
    }
}
function popularAnos(){
    //pegar o ano atual 
    let ano = new Date().getFullYear()
    
    //deixar alguns anos passados como options
    for(let i=0; i < 101; ano++){
        const option = document.createElement('option')
        option.textContent = ano - i
        yearSelect.appendChild(option)
    }
}

    //EVENTOS
    //button.addEventListener("click", function(){

    //})
popularMeses()
popularDias(monthSelect.value)
popularAnos()
}
