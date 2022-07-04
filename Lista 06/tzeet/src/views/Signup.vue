<script>
(function () {
        'use strict'

        // Fetch all the forms we want to apply custom Bootstrap validation styles to
        var forms = document.querySelectorAll('.needs-validation')

        // Loop over them and prevent submission
        Array.prototype.slice.call(forms)
          .forEach(function (form) {
            form.addEventListener('submit', function (event) {
              if (!form.checkValidity()) {
                event.preventDefault()
                event.stopPropagation()
              }

              form.classList.add('was-validated')
            }, false)
          })
      })()

window.onload = function(){

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



export default {
    name:"Signup"
}

</script>

<template>
<head>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">     
</head>
<body>
    <div class="container" role="main">
            <!-- Modal -->
        <div class="modal fade in" id="MyModal" data-bs-backdrop="static" tabindex="-1">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-header justify-content-start">
                        <h5 class="card-title">Criar conta</h5>
                        <a href="login.html" class="btn-close"></a>
                    
                    </div>
                
                    <div class="modal-body">  
                        <form class="row g-3 needs-validation" novalidate>
                    
                            <div class="form-floating mb-3">  
                                <input id="name" type="text" class="form-control" placeholder="Nome:" required>
                                <label for="name" class="form-label">Nome:</label>
                                <div class="invalid-feedback">
                                    Por favor digite seu nome 
                                </div>
                            </div>
                            <div class="form-floating mb-3">  
                                <input id="email" type="email" class="form-control" placeholder="Email" required>
                                <label for="email" class="form-label">Email:</label>
                                <div class="invalid-feedback">
                                    Informe um e-mail válido
                                </div>
                            </div>
                            <div class="form-floating mb-3">  
                                <input id="password" type="password" class="form-control" placeholder="Senha:" required minlength="6">
                                <label for="password" class="form-label">Senha:</label>
                                <div id="validationPass" class="invalid-feedback">
                                    Senha é obrigatória e deve ter pelo menos 6 caracteres
                                </div>
                            </div>
                            <div class="form-floating mb-3">  
                                <input id="passwordConfirm" type="password" class="form-control" placeholder="Confirmação da Senha" required minlength="6">
                                <label for="passwordConfirm" class="form-label">Confirmação da Senha:</label>
                                <div id="validationPass" class="invalid-feedback">
                                    Senha é obrigatória e deve ter pelo menos 6 caracteres
                                </div>
                            </div>
                        
                            <div>
                                <p><strong>Data de nascimento</strong></p> <!--ajustar a altura-->
                                <h6>Isso não será exibido publicamente. Confirme sua própria idade, mesmo se 
                                    esta conta for de empresa, de um animal de estimação ou outros. </h6>                
                            </div>

                            <div class="row g-2">
                                <div class="form-floating col-md-4">
                                    <select class="form-select" id="month" required>
                                        <option> </option>
                                    </select>
                                    <label for="selectMonth">Mês</label>
                                    <div class="invalid-feedback">
                                        Campo obrigatório
                                    </div>
                                </div>

                                <div class="form-floating col-md-4">
                                    <select class="form-select" id="day" required>
                                        <option> </option>
                                    </select>
                                    <label for="selectDay">Dia</label>
                                    <div class="invalid-feedback">
                                        Campo obrigatório
                                    </div>
                                </div>

                                <div class="form-floating col-md-4">
                                    <select class="form-select" id="year" required>
                                        <option> </option>
                                    </select>
                                    <label for="selectYear">Ano</label>
                                    <div class="invalid-feedback">
                                        Campo obrigatório
                                    </div>
                                </div>

                            </div>

                            <div class="form-check" style="margin-left: 8px;" > <!--ajustar o checkbox a esquerda-->
                                <input class="form-check-input" type="checkbox" id="notifications">
                                <label class="form-check-label" for="notificacoes">
                                    Receba e-mails sobre sua atividade no Twitter e recomendações
                                </label>
                            </div>   
                        
                            <div clas="form-check" style="margin-left: 7px;">
                                <label class="form-check-label" for="form-check">
                                Você concorda com nossos Termos, com a Política de Privacidade e com o Uso de Cookies?
                                </label>
                            
                                <div class="form-check-inline mb-3">
                                    <input type="radio" class="form-check-input" name="inlineRadioOptions" id="radioYes">
                                    <label class="form-check-label" for="radioYes">Sim</label>
                                </div>
                                <div class="form-check-inline mb-3" >
                                    <input type="radio" class="form-check-input" name="inlineRadioOptions" id="radioNo">
                                    <label class="form-check-label" for="radioNo">Não</label>
                                    <div class="invalid-feedback"></div>
                                </div>
                            </div>
                            
                            <div class="col-12">
                                <button id="btn-signup" class="btn btn-primary col-md-12" type="submit" disabled="true">Se inscrever</button>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </div>               
    </div>        
</body>
</template>