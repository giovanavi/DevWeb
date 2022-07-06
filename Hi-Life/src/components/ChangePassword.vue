<template>
<div class="container">
	<div class="row">
		<div class="col-12">
            <div class="row g-5">
				<!-- change password -->
				<div class="col-mb-6">
					<div class="bg-secondary px-4 py-5 rounded">
						<div class="row g-3">
							<h4 class="my-4">Change Password</h4>
							<!-- Old password -->
							<div class="col-md-6">
								<label for="exampleInputPassword1" class="form-label">Old password *</label>
								<input type="password" class="form-control" id="exampleInputPassword1">
							</div>
							<!-- New password -->
							<div class="col-md-6">
								<label for="exampleInputPassword2" class="form-label">New password *</label>
								<input type="password" class="form-control" id="exampleInputPassword2">
							</div>
							<!-- Confirm password -->
							<div class="col-md-12">
							    <label for="exampleInputPassword3" class="form-label">Confirm Password *</label>
								<input type="password" class="form-control" id="exampleInputPassword3">
							</div>
						</div>
					</div>
				</div>
		    </div> <!-- Row END -->
            <div class="row g-3"> 
				<div class="d-md-flex justify-content-md-end">
					<button type="button" class="btn btn-danger btn-lg">Delete profile</button>
					<button type="button" class="btn btn-primary btn-lg">Update profile</button>
	    		</div>
			</div>
        </div>
    </div>
</div>
</template>