<script>
import Home from './views/Home.vue';

export default{
  components:{
    Home
  }
}
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup

</script>

<template>

  <body>
    <router-view/>
  </body>

</template>

<style>

.no_bullet{/*retira o ponto da lista(ul)*/
    list-style-type: none;
}

.mediumAlert{
    color: rgb(255, 200, 0);
}

.maxAlert{
    color:  rgb(255, 0, 0);
}

</style>
