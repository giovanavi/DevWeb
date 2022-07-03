<script>
import Item from '../components/Item.vue'
import TzeetForm from '../components/TzeetForm.vue'
import Tzeet from '../components/Tzeet.vue'
import SearchBar from '../components/SearchBar.vue'
import Followers from '../components/Followers.vue'

export default {
    components:{
        Item, 
        TzeetForm,
        Tzeet,
        SearchBar,
        Followers
    },
}
</script>

<template>

<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    <div class="container">
      <div class="row">
        <Item/>
        <div class="col-xs-11 col-sm-9 col-md-9 col-lg-7 border"> 
          <TzeetForm/>
          <Tzeet/> 
        </div>
        <div class="d-none d-lg-block col-lg-3 ">
          <SearchBar/>
          <Followers/>
        </div>
      </div>
    </div>
</template>