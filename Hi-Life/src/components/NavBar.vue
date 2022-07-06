<script>
export default{
  name: "Navbar",
}

</script>


<template>
<nav class="navbar navbar-expand-lg bg-dark">
    <div class="container-fluid">
        <a class="navbar-brand" href="#">
            <img src="" alt="" width="30" height="24" class="d-inline-block align-text-top">
        </a>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav">
                <li class="nav-item">
                        <a href="#" class="nav-link" aria-current="page">Home</a>
                </li>
                <li class="nav-item">
                        <a href="#" class="nav-link">Médicos</a>
                </li>
                <li class="nav-item">
                        <a href="#" class="nav-link">Pacientes</a>
                </li>
                <li class="nav-item">
                        <a href="#" class="nav-link">Login</a>
                </li>
                <li class="nav-item">
                        <a href="#" class="nav-link">Cadastre-se</a>
                </li>
            </ul>
        </div>
    </div>
</nav>
</template>

<style scoped>
.nav-bg{
    height: 70px;
}
.nav-item{
    font-size: large;
}
.nav-link{
    color: aliceblue;
}
</style>