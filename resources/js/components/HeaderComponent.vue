<template>
	<div>
		
		<div class="mw-100">
			
			<nav class="navbar navbar-expand-lg navbar-light" style="height: 4.7rem; background-color: #ffff!important">

								<!-- Brand -->
							<a class="navbar-brand" :href="url">
								Logo
							</a>


						<!------ ############## these will show only on specific size ################## --->

							<!-- <ul class="navbar-nav" id="lg-noshow">

								<li class="nav-item">
									
									<button class="openBtn" v-on:click="openSearch" style="background-color: #ffff!important"> <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
									width="24" height="24"
									viewBox="0 0 172 172"
									style=" fill:#000000;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g fill="#e67e22"><path d="M73.45833,21.5c-28.63214,0 -51.95833,23.32621 -51.95833,51.95833c0,28.63212 23.32619,51.95833 51.95833,51.95833c12.38529,0 23.77079,-4.37509 32.71191,-11.64583l35.15446,35.15446c1.34815,1.40412 3.35005,1.96971 5.23364,1.47866c1.88359,-0.49105 3.35456,-1.96202 3.84561,-3.84561c0.49105,-1.88359 -0.07455,-3.88549 -1.47866,-5.23364l-35.15446,-35.15446c7.27074,-8.94112 11.64583,-20.32663 11.64583,-32.71191c0,-28.63212 -23.32619,-51.95833 -51.95833,-51.95833zM73.45833,32.25c22.82242,0 41.20833,18.38593 41.20833,41.20833c0,11.11769 -4.38529,21.16215 -11.49886,28.56169c-0.43849,0.32229 -0.8255,0.7093 -1.14779,1.14779c-7.39953,7.11357 -17.44399,11.49886 -28.56169,11.49886c-22.82242,0 -41.20833,-18.38593 -41.20833,-41.20833c0,-22.8224 18.38591,-41.20833 41.20833,-41.20833z"></path></g></g></svg>
									</button>


								</li>

								<li class="nav-item">
									
									<button class="btn" id="ss-donate-btn" data-toggle="modal" data-target="#myModal"> Donate Now </button>

								</li>

							</ul> -->

						<!-- 	<button class="openBtn xl-noshow lg-noshow" v-on:click="openSearch" style="background-color: #ffff!important"> <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
								width="24" height="24"
								viewBox="0 0 172 172"
								style=" fill:#000000;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g fill="#e67e22"><path d="M73.45833,21.5c-28.63214,0 -51.95833,23.32621 -51.95833,51.95833c0,28.63212 23.32619,51.95833 51.95833,51.95833c12.38529,0 23.77079,-4.37509 32.71191,-11.64583l35.15446,35.15446c1.34815,1.40412 3.35005,1.96971 5.23364,1.47866c1.88359,-0.49105 3.35456,-1.96202 3.84561,-3.84561c0.49105,-1.88359 -0.07455,-3.88549 -1.47866,-5.23364l-35.15446,-35.15446c7.27074,-8.94112 11.64583,-20.32663 11.64583,-32.71191c0,-28.63212 -23.32619,-51.95833 -51.95833,-51.95833zM73.45833,32.25c22.82242,0 41.20833,18.38593 41.20833,41.20833c0,11.11769 -4.38529,21.16215 -11.49886,28.56169c-0.43849,0.32229 -0.8255,0.7093 -1.14779,1.14779c-7.39953,7.11357 -17.44399,11.49886 -28.56169,11.49886c-22.82242,0 -41.20833,-18.38593 -41.20833,-41.20833c0,-22.8224 18.38591,-41.20833 41.20833,-41.20833z"></path></g></g></svg>
							</button>



							<button class="btn xl-noshow lg-noshow" data-toggle="modal" data-target="#myModal" id="ss-donate-btn"> Donate Now </button> -->

				


						<!------ ############## ################################### ################## --->

				<!-- Toggler/collapsibe Button -->
				<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
					<span class="navbar-toggler-icon"></span>
				</button>

				<!-- Links -->
				<!-- Navbar links -->
				<div class="collapse navbar-collapse" id="collapsibleNavbar">
					<ul class="navbar-nav ml-auto">

						<!-- Dropdown -->
						<li class="nav-item dropdown mr-1">

							<router-link class="nav-link dropdown-toggle" to="/" id="navbardrop" data-toggle="dropdown"> <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
							width="20" height="20"
							viewBox="0 0 172 172"
							style=" fill:#000000;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g fill="#e67e22"><path d="M86,14.19336l-78.90332,73.23438l7.30665,7.89453l7.09668,-6.59278v61.77051h53.75v-53.75h21.5v53.75h53.75v-61.77051l7.09668,6.59278l7.30665,-7.89453zM86,28.80665l53.75,49.9707v60.97266h-32.25v-53.75h-43v53.75h-32.25v-60.97266z"></path></g></g></svg>
							</router-link>

							<div class="dropdown-menu" id="dropshow">
								
								<router-link class="dropdown-item" to="/aboutus-component"> About Us </router-link>

								<router-link class="dropdown-item" to="/ourmission-component"> Our Initiative </router-link>
								
								<router-link class="dropdown-item" to="/ourteam-component"> Our Team </router-link>

								<router-link class="dropdown-item" to="/annualreports-component"> Annual Reports </router-link>

								<router-link class="dropdown-item" to="/awardsrecognitions-component"> Awards Recognitions </router-link>

							</div>
						</li>

						<li class="nav-item dropdown mr-1">

							<router-link class="nav-link dropdown-toggle" to="/beneficiary-component" id="navbardrop" data-toggle="dropdown"> Beneficiary </router-link>


							<div class="dropdown-menu" id="dropshow">

								<li class="nav-link dropdown dropright"> 

									<router-link class="dropdown-item dropdown-toggle" data-toggle="dropdown" to="/individual-component"> Individual </router-link>

									<!-- <a class="dropdown-item dropdown-toggle" href="#" data-toggle="dropdown"> Individual </a>  -->

									<ul class="dropdown-menu" id="dropsubshow">

										<router-link class="dropdown-item" to="/"> Link1 </router-link>

										<router-link class="dropdown-item" to="/"> Link2 </router-link>
								
										<router-link class="dropdown-item" to="/"> Link3 </router-link>

									</ul>

								</li>

								<li class="nav-link dropdown dropright mr-3"> 

									<router-link class="dropdown-item dropdown-toggle" data-toggle="dropdown" to="/ngodetail-component"> NGO </router-link>


									<!-- <a class="dropdown-item dropdown-toggle" href="#" data-toggle="dropdown"> NGO </a>  -->

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


						<li class="nav-item dropdown mr-1">
							<a class="nav-link dropdown-toggle" href="#" id="navbardrop" data-toggle="dropdown">
								Get Involved
							</a>
							<div class="dropdown-menu" id="dropshow">
								
								<router-link class="dropdown-item" to="/greenbyanubhav-component"> Green By Anubhav </router-link>
								<router-link class="dropdown-item" to="/partnerwithus-component"> Partner With Us </router-link>
								<router-link class="dropdown-item" to="/volunteer-component"> Volunteer</router-link>
								
							</div>
						</li>


						<li class="nav-item dropdown mr-1">
							
							<router-link class="nav-link dropdown-toggle" to="/latestupdate-component" id="navbardrop" data-toggle="dropdown"> Latest Updates </router-link>


							<div class="dropdown-menu" id="dropshow">
								<router-link class="dropdown-item" to="/mediacoverage-component"> Media Coverage </router-link>

								<!-- <a class="dropdown-item" href="#">Media Coverage</a> -->
								<a class="dropdown-item" href="#">#</a>
								<a class="dropdown-item" href="#">#</a>
							</div>
						</li>


						<li class="nav-item dropdown mr-1">
						
							<router-link class="nav-link dropdown-toggle" to="/donor-component" id="navbardrop" data-toggle="dropdown"> Donor </router-link>


							<div class="dropdown-menu" id="dropshow">
								<router-link class="dropdown-item" to="/donor-component"> Individual </router-link>
								<a class="dropdown-item list-group-item list-group-item-action list-group-item-color" id="list-profile-list" data-toggle="list" href="#list-profile" role="tab" aria-controls="profile">Small Corporate / Trust</a>
								<a class="dropdown-item list-group-item list-group-item-action list-group-item-color" id="list-messages-list" data-toggle="list" href="#list-messages" role="tab" aria-controls="messages">Big Corporate</a>
							</div>
						</li>

						<li class="nav-item mr-1">
							<router-link class="nav-link" to="/astrology-component"> Astrology </router-link>
						</li>

						<li class="nav-item mr-1">
							<router-link class="nav-link" to="/contactus-component">  Contact Us </router-link>
						</li>

						<li class="nav-item mr-1">
							<a class="nav-link btn" data-toggle="modal" data-target="#myModal" href="#" id="donate-now">Donate Now</a>
						</li>

						<li class="nav-item mr-1">
							<button class="openBtn" v-on:click="openSearch" style="background-color: #ffff!important"> <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
							width="24" height="24"
							viewBox="0 0 172 172"
							style=" fill:#000000;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g fill="#e67e22"><path d="M73.45833,21.5c-28.63214,0 -51.95833,23.32621 -51.95833,51.95833c0,28.63212 23.32619,51.95833 51.95833,51.95833c12.38529,0 23.77079,-4.37509 32.71191,-11.64583l35.15446,35.15446c1.34815,1.40412 3.35005,1.96971 5.23364,1.47866c1.88359,-0.49105 3.35456,-1.96202 3.84561,-3.84561c0.49105,-1.88359 -0.07455,-3.88549 -1.47866,-5.23364l-35.15446,-35.15446c7.27074,-8.94112 11.64583,-20.32663 11.64583,-32.71191c0,-28.63212 -23.32619,-51.95833 -51.95833,-51.95833zM73.45833,32.25c22.82242,0 41.20833,18.38593 41.20833,41.20833c0,11.11769 -4.38529,21.16215 -11.49886,28.56169c-0.43849,0.32229 -0.8255,0.7093 -1.14779,1.14779c-7.39953,7.11357 -17.44399,11.49886 -28.56169,11.49886c-22.82242,0 -41.20833,-18.38593 -41.20833,-41.20833c0,-22.8224 18.38591,-41.20833 41.20833,-41.20833z"></path></g></g></svg>
							</button>
						</li>

						<li class="nav-item mr-1">
							<router-link class="nav-link" to="/login-component"> Login / Registration </router-link>
						</li>
						   
					</ul>
				</div>
			
			</nav>


			<!------   #####  for search bar   ############# -------------------->


			<div id="myOverlay" class="overlay">
			  <span class="closebtn" v-on:click="closeSearch" title="Close Overlay">×</span>
			  <div class="overlay-content">
			    <form>
			      <input type="text" placeholder="Search.." name="search">
			      <button type="submit"> 
			      		<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
							width="24" height="24"
							viewBox="0 0 172 172"
							style=" fill:#000000;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g fill="#402726"><path d="M73.45833,21.5c-28.61092,0 -51.95833,23.34743 -51.95833,51.95833c0,28.6109 23.34741,51.95833 51.95833,51.95833c11.72882,0 22.53529,-3.96669 31.24919,-10.56803l33.55876,33.55176c1.79752,1.87223 4.46675,2.62641 6.97825,1.97168c2.5115,-0.65472 4.47282,-2.61605 5.12755,-5.12755c0.65472,-2.5115 -0.09946,-5.18073 -1.97168,-6.97825l-33.55176,-33.55876c6.60135,-8.7139 10.56803,-19.52038 10.56803,-31.24919c0,-28.6109 -23.34741,-51.95833 -51.95833,-51.95833zM73.45833,35.83333c20.86462,0 37.625,16.76039 37.625,37.625c0,10.01796 -3.89127,19.06549 -10.2181,25.7902c-0.61586,0.44585 -1.15686,0.98684 -1.6027,1.6027c-6.72616,6.33487 -15.77907,10.2321 -25.8042,10.2321c-20.86462,0 -37.625,-16.76039 -37.625,-37.625c0,-20.86461 16.76038,-37.625 37.625,-37.625z"></path></g></g>
						</svg>
			      </button>
			    </form>
			  </div>
			</div>

			<!------   #####  for Modal   ############# -------------------->


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

	.dropright .dropdown-menu {
	    top: 0;
	    right: auto;
	    left: 100%;
	    margin-top: 0;
	    margin-left: 0.01px;

	}

	#dnone{
		display: none;
	}

	.noshow > router-link{
		display: none;
	}


	.navbar-nav li{

		padding-top: 0.4rem;
	}


	/*   #################   search bar ###############################  */


	.openBtn {
  border: none;
}

.overlay {
  height: 100%;
  width: 100%;
  display: none;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: rgb(0,0,0);
  background-color: rgba(0,0,0, 0.9);
}

.overlay-content {
  position: relative;
  top: 46%;
  width: 80%;
  text-align: center;
  margin-top: 30px;
  margin: auto;
}

.overlay .closebtn {
  position: absolute;
  top: 60px;
  right: 45px;
  font-size: 60px;
  cursor: pointer;
  color: white;
}

.overlay .closebtn:hover {
  color: #ccc;
}

.overlay input[type=text] {
  padding: 15px;
  font-size: 17px;
  border: none;
  float: left;
  width: 80%;
  background: white;
  outline: none;
}

.overlay input[type=text]:hover {
  background: #f1f1f1;
  outline: none;
}

.overlay button {
  float: left;
  width: 20%;
  padding: 15px;
  background: #F08423;
  font-size: 17px;
  border: none;
  cursor: pointer;
  outline: none;
}
 
 button.openBtn:focus{
 	outline: none;
 	padding-bottom: 0.1rem;
 } 

button.openBtn{
 margin-top: 0.4rem;
		
}


/*   #################			 ############################			 ###############################  */




@media(min-width: 1200px){

	
        #donate-now{
				background-color: #F08423;
				color:#ffff;
				border-radius: 20px;
				width: 148px;
		}


   }


@media(min-width:992px) and (max-width: 1199px){

	 #donate-now{
		background-color: #F08423;
		color:#ffff;
		border-radius: 20px;
		width: 107px;

	}



    	.navbar-nav *{

			font-size: 0.7rem!important;
		}

		.navbar-nav li{

			margin-left: 1px!important;		
		}

}



@media(min-width:768px) and (max-width: 991px){


	#donate-now{
				background-color: #F08423;
				color:#ffff;
				border-radius: 20px;
				width: 107px;
				margin-top: 5px;
		}

		#ss-donate-btn{
				background-color: #F08423;
				color:#ffff;
				border-radius: 20px;
				width: 150px;
				margin-left: 120px;
		}


    }



@media(min-width:576px) and (max-width: 767px){

  	

		#ss-donate-btn{
				background-color: #F08423;
				color:#ffff;
				border-radius: 20px;
				width: 150px;
				
		}


}




@media(max-width: 575px){

	#ss-donate-btn{
				background-color: #F08423;
				color:#ffff;
				border-radius: 20px;
				width: 150px;
				
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

   methods: {
    
    openSearch() {
    	document.getElementById("myOverlay").style.display = "block";
    },

    closeSearch() {
  		document.getElementById("myOverlay").style.display = "none";
	}, 	
    
  },


  mounted(){

  			$(document).ready(function(){

				$('.navbar-nav a').on( 'click', function () {
				$( '.navbar-nav' ).find( 'li.active' ).removeClass( 'active' );
				$( this ).parent( 'li' ).addClass( 'active' );

			});	

		});		
			
	}

}

</script>