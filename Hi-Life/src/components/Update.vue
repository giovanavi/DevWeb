<script>
import LoginForm from './LoginForm.vue';
import SignupForm from './SignupForm.vue';
export default {
    name: "Update",
    components: { LoginForm, SignupForm }
}

</script>


<template>
<div class="container">
	<div class="row">
		<div class="col-12">
			<!-- Page title -->
			<div class="my-5">
				<h3>Meu Perfil</h3>
				<hr>
			</div>
			<!-- Form START -->
			<form class="row g-3 needs-validation">
				<div class="row g-3">	
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
				</div>
				<!-- button -->
				<div class="row g-3"> 
					<div class="d-md-flex justify-content-md-end">
						<button type="button" class="btn btn-danger btn-lg">Delete profile</button>
						<button type="button" class="btn btn-primary btn-lg">Update profile</button>
					</div>
				</div>
			</form> <!-- Form END -->
		</div>
	</div>
</div>
</template>