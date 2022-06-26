window.onload = function(){
    //TUDO OK
    const myModal = new bootstrap.Modal('#MyModal', {
        keyboard: false
    })
    myModal.show()

    const button = document.getElementById("btn-login")
    const email = document.getElementById("email")
    const password = document.getElementById("password")


    document.addEventListener('keyup', function(){
        console.log(email.value)
        console.log(password.value)

        if(email.value.length > 0 && password.value.length > 0){
            button.disabled = false
        }else{
            button.disabled = true
        }
    })
}