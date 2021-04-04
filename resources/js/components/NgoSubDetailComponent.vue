<template>
	<div>
		
		<!-------- Header Section ------------------->
        <header-component></header-component>
        
		<div class="container mt-5 mb-5">
			<h4 class="poppins-medium-500"> Lorem ipsum dolor sit amet </h4>
			<div class="row">
				
				<div class="col-lg-8 col-sm-12">

						<img src="images/Home-Page-Images/Ngo-Images/portfolio-1.jpg" class="img-fluid">

					<div class="card mt-5">
						<div class="card-body">
							<h4 class="card-title poppins-medium-500">Lorem ipsum dolor sit amet</h4>
							<p class="card-text poppins-regular-400">Some example text some example text. John Doe is an architect and engineer Some example text some example text. John Doe is an architect and engineerSome example text some example text. John Doe is an architect and engineerSome example text some example text. John Doe is an architect and engineerSome example text some example text. John Doe is an architect and engineerSome example text some example text. John Doe is an architect and engineerSome example text some example text. John Doe is an architect and engineerSome example text some example text. John Doe is an architect and engineerSome example text some example text. John Doe is an architect and engineerSome example text some example text. John Doe is an architect and engineerSome example text some example text. John Doe is an architect and engineerSome example text some example text. John Doe is an architect and engineerSome example text some example text. John Doe is an architect and engineer</p>
							<h4 class="mt-4 mb-4"> Donate </h4>
							<router-link class="btn ml-3 btn-color" to="/payment-component"> Payment option 1 </router-link> 
							<!-- <button type="button" class="btn ml-3 btn-color">Payment option 1</button> -->
							<button type="button" class="btn ml-3 btn-color">Payment option 2</button>
							<button type="button" class="btn ml-3 btn-color">Payment option 3</button>
						</div>
					</div> 

					<div class="card mt-5">
						<div class="card-body">
							<h4 class="card-title"> Comments </h4>
						</div>
					</div> 



				</div>

				<div class="col-lg-4 col-sm-12">
					<h4> Compaigned By </h4>
					<div class="card">
						<div class="card-body">
							<div class="row mt-4">

									<div class="col-lg-3 col-sm-12">
										<img class="card-img-top rounded-circle" src="images/Home-Page-Images/Ngo-Images/portfolio-1.jpg">	
									</div>

									<div class="col-lg-9 col-sm-12">
										<h4> Rahul </h4>
										<p> $45000 </p>
									</div>

							</div>
						
						</div>
					</div>

					<div class="card mt-4">
						<div class="card-body">
							<h4 class="card-title"> Raised $45000 </h4>
							 	<div class="progress">
									<div class="progress-bar" style="width:50%; background-color:#F08423">50%</div>
								</div>
							<p class="card-text"> Goal $45000</p>

							<div class="container">
								<h4 class="mb-4"> Donate Now </h4>
								<div class="row">
									
									<div class="col-lg-4 col-sm-12">
										<select class="form-control">
											<option> $ </option>
											<option> INR </option>
										</select>
									</div>

									<div class="col-lg-8 col-sm-12">
										<input type="text" class="form-control">
									</div>
										
								</div>
								<button type="submit" class="form-control mt-2 mb-2 btn btn-outline-secondary btn-color"> Donate Now </button>
							</div>

							<div class="container-fluid">
								<button class="form-control mt-2 btn btn-outline-secondary bg-orange"> Raise Funds </button>
								<h4 class="text-center mt-4"> Top Donors </h4>

								<div class="row mt-5">

									<div class="col-lg-3 col-sm-12">
										<img class="card-img-top rounded-circle" src="images/Home-Page-Images/Ngo-Images/portfolio-1.jpg">	
									</div>

									<div class="col-lg-9 col-sm-12">
										<p> Rahul </p>
										<p> $45000 </p>
									</div>

								</div>

								<div class="row mt-5">

									<div class="col-lg-3 col-sm-12">
										<img class="card-img-top rounded-circle" src="images/Home-Page-Images/Ngo-Images/portfolio-1.jpg">	
									</div>

									<div class="col-lg-9 col-sm-12">
										<p> Rahul </p>
										<p> $45000 </p>
									</div>

								</div>

								<div class="row mt-5">

									<div class="col-lg-3 col-sm-12">
										<img class="card-img-top rounded-circle" src="images/Home-Page-Images/Ngo-Images/portfolio-1.jpg">	
									</div>

									<div class="col-lg-9 col-sm-12">
										<p> Rahul </p>
										<p> $45000 </p>
									</div>

								</div>


								<div class="row mt-5">

									<div class="col-lg-3 col-sm-12">
										<img class="card-img-top rounded-circle" src="images/Home-Page-Images/Ngo-Images/portfolio-1.jpg">	
									</div>

									<div class="col-lg-9 col-sm-12">
										<p> Rahul </p>
										<p> $45000 </p>
									</div>

								</div>


								<div class="row mt-5">

									<div class="col-lg-3 col-sm-12">
										<img class="card-img-top rounded-circle" src="images/Home-Page-Images/Ngo-Images/portfolio-1.jpg">	
									</div>

									<div class="col-lg-9 col-sm-12">
										<p> Rahul </p>
										<p> $45000 </p>
									</div>

								</div>

							</div>
						</div>
					</div>
				</div>

			</div>
		</div>

		<!--------------  Footer ---------------------------------------->
        <footer-component></footer-component>

	</div>
</template>
<style>
	
	.btn-color{
		background-color: #F08423;
		color:#ffff;
	}

	.btn-color:hover{
		color:#ffff;
	}

	.bg-orange{
		background-color: #F08423;
		color:#ffff;
	}

	.bg-orange:hover{
		background-color: #ffff;
		color: #F08423;
	}

</style>

<script>
	export default{
	}
</script>