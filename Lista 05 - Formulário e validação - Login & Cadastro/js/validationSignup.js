window.onload = function(){

    // VALIDAR DATAS - FINALIZAR STYLE - VERIFICAR SENHAS IGUAIS
    
    // CHECAR ENUNCIADO DA QUESTÃO PARA VER SE ESTÁ TUDO OK
    //MODAL
    const myModal = new bootstrap.Modal('#MyModal', {
        keyboard: false
    })
    myModal.show()


    const button = document.getElementById("btn-signup")
    const checkbox = document.getElementById("radioYes")
    
    //EVENTOS
    document.addEventListener('change', function() {
        if (checkbox.checked) {
            button.disabled = false;
        } else {
            button.disabled = true;
        }
    })
    

//DATA

    const yearSelect = document.getElementById("year");
    const monthSelect = document.getElementById("month");
    const daySelect = document.getElementById("day");
    
    const months = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 
    'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
    
    
    (function populateMonths(){
        for(let i = 0; i < months.length; i++){
            const option = document.createElement('option');
            option.textContent = months[i];
            monthSelect.appendChild(option);
        }
    })();
    
    let previousDay;
    
    function populateDays(month){
    
        while(daySelect.firstChild){
            daySelect.removeChild(daySelect.firstChild);
        }
        
        let dayNum;
        
        let year = yearSelect.value;
    
        if(month === 'Janeiro' || month === 'Março' || 
        month === 'Maio' || month === 'Julho' || month === 'Agosto' 
        || month === 'Outubro' || month === 'Dezembro') {
            dayNum = 31;
        } else if(month === 'Abril' || month === 'Junho' 
        || month === 'Setembro' || month === 'Novembro') {
            dayNum = 30;
        }else{
            if(new Date(year, 1, 29).getMonth() === 1){
                dayNum = 29;
            }else{
                dayNum = 28;
            }
        }
        
        for(let i = 1; i <= dayNum; i++){
            const option = document.createElement("option");
            option.textContent = i;
            daySelect.appendChild(option);
        }
        

        if(previousDay){
            daySelect.value = previousDay;
            if(daySelect.value === ""){
                daySelect.value = previousDay - 1;
            }
            if(daySelect.value === ""){
                daySelect.value = previousDay - 2;
            }
            if(daySelect.value === ""){
                daySelect.value = previousDay - 3;
            }
        }
    }
    
    function populateYears(){
        
        let year = new Date().getFullYear();
        
        for(let i = 0; i < 101; i++){
            const option = document.createElement("option");
            option.textContent = year - i;
            yearSelect.appendChild(option);
        }
    }
    
    populateDays(monthSelect.value);
    populateYears();
    
    yearSelect.onchange = function() {
        populateDays(monthSelect.value);
    }
    monthSelect.onchange = function() {
        populateDays(monthSelect.value);
    }
    daySelect.onchange = function() {
        previousDay = daySelect.value;
    }    


}

