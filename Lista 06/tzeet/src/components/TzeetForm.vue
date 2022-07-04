<script>
export default {
    name: "TzeetForm"
}
</script>

<template>
    <div class="d-flex flex-row col-sm-12 col-md-12 col-lg-12">
        <div class="align-items-center"> 
            <h5>HOME</h5>
            <img src="../assets/icone_azul.png">
        </div>
        <div class="d-flex flex-column flex-fill col-md-12 col-sm-9 col-xs-11 border">
            <div class="text">
                <div class="p-2 border col-sm-12 col-md-12 col-lg-12">
                    <form name="envio_tzeet">
                        <textarea class="textarea" id="textarea" placeholder="O que você está pensando?" 
                                rows="2" cols="50"></textarea>  
                    </form>
                </div>
            </div>
                        
            <div class="reply">
                <div class="p-2 reply border">
                    <a href="#"> <img src="../assets/search.svg">Everyone can Reply </a>
                </div>
            </div>
                        
            <div class="d-flex flex-row justify-content-between multimidia">
                <div class="flex-row multimidia">
                    <a href="#"> <img src="../assets/card-image.svg"> </a> 
                    <a href="#"> <img src="../assets/filetype-gif.svg"> </a> 
                    <a href="#"> <img src="../assets/emoji-smile.svg"> </a>
                    <a href="#"> <img src="../assets/bar-chart.svg"> </a> 
                    <a href="#"> <img src="../assets/calendar-event.svg"> </a> 
                    <a href="#"> <img src="../assets/geo-alt.svg"> </a> 
                </div>
                
                <div class="flex-row">
                                    
                    <div class="p-2">
                                        
                        <span id="char" class="char"> </span>
                        <span>|</span>
                        <a href="#"> <img src="../assets/plus-circle.svg"> </a>
                                        
                        <button value="Enviar" id="envioTexto" class="btn btn-primary me-md-2 btn-envio" disabled> Enviar</button>
                                        
                    </div>

                </div>

            </div>
        </div>
    </div>
    
</template>

<style scoped>

.d-flex{
    padding-top: 20px;
    padding-bottom: 5px;
}

.d-flex img{
    height: 64px;
    width: 64px;
}

.text{
    padding-top: 30px;
}

.textarea{
    resize: none;
    border: none;
}

.reply img{
    width: 18px;
    height: 18px;
} 

.reply a{
    text-decoration: none;
    color: black;
    font-weight: 500;
}

.reply a:hover{
    color: black;
    border-radius: 50px;
    background-color: rgb(29, 155, 240);
}

.multimidia{
    justify-content: space-evenly;
    
    padding-left: 8px;   
}

.multimidia img{
    justify-content: space-around;
    height: 18px;
    width: 18px;
}

.multimidia a{
    text-decoration: none;
}

.multimidia a:hover{
    background-color: rgb(29, 155, 240);
    border-radius: 50px;
}


.mult li{
    display: inline-flex;
    justify-content:  space-evenly;
}

.btn-envio{
    border: none;
    background-color: rgb(102, 174, 216);
    border-radius: 50px;
}

.btn-envio:hover{
    background-color: rgb(49, 108, 244);
}
</style>