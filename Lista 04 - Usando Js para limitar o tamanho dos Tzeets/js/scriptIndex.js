window.onload= function(){

    console.log("index")

    const texto = document.getElementById("textarea")
    const cont = document.getElementById("char")
    const button = document.getElementById("envioTexto") 

    const textoModal = document.getElementById("textmodal")
    const contModal = document.getElementById("charModal")
    const buttonModal = document.getElementById("envioModal") 

    texto.addEventListener("keyup", contaCaracteresIndex)
    textoModal.addEventListener("keyup", contaCaracteresModal)

    function contaCaracteresIndex(e){

        const inputSize = texto.value.length;
        const inputMax = 140;
        
        if(inputSize > 0 && inputSize <= 100){
            cont.innerHTML = '<span id="char">' + (inputMax - inputSize) + '</span>';
            button.disabled = false;
        }else if(inputSize > 100 && inputSize <= 140){
            cont.innerHTML = '<span id="char" class="mediumAlert">' + (inputMax - inputSize) + '</span>';
            button.disabled = false;
        }else if(inputSize > inputMax){
            cont.innerHTML = '<span id="char" class="maxAlert">' + (inputMax - inputSize) + '</span>';
            button.disabled = true;
        }else{
            cont.innerHTML = '<span id="char" > </span>';
            button.disabled = true;
        }

    }

    function contaCaracteresModal(e){
    
        const inputSize = textoModal.value.length;
        const inputMax = 140;
        
        if(inputSize > 0 && inputSize <= 100){
            contModal.innerHTML = '<span id="charModal">' + (inputMax - inputSize) + '</span>';
            buttonModal.disabled = false;
        }else if(inputSize > 100 && inputSize <= 140){
            contModal.innerHTML = '<span id="charModal" class="mediumAlert">' + (inputMax - inputSize) + '</span>';
            buttonModal.disabled = false;
        }else if(inputSize > inputMax){
            contModal.innerHTML = '<span id="charModal" class="maxAlert">' + (inputMax - inputSize) + '</span>';
            buttonModal.disabled = true;
        }else{
            contModal.innerHTML = '<span id="charModal" > </span>';
            buttonModal.disabled = true;
        }

    }

}
