<script>
import Item from '../components/Item.vue'
import PersonalInfo from '../components/PersonalInfo.vue'
import Tzeet from '../components/Tzeet.vue'
import SearchBar from '../components/SearchBar.vue'
import Followers from '../components/Followers.vue'

export default{
    components: { 
        Item,
        PersonalInfo,
        Tzeet,
        SearchBar,
        Followers
    }
}

</script>

<template>
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    
    <div class="container">
      <div class="row">
        <item/>
        <div class="col-xs-11 col-sm-9 col-md-9 col-lg-7 border"> 
            <personal-info/>
            <tzeet/> 
        </div>
        <div class="d-none d-lg-block col-lg-3 ">
          <search-bar/>
          <followers/>
        </div>
      </div>
    </div>

</template>