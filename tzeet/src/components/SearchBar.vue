<script>
export default {
    name: "SearchBar"
}
</script>

<template>
    <div class="input-group mb-3">
        <div class="input-group-text" id="search-addon">  
            <img src="../assets/search.svg">
        </div>
            <input type="text" class="form-control" placeholder="Username" aria-label="Username" 
                    aria-describedby="search-addon">
    </div>

</template>

<style scoped>
.input-group{
    margin-top: 20px;
}
.input-group-text{
    background-color: rgb(239, 243, 244);
    border-radius: 50px;
}
.form-control{
    background-color:  rgb(239, 243, 244);
    border-radius: 50px;
}


</style>