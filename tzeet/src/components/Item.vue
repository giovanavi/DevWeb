<script>
import Modal from './Modal.vue'

export default{
    name: Item,
    components:{
        Modal
    }
}

</script>

<template>
    <div class="col-xs-12 col-sm-3 col-md-3 col-lg-2">
        <ul class="nav flex-column nav">  
            <li class="nav-item">
                <a class="nav-link logo" href="#"> <img src="../assets/tiziu.png"> </a> 
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#"> <img src="../assets/house-door.svg"> Home </a>
            </li>
            <li class="nav-item">
            <a class="nav-link" href="#"> <img src="../assets/hash.svg"> Explore </a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#"> <img src="../assets/bell.svg"> Notifications </a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#"> <img src="../assets/envelope.svg">  Messages </a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="profile.html"> <img src="../assets/person-fill.svg"> Profile </a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#"> <img src="../assets/three-dots.svg"> More </a>
            </li>
        </ul>
                
        <!-- Button trigger modal -->
        <button type="button" class="btn btn-primary btn-modal" data-bs-toggle="modal" data-bs-target="#exampleModal">
            Tzeet
        </button>

        <modal/>

    </div>
</template>

<style scoped>
.nav{
    justify-content: space-between;
}
.nav a{
    text-decoration: none;
    color: rgb(15, 20, 25);  
    font-weight: 500;
}

.logo img{
    height: 35px;
    color: rgb(29, 155, 240);
}

.btn-modal{
    width: 130px;
    height: 40px;
    border-radius: 50px;
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