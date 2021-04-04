 <template>
     <div>
         
 
          <nav class="navbar navbar-expand-lg navbar-dark bg-light pt-2 pb-2 pl-5 pr-5">


                <!-- Toggler/collapsibe Button -->
                  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">

                    <span class="navbar-toggler-icon bg-dark"></span>
                  </button>
                  

                  <!-- <button type="button" data-toggle="modal" data-target="#myModal" class="btn text-light bg-dark xl-noshow lg-noshow"> Donate Now </button>


                  <router-link class="nav-link text-light bg-dark xl-noshow lg-noshow" to="/login-component"> Login </router-link> -->


                  <div class="collapse navbar-collapse justify-content-around " id="navbarNavAltMarkup">

                    <ul class="navbar-nav">

                        <li class="nav-item dropdown">

                            <router-link class="nav-link dropdown-toggle" to="/" id="navbardrop" data-toggle="dropdown"> <img src="https://img.icons8.com/ios-filled/50/000000/home.png" style="height: 20px;width: 20px;">
                            </router-link>

                            <div class="dropdown-menu" id="dropshow">
                                
                                <router-link class="dropdown-item" to="/aboutus-component"> About Us </router-link>

                                <router-link class="dropdown-item" to="/ourmission-component"> Our Initiative </router-link>
                                
                                <router-link class="dropdown-item" to="/ourteam-component"> Our Team </router-link>

                                <router-link class="dropdown-item" to="/annualreports-component"> Annual Reports </router-link>

                                <router-link class="dropdown-item" to="/awardsrecognitions-component"> Awards Recognitions </router-link>

                            </div>
                        </li>


                        <li class="nav-item dropdown ml-2">

                            <router-link class="nav-link dropdown-toggle text-dark" to="/beneficiary-component" id="navbardrop" data-toggle="dropdown"> Beneficiary </router-link>


                            <div class="dropdown-menu" id="dropshow">

                                <li class="nav-link dropdown dropright"> 

                                    <router-link class="dropdown-item dropdown-toggle" data-toggle="dropdown" to="/individuals-component"> Individual </router-link>

                                    <ul class="dropdown-menu" id="dropsubshow">

                                        <router-link class="dropdown-item" to="/medicalemergency-component"> Medical Emergency </router-link>

                                        <router-link class="dropdown-item" to="/Ortholimbs-component"> Mobility Aids to Differently Abled Persons </router-link>
                                
                                        <router-link class="dropdown-item" to="/studyassistance-component"> Study Assistance to Needy Students of Rural Background </router-link>

                                        <router-link class="dropdown-item" to="/scholarship-component"> Scholarship to meritorious Students </router-link>


                                    </ul>

                                </li>

                                <li class="nav-link dropdown dropright mr-3"> 

                                    <router-link class="dropdown-item dropdown-toggle" data-toggle="dropdown" to="/ngodetails-component"> NGO </router-link>

                                    <ul class="dropdown-menu" id="dropsubshow">

                                            <li class="nav-link dropdown dropright" id="droprightnext"> 

                                                <router-link class="dropdown-item dropdown-toggle" data-toggle="dropdown" to="/education-component"> Education </router-link> 

                                            </li>

                                        <li class="nav-link dropdown dropright" id="droprightnext"> 

                                            <router-link class="dropdown-item dropdown-toggle" data-toggle="dropdown" to="/health-component"> Health </router-link> 

                                        </li>

                                        <li class="nav-link dropdown dropright" id="droprightnext"> 

                                            <router-link class="dropdown-item dropdown-toggle" data-toggle="dropdown" to="/village-component"> Village Development and Agriculture  </router-link> 

                                        </li>


                                       <!--  <li class="nav-link dropdown dropright" id="droprightnext"> 

                                            <router-link class="dropdown-item dropdown-toggle" data-toggle="dropdown" to="/water-component"> Water conservation & Harvesting </router-link> 


                                        </li> -->


                                        <!-- <li class="nav-link dropdown dropright" id="droprightnext"> 

                                            <router-link class="dropdown-item dropdown-toggle" data-toggle="dropdown" to="/agriculture-component"> Agriculture </router-link>  -->

                                            <!-- <ul class="dropdown-menu" id="dropsubsubshow">

                                                <router-link class="dropdown-item" to="/ourmission-component"> Link1 </router-link>

                                                <router-link class="dropdown-item" to="/"> Link2 </router-link>
                                
                                                <router-link class="dropdown-item" to="/"> Link3 </router-link>

                                            </ul> -->

                                        <!-- </li> -->


                                        <li class="nav-link dropdown dropright" id="droprightnext"> 

                                            <router-link class="dropdown-item dropdown-toggle" data-toggle="dropdown" to="/skilldevelopement-component"> Skill Development </router-link> 

                                           <!--  <ul class="dropdown-menu" id="dropsubsubshow">

                                                <router-link class="dropdown-item" to="/ourmission-component"> Link1 </router-link>

                                                <router-link class="dropdown-item" to="/"> Link2 </router-link>
                                
                                                <router-link class="dropdown-item" to="/"> Link3 </router-link>

                                            </ul> -->

                                        </li>


                                        <li class="nav-link dropdown dropright" id="droprightnext"> 

                                            <router-link class="dropdown-item dropdown-toggle" data-toggle="dropdown" to="/differentlyabled-component"> Differently Abled (Divyang Jan) </router-link> 

                                            <!-- <ul class="dropdown-menu" id="dropsubsubshow">

                                                <router-link class="dropdown-item" to="/ourmission-component"> Link1 </router-link>

                                                <router-link class="dropdown-item" to="/"> Link2 </router-link>
                                
                                                <router-link class="dropdown-item" to="/"> Link3 </router-link>

                                            </ul>
 -->
                                        </li>


                                        <li class="nav-link dropdown dropright" id="droprightnext"> 

                                            <router-link class="dropdown-item dropdown-toggle" data-toggle="dropdown" to="/womenempowerment-component">Women Empowerment and Human Rights </router-link> 

                                            <!-- <ul class="dropdown-menu" id="dropsubsubshow">

                                                <router-link class="dropdown-item" to="/ourmission-component"> Link1 </router-link>

                                                <router-link class="dropdown-item" to="/"> Link2 </router-link>
                                
                                                <router-link class="dropdown-item" to="/"> Link3 </router-link>

                                            </ul> -->

                                        </li>


                                        <!-- <li class="nav-link dropdown dropright" id="droprightnext"> 

                                            <router-link class="dropdown-item dropdown-toggle" data-toggle="dropdown" to="/humanrights-component"> Human Rights </router-link>  -->

                                            <!-- <ul class="dropdown-menu" id="dropsubsubshow">

                                                <router-link class="dropdown-item" to="/ourmission-component"> Link1 </router-link>

                                                <router-link class="dropdown-item" to="/"> Link2 </router-link>
                                
                                                <router-link class="dropdown-item" to="/"> Link3 </router-link>

                                            </ul> -->

                                        <!-- </li> -->





                                        <!-- <li class="nav-link dropdown dropright" id="droprightnext"> 

                                            <router-link class="dropdown-item dropdown-toggle" data-toggle="dropdown" to="/"> Others </router-link>  -->

                                            <!-- <ul class="dropdown-menu" id="dropsubsubshow">

                                                <router-link class="dropdown-item" to="/ourmission-component"> Link1 </router-link>

                                                <router-link class="dropdown-item" to="/"> Link2 </router-link>
                                
                                                <router-link class="dropdown-item" to="/"> Link3 </router-link>

                                            </ul> -->

                                        <!-- </li> -->



                                    </ul>

                                </li>

                            </div>
                        </li>


                        <li class="nav-item ml-2"> 
                            <router-link class="nav-link text-dark" to="/fundraiser-component"> Fundraiser </router-link>
                        </li>

                        <li class="nav-item ml-2"> 
                            <router-link class="nav-link text-dark" to="/ourpartners-component"> Our Partners </router-link>
                        </li>

                        <li class="nav-item ml-2"> 
                            <router-link class="nav-link text-dark" to="/socialassociation-component"> Social Association </router-link>
                        </li>

                        <!-- <li class="nav-item ml-4"> 
                            <a class="nav-link text-dark" href="#"> Get Involved </a>
                        </li> -->


                        <!-- <li class="nav-item dropdown ml-2">
                            <a class="nav-link dropdown-toggle text-dark" href="#" id="navbardrop" data-toggle="dropdown">
                                Get Involved
                            </a>
                            <div class="dropdown-menu" id="dropshow">
                                
                                <router-link class="dropdown-item" to="/greenbyanubhav-component"> Green By Anubhav </router-link>
                                <router-link class="dropdown-item" to="/partnerwithus-component"> Partner With Us </router-link>
                                <router-link class="dropdown-item" to="/volunteer-component"> Volunteer</router-link>
                                
                            </div>
                        </li> -->


                        <!-- <li class="nav-item ml-4"> 
                            <a class="nav-link text-dark" href="#"> Latest Update </a>
                        </li> -->


                        <li class="nav-item dropdown ml-2">
                            
                            <router-link class="nav-link dropdown-toggle text-dark" to="/latestupdate-component" id="navbardrop" data-toggle="dropdown"> Latest Updates </router-link>


                            <div class="dropdown-menu" id="dropshow">
                                <router-link class="dropdown-item" to="/mediacoverage-component"> Media Coverage </router-link>

                                <!-- <a class="dropdown-item" href="#">Media Coverage</a> -->
                                
                            </div>

                        </li>


                        <!-- <li class="nav-item ml-4"> 
                            <a class="nav-link text-dark" href="#"> Donors </a>
                        </li> -->

                        <li class="nav-item dropdown ml-2">
                        
                            <router-link class="nav-link dropdown-toggle text-dark" to="/donor-component" id="navbardrop" data-toggle="dropdown"> Donor </router-link>


                            <div class="dropdown-menu" id="dropshow">
                                <router-link class="dropdown-item" to="/donor-component"> Individual </router-link>
                                <a class="dropdown-item list-group-item list-group-item-action list-group-item-color" id="list-profile-list" data-toggle="list" href="#list-profile" role="tab" aria-controls="profile">Small Corporate / Trust</a>
                                <a class="dropdown-item list-group-item list-group-item-action list-group-item-color" id="list-messages-list" data-toggle="list" href="#list-messages" role="tab" aria-controls="messages">Big Corporate</a>
                                <a class="dropdown-item list-group-item list-group-item-action list-group-item-color" id="list-messages-list" data-toggle="list" href="#list-messages" role="tab" aria-controls="messages">Other Entities </a>
                            </div>

                        </li>


                        <!-- <li class="nav-item ml-4"> 
                            <a class="nav-link text-dark" href="#"> Astrology </a>
                        </li> -->

                        <li class="nav-item ml-2">
                            <router-link class="nav-link text-dark" to="/astrology-component"> Astrology </router-link>
                        </li>

                        <li class="nav-item ml-2">
                            <button type="button" data-toggle="modal" data-target="#myModal" class="btn text-light"> Donate Now </button>
                            
                        </li>

                        <!-- <li class="nav-item ml-4"> 
                            <a class="nav-link text-dark" href="#" style="color: #f38323;font-size: 0.9rem;"> Login </a>
                        </li> -->


                        <li class="nav-item ml-2">
                            <router-link class="nav-link text-dark" to="/contactus-component"> Contact Us </router-link>
                        </li>


                        <li class="nav-item ml-2">
                            <router-link class="nav-link text-dark" to="/login-component"> Login </router-link>
                        </li>
                

                    </ul>


                </div>


                <!-- </div> -->

            

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
    text-align: inherit;
    border: 0;
    }



    .dropright .dropdown-menu {
        top: 0;
        right: auto;
        left: 100%;
        margin-top: 0;
        margin-left: 0.01px;
        


    }

    .dropdown-menu{

        border: none;
    }



     @media(min-width: 1200px){


        .navbar-nav{

            font-size: 0.9rem;
        }


        .nav-item button{

            height: 40px;
            border-radius: 40px;
            background-color: #f08423;
            width: 200px;
            
        }


    
  
        
    }


    @media(min-width:992px) and (max-width: 1199px){


      .navbar-nav{

            font-size: 0.7rem;
        }

        .nav-item button{

            height: 38px;
            border-radius: 40px;
            background-color: #f08423;
            width: 140px;

        }



    }



    @media(min-width:768px) and (max-width: 991px){


        .navbar-nav{

            font-size: 0.7rem;
        }


        .nav-item button{

            height: 40px;
            border-radius: 40px;
            background-color: #f08423;
            width: 140px;

        }

}



    @media(min-width:576px) and (max-width: 767px){


       .nav-item button{

            height: 40px;
            border-radius: 40px;
            background-color: #f08423;
            width: 140px;

        }

}




    @media(max-width: 575px){

      
        .nav-item button{

            height: 40px;
            border-radius: 40px;
            background-color: #f08423;
            width: 140px;

        }


    }


 </style>