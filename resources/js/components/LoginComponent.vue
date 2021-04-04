<template>
	<div>

		<!-------- Header Section ------------------->
        <!-- <header-component></header-component> -->


        <!-------- ############# Pre Header ################################ ------------>

        <preheader-component></preheader-component>

        <!------ Background Image  ------------------------>
            
        <bgimage-component></bgimage-component>

		<div class="container">
			<br>
			<!-- Nav tabs -->
			<ul class="nav nav-pills" role="tablist">
				<li class="nav-item">
					<a class="nav-link active tabbtn" data-toggle="pill" href="#home"> Register As a Donor </a>
				</li>
				<li class="nav-item">
					<a class="nav-link tabbtn" data-toggle="pill" href="#menu1"> Register As a Beneficiary </a>
				</li>
				<li class="nav-item">
					<a class="nav-link tabbtn" data-toggle="pill" href="#menu2"> Register As a Astrologer </a>
				</li>
				<li class="nav-item">
					<a class="nav-link tabbtn" data-toggle="pill" href="#login"> Login </a>
				</li>
			</ul>

			<!-- Tab panes -->
			<div class="tab-content">
				
				<div id="home" class="container tab-pane active"><br>

					<donorform-component></donorform-component>

				</div>

				<div id="menu1" class="container tab-pane fade"><br>
					
					<beneficiaryform-component></beneficiaryform-component>

				</div>

				<div id="menu2" class="container tab-pane fade"><br>
					
					<astrologerform-component></astrologerform-component>

				</div>


				<div id="login" class="container tab-pane fade"><br>
					
					<div class="container">

						<!-- <p class="text-center"> Sign In With </p>

						<div class="text-center">
							<button> Facebook </button>
							<button> Google </button>   
						</div>  -->

						<div class="d-flex justify-content-center">

							<div class="col-lg-6">	

								<form>

									<div class="row mt-4">

										<div class="col-xl-12 col-lg-12 col-md-12 col-sm-12">
											<label> Email Id</label>
											<input type="text" name="" class="form-control">
										</div>

									</div>


									<div class="row mt-4">

										<div class="col-xl-12 col-lg-12 col-md-12 col-sm-12">
											<label> Phone No </label>
											<input type="text" name="" class="form-control">
										</div>

									</div>


									<div class="row mt-4">

										<div class="col-xl-6 col-lg-6 col-md-6 col-sm-12"> 
											<a href="#">Forgot Password</a> 
										</div>

										<div class="col-xl-6 col-lg-6 col-md-6 col-sm-12">
											<input type="submit" name="" class="btn btn-orange mt-3 mb-5" value="login">
										</div>

									</div>


								</form>

							</div>

						</div>



						<p class="text-center"> Don't have an Account? <router-link class="text-dark" to="/signup-component"> Sign Up </router-link> </p>

					</div>


				</div>


			</div>
		</div>

		<!--------------  Footer ---------------------------------------->
        <footer-component></footer-component>

	</div>
</template>

<style scoped>

	.tabbtn{

		width: 15rem;
		margin-left: 2rem;

	}


	#btn-orange{
			background-color: #F08423;      
	}

	.nav-pills .nav-link.active{

		color: #fff;
		background-color: #F08423;

	}

	a{
		color: sienna;
	}


</style>

<script>
	export default{

	}
</script>