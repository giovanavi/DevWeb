window.onload= function(){

    console.log("modal")

    const texto = document.getElementById("textmodal")
    const cont = document.getElementById("charModal")
    const button = document.getElementById("envioModal") 

    texto.addEventListener("keyup", contaCaracteres)

    function contaCaracteresModal(e){
    
        const inputSize = texto.value.length;
        const inputMax = 140;
        
        if(inputSize > 0 && inputSize < 100){
            cont.innerHTML = '<span id="charModal">' + (inputMax - inputSize) + '</span>';
            button.disabled = false;
        }else if(inputSize >= 100 && inputSize <= 140){
            cont.innerHTML = '<span id="charModal" class="mediumAlert">' + (inputMax - inputSize) + '</span>';
            button.disabled = false;
        }else if(inputSize > inputMax){
            cont.innerHTML = '<span id="charModal" class="maxAlert">' + (inputMax - inputSize) + '</span>';
            button.disabled = true;
        }else{
            cont.innerHTML = '<span id="char" > </span>';
            button.disabled = true;
        }

    }

}
