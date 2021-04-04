<template>
	<div>
		
		<div class="mw-100">
			
			<nav class="navbar navbar-expand-sm bg-light navbar-light fixed-top" style="height: 4.7rem;">

								<!-- Brand -->
							<a class="navbar-brand" :href="url">
								<img src="images/logo/Asset 4.png" alt="logo" style="height: 60px;width: 120px;">
							</a>

						<button class="btn" id="ss-donate-btn" data-toggle="modal" data-target="#myModal"> Donate Now </button>

				<!-- Toggler/collapsibe Button -->
				<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar" aria-expanded="false">
					<span class="navbar-toggler-icon"></span>
				</button>

				<!-- Links -->
				<!-- Navbar links -->
				<div class="collapse navbar-collapse" id="collapsibleNavbar">
					<ul class="navbar-nav ml-auto">

						<!-- Dropdown -->
						<li class="nav-item active dropdown">
							
							<!-- <a class="nav-link dropdown-toggle" :href="url" id="navbardrop" data-toggle="dropdown">
								Home
							</a> -->

							<router-link class="nav-link dropdown-toggle" to="/" id="navbardrop" data-toggle="dropdown"> <span class="material-icons">home</span></router-link>

							<div class="dropdown-menu" id="dropshow">
								
								<router-link class="dropdown-item" to="/aboutus-component"> About Us </router-link>

								<router-link class="dropdown-item" to="/ourmission-component"> Our Initiative </router-link>
								
								<router-link class="dropdown-item" to="/ourteam-component"> Our Team </router-link>

								<router-link class="dropdown-item" to="/"> Annual Reports </router-link>

								<router-link class="dropdown-item" to="/"> Awards Recognitions </router-link>

							</div>
						</li>

						<li class="nav-item dropdown">

							<router-link class="nav-link dropdown-toggle" to="/beneficiary-component" id="navbardrop" data-toggle="dropdown"> Beneficiary </router-link>


							<div class="dropdown-menu" id="dropshow">

								<li class="nav-link dropdown dropright"> 

									<a class="dropdown-item dropdown-toggle" href="#" data-toggle="dropdown"> Individual </a> 

									<ul class="dropdown-menu" id="dropsubshow">

										<router-link class="dropdown-item" to="/"> Link1 </router-link>

										<router-link class="dropdown-item" to="/"> Link2 </router-link>
								
										<router-link class="dropdown-item" to="/"> Link3 </router-link>

									</ul>

								</li>


								<li class="nav-link dropdown dropright"> 

									<a class="dropdown-item dropdown-toggle" href="#" data-toggle="dropdown"> NGO </a> 

									<ul class="dropdown-menu" id="dropsubshow">

											<li class="nav-link dropdown dropright" id="droprightnext"> 

												<a class="dropdown-item dropdown-toggle" href="#" data-toggle="dropdown"> Education </a> 

												<ul class="dropdown-menu" id="dropsubsubshow">

													<router-link class="dropdown-item" to="/ourmission-component"> Link1 </router-link>

													<router-link class="dropdown-item" to="/"> Link2 </router-link>
								
													<router-link class="dropdown-item" to="/"> Link3 </router-link>

												</ul>

											</li>

										<li class="nav-link dropdown dropright" id="droprightnext"> 

											<a class="dropdown-item dropdown-toggle" href="#" data-toggle="dropdown"> Health </a> 

												<ul class="dropdown-menu" id="dropsubsubshow">

													<router-link class="dropdown-item" to="/ourmission-component"> Link1 </router-link>

													<router-link class="dropdown-item" to="/"> Link2 </router-link>
								
													<router-link class="dropdown-item" to="/"> Link3 </router-link>

												</ul>

										</li>

										<li class="nav-link dropdown dropright" id="droprightnext"> 

											<a class="dropdown-item dropdown-toggle" href="#" data-toggle="dropdown"> Skill Developement </a> 

											<ul class="dropdown-menu" id="dropsubsubshow">

												<router-link class="dropdown-item" to="/ourmission-component"> Link1 </router-link>

												<router-link class="dropdown-item" to="/"> Link2 </router-link>
								
												<router-link class="dropdown-item" to="/"> Link3 </router-link>

											</ul>

										</li>


										<li class="nav-link dropdown dropright" id="droprightnext"> 

											<a class="dropdown-item dropdown-toggle" href="#" data-toggle="dropdown"> Horticulture </a> 

											<ul class="dropdown-menu" id="dropsubsubshow">

												<router-link class="dropdown-item" to="/ourmission-component"> Link1 </router-link>

												<router-link class="dropdown-item" to="/"> Link2 </router-link>
								
												<router-link class="dropdown-item" to="/"> Link3 </router-link>

											</ul>

										</li>


										<li class="nav-link dropdown dropright" id="droprightnext"> 

											<a class="dropdown-item dropdown-toggle" href="#" data-toggle="dropdown"> Animal Husbandary </a> 

											<ul class="dropdown-menu" id="dropsubsubshow">

												<router-link class="dropdown-item" to="/ourmission-component"> Link1 </router-link>

												<router-link class="dropdown-item" to="/"> Link2 </router-link>
								
												<router-link class="dropdown-item" to="/"> Link3 </router-link>

											</ul>

										</li>


										<li class="nav-link dropdown dropright" id="droprightnext"> 

											<a class="dropdown-item dropdown-toggle" href="#" data-toggle="dropdown"> Village Developement </a> 

											<ul class="dropdown-menu" id="dropsubsubshow">

												<router-link class="dropdown-item" to="/ourmission-component"> Link1 </router-link>

												<router-link class="dropdown-item" to="/"> Link2 </router-link>
								
												<router-link class="dropdown-item" to="/"> Link3 </router-link>

											</ul>

										</li>


										<li class="nav-link dropdown dropright" id="droprightnext"> 

											<a class="dropdown-item dropdown-toggle" href="#" data-toggle="dropdown"> Others </a> 

											<ul class="dropdown-menu" id="dropsubsubshow">

												<router-link class="dropdown-item" to="/ourmission-component"> Link1 </router-link>

												<router-link class="dropdown-item" to="/"> Link2 </router-link>
								
												<router-link class="dropdown-item" to="/"> Link3 </router-link>

											</ul>

										</li>



									</ul>

								</li>

							</div>
						</li>


						<li class="nav-item dropdown">
							<a class="nav-link dropdown-toggle" href="#" id="navbardrop" data-toggle="dropdown">
								Get Involved
							</a>
							<div class="dropdown-menu" id="dropshow">
								<a class="dropdown-item" href="#">Anubhav</a>
								<a class="dropdown-item" href="#">Partner with us</a>
								<a class="dropdown-item" href="#">volunteer</a>
							</div>
						</li>


						<li class="nav-item dropdown">
							
							<router-link class="nav-link dropdown-toggle" to="/latestupdate-component" id="navbardrop" data-toggle="dropdown"> Latest Updates </router-link>


							<div class="dropdown-menu" id="dropshow">
								<a class="dropdown-item" href="#">Media Coverage</a>
								<a class="dropdown-item" href="#">#</a>
								<a class="dropdown-item" href="#">#</a>
							</div>
						</li>


						<li class="nav-item dropdown">
							<!-- <a class="nav-link dropdown-toggle" href="#" id="navbardrop" data-toggle="dropdown">
								Donor
							</a> -->

							<router-link class="nav-link dropdown-toggle" to="/donor-component" id="navbardrop" data-toggle="dropdown"> Donor </router-link>


							<div class="dropdown-menu" id="dropshow">
								<router-link class="dropdown-item" to="/donor-component"> Individual </router-link>
								<a class="dropdown-item" href="#">small corporate / Trust</a>
								<a class="dropdown-item" href="#">Big corporate</a>
							</div>
						</li>

						<li class="nav-item">
							<router-link class="nav-link" to="/astrology-component"> Astrology </router-link>
						</li>

						<li class="nav-item">
							<router-link class="nav-link" to="/contactus-component">  Contact Us </router-link>
						</li>

						<li class="nav-item">
							<a class="nav-link btn" data-toggle="modal" data-target="#myModal" href="#" id="donate-now">Donate Now</a>
						</li>

						<li class="nav-item">
							<input type="" name="search" placeholder=" search " class="form-control">
						</li>

						<li class="nav-item">
							<router-link class="nav-link" to="/login-component"> Login / Registration </router-link>
						</li>
						   
					</ul>
				</div>
			
			</nav>


			<!-- Modal -->
    <div class="modal fade" id="myModal" role="dialog">
        <div class="modal-dialog modal-lg">

            <!-- Modal content-->
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close float-right" data-dismiss="modal">&times;</button>
                </div>
                <div class="modal-body">
                    <h4 class="text-center mb-4">Donate Now</h4>
                    <form>
                        <div class="row">
                            
                            <div class="col-lg-6 col-md-6 col-sm-12">
                                <div class="form-group">
                                    <label for="Country"> Select Country</label>
                                    <select class="form-control" id="Country" required>
			                            <option>India</option>
			                            <option>USA</option>
			                            <option>United Kingdom</option>
			                            <option>Japan</option>
			                            <option> Nepal </option>
                            		</select>
                                </div>
                            </div>

                            <div class="col-lg-6 col-md-6 col-sm-12">
                                <div class="form-group">
                                    <label for="Currency"> Select Currency </label>
                                    <select class="form-control" id="Currency" required>
			                            <option>INR</option>
			                            <option>Euro</option>
			                            <option>Pound</option>
			                            <option>Japanese yen</option>
			                            <option>Nepalese rupee</option>
                            		</select>
                                </div>
                            </div>

                        </div>

                        <div class="row"> 

                        	<div class="col-xl-6 col-lg-6 col-md-6 col-sm-12">
						
								<label>Name</label>
								<input type="text" name="" class="form-control">

							</div>
					
							<div class="col-xl-6 col-lg-6 col-md-6 col-sm-12">
						
								<label> Email </label>
								<input type="text" name="" class="form-control">

							</div>

                        </div>

                        <div class="row mt-3"> 

                        	<div class="col-xl-6 col-lg-6 col-md-6 col-sm-12">
						
								<label>Mobile No</label>
								<input type="text" name="" class="form-control">

							</div>
					
							<div class="col-lg-6 col-md-6 col-sm-12">
                                <div class="form-group">
                                    <label for="Currency"> Choose The Initiative </label>
                                    <select class="form-control" id="Currency" required>
			                            <option>Health Care</option>
			                            <option>Education</option>
			                            <option>Both</option>
                            		</select>
                                </div>
                            </div>

                        </div>


                        <div class="row mt-3">           
					
							<div class="col-lg-6 col-md-6 col-sm-12">
                                <div class="form-group">
                                    <label for="Currency"> Donation Amount </label>
                                    <select class="form-control" id="Currency" required>
			                            <option class="btn btn-outline-danger">500</option>
			                            <option class="btn btn-outline-danger">1000</option>
			                            <option class="btn btn-outline-danger">2000</option>
			                            <option class="btn btn-outline-danger">3000</option>
			                            <option class="btn btn-outline-danger">4000</option>
			                            <option class="btn btn-outline-danger">5000</option>
			                            <option class="btn btn-outline-danger">10000</option>
                            		</select>
                                </div>
                            </div>

                            <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12">
						
								<label>Or Enter Your Own Amount</label>
								<input type="text" name="" class="form-control">

							</div>

                        </div>
                       
                        <button type="submit" class="btn btn-danger form-control mt-4 mb-2 col-sm-12" style="background-color: #F08423;"> Next </button>
                    </form>

                </div>
        
            </div>

        </div>
    </div>

		</div>

	</div>
</template>

<style scoped>
	

	div#dropshow {
    	/*margin-top: 0.6rem;*/
    	border-style: none;

	}
	
	.dropdown-toggle::after{
		display: none;
	}

	.dropdown:hover #dropshow{
		display: block;
	}

	.dropright:hover #dropsubshow{
		display: block;
	}

	#droprightnext:hover #dropsubsubshow{
		display: block;
	}


	.navbar-light .navbar-nav .nav-link{
    	color: #F08423;
	}

	.navbar-light .navbar-nav .nav-link:hover{
    	color: sienna;
	}


	.dropdown-item {
    display: block;
    width: 100%;
    padding: .25rem 1.5rem;
    clear: both;
    font-weight: 400;
    color: #F08423;
    text-align: inherit;
    white-space: nowrap;
    background-color: #ffff;
    border: 0;
	}

	.dropdown-item:hover{
		color: sienna;
	}


/*	.navbar-nav li.active > a{
		background-color: rgb(101, 62, 60);
		color: rgb(101, 62, 60);
		
	}*/


	.dropright .dropdown-menu {
	    top: 0;
	    right: auto;
	    left: 100%;
	    margin-top: 0;
	    margin-left: 0.03rem;

	}

	#dnone{
		display: none;
	}

	.noshow > router-link{
		display: none;
	}

	.navbar-nav *{

		font-size: 1.1rem;
	}

	.navbar-nav li{

		margin-left: 0.8rem;
	}
	
	@media(min-width: 1024px){

		#donate-now{
				background-color: #F08423;
				color:#ffff;
				border-radius: 20px;
				width: 148px;
		}

		#ss-donate-btn{
				display: none;

		}

	}


	@media(min-width:769px) and (max-width: 1023px){

		#donate-now{
				background-color: #F08423;
				color:#ffff;
				border-radius: 20px;
				width: 107px;

		}

		#ss-donate-btn{
				display: none;
			
		}

	}



	@media(min-width:576px) and (max-width: 768px){

		#donate-now{
				background-color: #F08423;
				color:#ffff;
				border-radius: 20px;
				width: 107px;
				margin-top: 5px;
		}

		#ss-donate-btn{
				display: none;
			
		}

	}


	@media(max-width: 575px){

		#donate-now{
				display: none;
		}

		#ss-donate-btn{
				background-color: #F08423;
				color:#ffff;
				border-radius: 20px;
				width: 120px;
				margin-left: 120px;
		}

	}


</style>

<script>

	export default{



	data() {
    return {
      url: $("meta[name=url]").attr("content"),
    };
  },

  mounted(){

  			// alert(this.url);

  			$(document).ready(function(){

				$('.navbar-nav a').on( 'click', function () {
				$( '.navbar-nav' ).find( 'li.active' ).removeClass( 'active' );
				$( this ).parent( 'li' ).addClass( 'active' );

			});	



		});

		// $('.nav>li').click(function(){
		// 	    $('.active').toggleClass("active");
		// 	    $(this).toggleClass("active");
		// })  			
			
	}

	// $(document).ready(function(){
		
	// 	$('.navbar-nav a').on( 'click', function () {
	// 		$( '.navbar-nav' ).find( 'li.active' ).removeClass( 'active' );
	// 		$( this ).parent( 'li' ).addClass( 'active' );
	// 	});

	// });	

}

</script>