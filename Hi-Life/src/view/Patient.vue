<script>
import Update from '../components/Update.vue'
import ChangePassword from '../components/ChangePassword.vue'
import SearchBar from '../components/SearchBar.vue'
import DoctorCard from '../components/DoctorCard.vue'

export default {
    name:"Patient",
    data(){
        return{

        }
    },
    components:{
        Update,
        ChangePassword,
        SearchBar,
        DoctorCard
    }
}

</script>
<template>
    <body>
        <div class="container">
            <div class="row ">
                <div class="col mb-4">
                    <SearchBar></SearchBar>
                    <DoctorCard></DoctorCard>
                </div>
            </div>
        </div>
    </body>   
</template>

<style scoped>
.row{
    padding-top: 40px;

}
</style>