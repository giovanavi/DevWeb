window.onload = function(){
    
    //VARIAVEIS
    let tipoViagem = ["Internacional", "Nacional", "Interestadual", "Intermunicipal", "Municipal"]
    let custoViagem = [5000, 500, 150, 50, 25]
    let saldoAtual = 20000
    let viagens = 0
    let gastos = 0
    let custoTotal = 0

    //ELEMENTOS
    const saldo = document.getElementById("saldo")
    const viagem = document.getElementById("viagem")
    const transporte = document.getElementById("transporte") //TRANSPORTE
    const tipo = document.getElementById("tipo") // TIPO DE VIAGEM
    const checkBox = document.getElementById("idaEVolta") // CHECKBOX
    const btn = document.getElementById("btn-enviar") //BOTÃO

    //EVENTOS

    //EVENTO DO BOTÃO
    btn.addEventListener('click', enviar) 
    //TIPO DE TRANSPORTE
    transporte.addEventListener('change', changeTransporte) 
    //CHECKBOX
    checkBox.addEventListener('change', function(){
        let checkbox = checkBox.checked
    })

    //FUNÇÕES
    function enviar(){

        let trans = transporte.options[transporte.selectedIndex].value
        let type = tipo.options[tipo.selectedIndex].value
        let check = checkBox.checked //TRUE OR FALSE
        
        let indexTipo = tipoViagem.indexOf(type)
        let custo = custoViagem[indexTipo]
        
        if(check){
            custo = custo*2
        }
        
        if(saldoAtual >= custo){
            gastos = 0
            gastos = gastos+custo
            custoTotal = custoTotal+gastos
            saldoAtual = saldoAtual-custo
            viagens = viagens+1

            attValores(saldoAtual, viagens, custoTotal)
            changeTable(gastos)
        }else{
            alert("O seu saldo é insuficiente para comprar essa passagem")
            btn.disabled = true;
        }

    }

    //ATUALIZA OS VALORES EM TELA
    function attValores(saldoAtual,viagens,custoTotal){

        saldo.innerHTML = ' Saldo atual: '+saldoAtual
        viagem.innerHTML = ' Total de viagens: '+viagens+' -  '+custoTotal+' pontos gastos'

    }

    //MUDA A TABELA 
    function changeTable(gastos){
        let linha = document.getElementById("corpo")


        let trans = transporte.options[transporte.selectedIndex].value
        let type = tipo.options[tipo.selectedIndex].value
        let check = checkBox.checked

        if(check == true){
            tabela = '<tr id=titulos> <th>'+trans+' </th> <th> '+type+' </th> <th> Sim </th> <th> '+gastos+' </th> </tr>'
            linha.innerHTML += tabela
        }else{
            tabela = '<tr id=titulos> <th>'+trans+' </th> <th> '+type+' </th> <th> Não </th> <th> '+gastos+' </th> </tr>'
            linha.innerHTML += tabela      
        }
    }

    //MUDA O SELECT DO TIPO DE VIAGEM DE ACORDO COM O TIPO DE TRANSPORTE
    function changeTransporte(){
        let optionValue = transporte.options[transporte.selectedIndex].value
          
    
        if(optionValue == "Avião"){
            let options = '<option value="Internacional"> Internacional </option>'
            options += '<option value="Nacional"> Nacional </option>'
            tipo.innerHTML = options 
        }else if(optionValue == "Ônibus"){
            let options = '<option value="Interestadual"> Interestadual </option>'
            options += '<option value="Intermunicipal"> Intermunicipal </option>'
            options += '<option value="Municipal"> Municipal </option>'
            tipo.innerHTML = options 
        }else{
            let options = ''
            tipo.innerHTML = options
        }
    
    }

}