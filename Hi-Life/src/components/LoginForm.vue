<script>
export default {
    name: "LoginForm",
}
</script>

<template>
<form class="row g-3 needs-validation" novalidate>
    <div class="bg-secondary g-5 px-4 py-5 rounded">
       <h2 class="text-center g-5 mb-5">Login</h2>
        <div class="mb-3 col-md-11">
            <label for="" class="form-label">Enter email or username*</label>
            <input type="email" class="form-control" :id="email" placeholder="jonedoe001@email.com">
            <div class="invalid-feedback">
                Informe um e-mail válido!
            </div>
        </div>
        <div class="mb-3 col-md-11">
            <label for="" class="form-label">Enter password*</label>
            <input type="password" class="form-control" :id="password" placeholder="Enter your number">
                <div class="invalid-feedback">
                    Informe sua senha
                </div>
        </div>
        <div class="mb-3 col-md-11">
            <p> <a href="#" style="margin-left: 5px;">Esqueceu a senha?</a> </p>
            <button id="btn-signup" class="btn btn-primary col-md-12" type="submit" disabled="true">Se inscrever</button>
            <p class="card-text">Não tem uma conta? <a href="#" class="card-link">Inscreva-se</a></p>
        </div>
    </div>
</form>

</template>

<style scoped>

</style>