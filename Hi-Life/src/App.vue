<script>
import Login from './view/Login.vue'
import Signup from './view/Signup.vue'
import NavBar from './components/NavBar.vue'
import Footer from './components/Footer.vue'
import Home from './view/Home.vue'
import Update from './components/Update.vue'
import Patient from './view/Patient.vue' 

export default{
  components:{
    Login,
    Signup,
    NavBar,
    Footer,
    Home,
    Patient
} 
}

</script>

<template>
  <head>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor" crossorigin="anonymous">
  </head>
  <body>
    <NavBar></NavBar>

    <Signup/>

    <Footer></Footer>   
  </body>
</template>

<style>

</style>
