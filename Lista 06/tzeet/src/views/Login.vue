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

    const button = document.getElementById("btn-login")
    const email = document.getElementById("email")
    const password = document.getElementById("password")


    document.addEventListener('keyup', function(){
        if(email.value.length > 0 && password.value.length > 0){
            button.disabled = false
        }else{
            button.disabled = true
        }
    })
}

export default{
    name: "Login"
}
</script>

<template>
    <head>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">     
    </head>
    <body>
        <!-- Modal -->
        <div class="modal fade in justify-content-center" id="MyModal" data-bs-backdrop="static" tabindex="-1">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-header justify-content-center">
                        <img src="../assets/tiziu.png">
                    </div>
                    <div class="modal-body">
                        <h5 class="card-title justify-content-center">Entre no Tzeet agora mesmo</h5>

                        <form class="row g-3 needs-validation" novalidate>
                        
                        <div class="form-floating mb-3" >
                            <input type="email" class="form-control" id="email" placeholder="email@email.com" required>
                            <label for="email">Email</label>
                            <div class="invalid-feedback">
                                Informe um e-mail válido!
                            </div>
                        </div>

                        <div class="form-floating">
                            <input type="password" class="form-control" id="password" placeholder="Senha" required>
                            <label for="password">Senha</label>
                            <div class="invalid-feedback">
                                Informe sua senha
                            </div>
                        </div>

                        <p> <a href="#" style="margin-left: 5px;">Esqueceu a senha?</a> </p>
                        <button id="btn-login" type="submit" class="btn btn-primary col-md-12" disabled> Entrar </button>
                        
                        <p class="card-text">Não tem uma conta? <a href="signup.html" class="card-link">Inscreva-se</a></p>
                            
                        </form>

                    </div>
                </div>
            </div>
        </div>
    </body>
</template>