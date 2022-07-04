<script>
export default{
    name: "PersonalInfo"
}

</script>
<template>
    <div id="personal-info">
        <img src="../assets/icone_azul.png">
        <div id="button"> 
            <button type="button" class="btn btn-primary btn-profile"> Editar Perfil </button>
        </div>

        
            <h2> Giovana Vieira </h2>
            <h4> @giovanavieira </h4>
            <p id="bib"> Sistemas de Informação - Universidade Federal do Ceará </p>
        

        <ul class="no_bullet origem">
            <li> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt" viewBox="0 0 16 16">
                <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z"/>
                <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                </svg> Senador Pompeu 
            </li>
            <li> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-calendar3" viewBox="0 0 16 16">
                <path d="M14 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM1 3.857C1 3.384 1.448 3 2 3h12c.552 0 1 .384 1 .857v10.286c0 .473-.448.857-1 .857H2c-.552 0-1-.384-1-.857V3.857z"/>
                <path d="M6.5 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
                </svg> Joined January 2022 
            </li>    
        </ul>
        <ul class="no_bullet origem">
            <li> <span>96 </span> following</li>
            <li> <span>70 </span> followers</li>
        </ul>
                    
        <ul class="no_bullet action">
            <li> <a class="nav-link item" href="#">Tzeets</a> </li> 
            <li> <a class="nav-link item" href="#">Tzeets & Replies</a></li>
            <li> <a class="nav-link item" href="#">Media</a></li>
            <li> <a class="nav-link item" href="#">Links</a></li>
        </ul>
    </div>
</template>

<style scoped>
h4{
    color : rgb(83, 100, 113);
    font-size:large;
}

li > span{
    color: black;
    font-weight: bold;
}

.nav{
    justify-content: space-between;
}
#button{
    float: right;
}

#bib{
    color: rgb(15, 20, 25);
    font-size: 20px;
}

#personal-info img{
    margin-top: 10px;
    height: 170px;
    width: 170px;
    display: flex;
}

.origem{/* ul do personal-info */
    color: rgb(83, 100, 113);
}

.origem li{
    display: inline;    
}

.origem img{
    width: 10px;
    height: 10px;
}
.action{
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
}

.action a:hover{
    color: black;
    background-color: rgba(15, 25, 20, 0.1);
}

.action p{
    font-weight: 450;
}

.item{
    color: black;
    font-weight: 500;
}

.item:hover{
    background-color: rgb(83, 100, 113);
    color: blue;
    text-decoration: none;
}
</style>