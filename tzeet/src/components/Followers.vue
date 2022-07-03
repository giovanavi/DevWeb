<script>
export default {
    name: "Followers"
}
</script>


<template>
    <div class="row md-3">
        <div class="col">
            <div class="p-1 border bg-light tabela">
                <div class="users p-2 bg-light">
                    <span class="users"> Talvez você curta </span>
                    <table class="table table-borderless">
                        <thead>
                            <tr>
                                <th scope="col"> <img src="../assets/icone_azul.png">  </th>
                                <th scope="col"> <a href="#"> Carlos </a> </th>
                                <th scope="col"> <button type="button" class="btn btn-secondary btn-sm btn-follow"> Seguir </button></th>
                            </tr>
                            <tr>
                                <th scope="col"> <img src="../assets/icone_azul.png">  </th>
                                <th scope="col"> <a href="#"> João </a> </th>
                                <th scope="col"> <button type="button" class="btn btn-secondary btn-sm btn-follow"> Seguir </button></th>
                            </tr>
                            <tr>
                                <th scope="col"> <img src="../assets/icone_azul.png">  </th>
                                <th scope="col"> <a href="#"> Maria </a> </th>
                                <th scope="col"> <button type="button" class="btn btn-secondary btn-sm btn-follow"> Seguir </button></th>
                            </tr>
                        </thead>
                    </table>
                    <a href="" class="users"> Mostrar mais </a>
                </div>
            </div>
        </div>
    </div>      
</template>

<style scoped>

.users span{
    font-weight: 700;
    font-size: large;
}

.table img{
    margin-top: 10px;
    height: 48px;
}

.table a{
    margin-left: -10px;
    font-weight: lighter;
}

.tabela{
    border-radius: 10px;
}
.btn-secondary{
    font-weight: 500;
    height: 40px;
    border: 0;
    color: white;
    background-color: rgb(49, 108, 244);
}

.btn-follow{
    border-radius: 5px;
}

.btn-follow:hover{
    background-color: rgb(49, 108, 244);
}
</style>