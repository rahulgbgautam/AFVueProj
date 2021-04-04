<template>
	<div>
	
 	<div class="container">

			<div class="d-flex justify-content-center">

			<div class="col-lg-6">	

			<form @submit.prevent="SubmitDonorForm">

				<div class="row mt-5">

					<div class="col-xl-6 col-lg-6 col-md-6 col-sm-12">
						
						<label> First Name</label>
						<input type="text" name="" class="form-control" required>

					</div>
					
					<div class="col-xl-6 col-lg-6 col-md-6 col-sm-12">
						
						<label> Last Name</label>
						<input type="text" name="" class="form-control" required>

					</div>

				</div>

				<div class="row mt-4">

					<div class="col-xl-12 col-lg-12 col-md-12 col-sm-12">
						<label> Mobile Number</label>
						<input type="text" name="" class="form-control" required>
					</div>

				</div>

				<div class="row mt-4">

					<div class="col-xl-12 col-lg-12 col-md-12 col-sm-12">
						<label> Email Id</label>
						<input type="text" name="" class="form-control" required>
					</div>

				</div>

				<div class="row mt-4">

					<div class="col-xl-12 col-lg-12 col-md-12 col-sm-12">
						<label> Country </label>
						<select class="form-control" required>
							<option>India</option>
							<option>USA</option>
							<option>China</option>
						</select>  
					</div>

				</div>

				<div class="row mt-4">

					<div class="col-xl-12 col-lg-12 col-md-12 col-sm-12">
						<label> Aadhar Number(Optional)</label>
						<input type="text" name="" class="form-control">
					</div>

				</div>


				<div class="row mt-3">

					<div class="col-xl-12 col-lg-12 col-md-12 col-sm-12">
						<label> Enter Password:</label>
						<input type="text" name="" class="form-control" required>
					</div>

				</div>

				<div class="row mt-3">

					<div class="col-xl-12 col-lg-12 col-md-12 col-sm-12">
						<label> Re-Enter your Password:</label>
						<input type="text" name="" class="form-control" required>
					</div>

				</div>

				

				<div class="row mt-4">

					<div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 d-flex justify-content-end">
						<input type="submit" name="" class="btn btn-orange mt-3 mb-5">
					</div>

				</div>


			</form>

			</div>

		</div>

		</div>


	</div>
</template>

<style>

	.btn-orange{
			background-color: #F08423;
			color: #ffff;      
	}

</style>

<script>
	export default{

	}
</script>
