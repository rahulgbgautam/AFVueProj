<template>
	<div>

		<!-------- Header Section ------------------->
        <header-component></header-component>

        <!------ Background Image  ------------------------>
            
        <bgimage-component></bgimage-component>

		
		<div class="container">

			<!-- <p class="text-center"> Sign Up With </p>

			<div class="text-center">
				<button> Facebook </button>
				<button> Google </button>   
			</div>  -->

			<form>

				<div class="row mt-4">

					<div class="col-lg-6 col-md-6 col-sm-12">
						<p class="col-lg-6 ml-auto" > I Am Raising Fund For</p>
					</div>

					<div class="col-lg-6 col-md-6 col-sm-12">
						<select id="Fund" class="form-control">
							<option>Medical</option>
							<option>something</option>
							<option>something ruble</option>
						</select>    
					</div> 

				</div>



				<div class="=form-group col-lg-12 col-sm-12 mt-4">
					<input type="text" class="form-control" placeholder="Full Name">
				</div>

				<div class="=form-group col-lg-12 col-sm-12 mt-4">
					<input type="text" class="form-control" placeholder="Email">
				</div>

				<div class="=form-group col-lg-12 col-sm-12 mt-4">
					<input type="text" class="form-control" placeholder="Phone No">
				</div>

				<div class="=form-group col-lg-12 col-sm-12 mt-4 mb-4">
					<input type="submit" class="form-control btn" value="Sign Up" id="btn-orange">
				</div>

			</form>

			<p class="text-center"> Already Have Account? <a href="https://www.google.com/" class="text-dark">Sign In</a> </p>

		</div>


		<!--------------  Footer ---------------------------------------->
        <footer-component></footer-component>
        

	</div>
</template>

<style>

	#btn-orange{
			background-color: #F08423;      
	}

</style>

<script>
	export default{

	}
</script>
