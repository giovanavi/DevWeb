<script>
export default {
    name: "Tzeet"
}
</script>

<template>
    <div class="row">
        <div class="col-12 border">
            <div class="publi">
                <div id="tzeet">    
                    <p id="tweet-perfil">  Pessoa Aleatória  <span>@pesaleatoria Jan 26, 2022 </span> </p>
                    <p id="tweet"> Tweet da pessoa (dsjbdabsdjabsjdbasbdjasbdjasb dajskdkjas dh
                        dasjkdbaskjbdkasjdjsahd asa dshas dhkjsahdssd hasjkdhksa ddsh)
                    </p>
                </div>

                <ul class="no_bullet action2"> 
                    <li><a class="nav-link item" href="#"> <img src="../assets/chat.svg"> 200 </a></li> 
                    <li><a class="nav-link item" href="#"> <img src="../assets/arrow-repeat.svg"> 100</a></li>
                    <li><a class="nav-link item" href="#"> <img src="../assets/heart.svg"> 120</a></li>
                    <li><a class="nav-link item" href="#"> <img src="../assets/upload.svg"> </a></li>
                </ul>
                                
            </div>
                        
        </div>
    </div> 
</template>

<style scoped>
.publi span{
    color: rgb(83, 100, 113);
}

#tweet-perfil{
    margin-left: 5px;
}

#tzeet{
    font-weight: 480;
}

.action2{
    margin-left: -30px;
    display: flex;
    justify-content: space-evenly;
}

.action2 a:hover{
    color: rgb(83, 100, 113);
}
</style>