<script>
export default {
    name: "SignupForm"
}
</script>

<template>
<form class="row g-3 needs-validation" novalidate>
		<div class="row g-3">
			    <!-- First Name -->
			<div class="col-md-6">
				<label class="form-label">Nome completo</label>
				<input type="text" class="form-control" placeholder="" aria-label="First name" value="Scaralet">
			</div>
			    <!-- Email -->
			<div class="col-md-6">
				<label class="form-label">E-mail</label>
				<input type="email" class="form-control" placeholder="" aria-label="Last name" value="Doe">
			</div><!--Endereço-->
            <div class="col-md-5">
                <label for="" class="form-label">Cidade</label>
                <input type="text" class="form-control" id="email" placeholder="" required>
                <div class="invalid-feedback">
                    Informe um e-mail válido!
                </div>
            </div>
            <div class="col-md-5">
                <label for="" class="form-label">Rua</label>
                <input type="text" class="form-control" id="email" placeholder="" required>
                    <div class="invalid-feedback">
                        Informe um e-mail válido!
                    </div>
            </div>
            <div class="col-md-2">
                <label for="" class="form-label">Número</label>
                <input type="text" class="form-control" id="email" placeholder="" required>
                    <div class="invalid-feedback">
                        Informe um e-mail válido!
                    </div>
            </div><!--Data de nascimento-->
            <div class="row g-2">
                <div> 
                    <p>Data de nascimento</p> <!--ajustar a altura-->
                </div>
                <div class="col-md-4">
                    <label for="selectMonth">Mês</label>
                    <select class="form-select" id="month" required>
                        <option> </option>
                    </select>    
                        <div class="invalid-feedback">
                            Campo obrigatório
                        </div>
                </div>
                <div class="col-md-4">
                    <label for="selectMonth">Dia</label>
                    <select class="form-select" id="day" required>
                        <option> </option>
                    </select>    
                        <div class="invalid-feedback">
                            Campo obrigatório
                        </div>
                </div>
                <div class="col-md-4">
                    <label for="selectMonth">Year</label>
                    <select class="form-select" id="uear" required>
                        <option> </option>
                    </select>    
                        <div class="invalid-feedback">
                            Campo obrigatório
                        </div>
                </div>
            </div>
            <!--Senha-->
            <div class="col-md-5">
                <label for="" class="form-label">Senha</label>
                <input type="password" class="form-control" id="email" placeholder="" required>
                    <div class="invalid-feedback">
                        Informe um e-mail válido!
                    </div>
            </div>
            <!--Confirmação de senha-->
            <div class="col-md-5">
                <label for="" class="form-label">Confirmação de senha</label>
                <input type="password" class="form-control" id="email" placeholder="" required>
                    <div class="invalid-feedback">
                        Informe um e-mail válido!
                    </div>
            </div>
            <div class="col-12">
                <button id="btn-signup" class="btn btn-primary col-md-12" type="submit" disabled="true">Cadastrar</button>
            </div>
        </div>
</form>

</template>