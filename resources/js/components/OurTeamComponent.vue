<template>
	<div>


      <!-------- ############# Pre Header ################################ ------------>

        <preheader-component></preheader-component>

        
        <div class="jumbotron-fluid ourteam-jmbo">

            <postheader-component></postheader-component>

        </div>



      <div class="container"> 
        
        <div class="row">
          
          <div class="col-xl-4 col-lg-4 col-md-12 col-sm-12 mt-4">
            
            <div class="list-group" id="list-tab" role="tablist">

              <a class="list-group-item list-group-item-action active" id="list-education-list" data-toggle="list" href="#list-education" role="tab" aria-controls="education">Patrons</a>

              <a class="list-group-item list-group-item-action list-group-item-color" id="list-health-list" data-toggle="list" href="#list-health" role="tab" aria-controls="health">Organizers  </a>

              <a class="list-group-item list-group-item-action list-group-item-color" id="list-workforce-list" data-toggle="list" href="#list-workforce" role="tab" aria-controls="workforce">Workforce   </a>


            </div>

          </div> 
          
          <div class="col-xl-8 col-lg-8 col-md-12 col-sm-12">
            
            <div class="tab-content" id="nav-tabContent">


              <div class="tab-pane fade show active" id="list-education" role="tabpanel" aria-labelledby="list-education-list"> 

                  <div class="card mt-4" style="padding: 25px;">

                  <h3 class="poppins-medium-500" style="font-weight: 100; font-size: 24px;"> Patrons </h3>
                  <p class="poppins-regular-400 mt-2" style="font-weight:200;color: #555; font-size: 14px;">Lorem ipsum dolor sit amet,  consectetur
                  adipisicing elit. Fugit, error amet numquam iure provident voluptate esse quasi, veritatis totam voluptas
                  nostrum quisquam eum porro a pariatur veniam.
                  </p>
                  <promoters-component></promoters-component>
              
                  </div>

              </div>


              <div class="tab-pane fade show" id="list-health" role="tabpanel" aria-labelledby="list-health-list"> 
                
                <!-- <div class="container"> -->

                    <!-- <h2 class="font-weight-bold text-center my-4 poppins-medium-500" style="font-weight: 100;">Team Member</h2>
                    <p class="text-center poppins-regular-400" style="font-weight:200;color: #555;">Lorem ipsum dolor sit amet,  consectetur
                    adipisicing elit. Fugit, error amet numquam iure provident voluptate esse quasi, veritatis totam voluptas
                    nostrum quisquam eum porro a pariatur veniam.
                    </p>
                
                    <div id="demonew" class="carousel slide" data-ride="carousel"> -->

                      <!-- Indicators -->
                      <!-- <ul class="carousel-indicators">
                        <li data-target="#demonew" data-slide-to="0" class="active"></li>
                        <li data-target="#demonew" data-slide-to="1"></li>
                        <li class="lg-none" data-target="#demonew" data-slide-to="2"></li>
                        <li class="lg-none" data-target="#demonew" data-slide-to="3"></li>
                      </ul> -->
  
                      <!-- The slideshow -->
                      <!-- <div class="carousel-inner">
                        <div class="carousel-item active">
                          
                          <div class="row mb-5">
                              
                              <div class="col-xl-4 col-lg-4 col-md-4 col-sm-12">

                                <div class="card" id="ourteam">
                                  <img src="images/avtar.png" class=" card-img-top rounded-circle" style="height: 100px; width: 100px; margin: auto; margin-top: 1rem;">

                                  <div class="card-body">
                                    <p class="card-title text-center poppins-medium-500"> Team Member 1 </p>
                                    <p class="card-text text-center poppins-regular-400" style="font-size: 12px;">Some example text some example text. John Doe is an architect and engineer</p>
                                  </div>
                                </div>

                              </div>

                              <div class="col-xl-4 col-lg-4 col-md-4 m-none">

                                <div class="card" id="ourteam">
                                  <img src="images/avtar.png" class=" card-img-top rounded-circle" style="height: 100px; width: 100px; margin: auto; margin-top: 1rem;">

                                  <div class="card-body">
                                    <p class="card-title text-center poppins-medium-500"> Team Member 1 </p>
                                    <p class="card-text text-center poppins-regular-400" style="font-size: 12px;">Some example text some example text. John Doe is an architect and engineer</p>
                                  </div>
                                </div>


                              </div>

                              <div class="col-xl-4 col-lg-4 col-md-4 m-none">

                                <div class="card" id="ourteam">
                                  <img src="images/avtar.png" class=" card-img-top rounded-circle" style="height: 100px; width: 100px; margin: auto; margin-top: 1rem;">

                                  <div class="card-body">
                                    <p class="card-title text-center poppins-medium-500"> Team Member 1 </p>
                                    <p class="card-text text-center poppins-regular-400" style="font-size: 12px;">Some example text some example text. John Doe is an architect and engineer</p>
                                  </div>
                                </div>


                              </div>

                          </div>

                        </div>

                        <div class="carousel-item">
                          
                            <div class="row mb-5">
                              
                              <div class="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">

                                <div class="card" id="ourteam">
                                  <img src="images/avtar.png" class=" card-img-top rounded-circle" style="height: 100px; width: 100px; margin: auto; margin-top: 1rem;">

                                  <div class="card-body">
                                    <p class="card-title text-center poppins-medium-500"> Team Member 1 </p>
                                    <p class="card-text text-center poppins-regular-400" style="font-size: 12px;">Some example text some example text. John Doe is an architect and engineer</p>
                                  </div>
                                </div>


                              </div>

                              <div class="col-xl-4 col-lg-4 col-md-4 m-none">

                                <div class="card" id="ourteam">
                                  <img src="images/avtar.png" class=" card-img-top rounded-circle" style="height: 100px; width: 100px; margin: auto; margin-top: 1rem;">

                                  <div class="card-body">
                                    <p class="card-title text-center poppins-medium-500"> Team Member 1 </p>
                                    <p class="card-text text-center poppins-regular-400" style="font-size: 12px;">Some example text some example text. John Doe is an architect and engineer</p>
                                  </div>
                                </div>


                              </div>

                              <div class="col-xl-4 col-lg-4 col-md-4 m-none">

                                <div class="card" id="ourteam">
                                  <img src="images/avtar.png" class=" card-img-top rounded-circle" style="height: 100px; width: 100px; margin: auto; margin-top: 1rem;">

                                  <div class="card-body">
                                    <p class="card-title text-center poppins-medium-500"> Team Member 1 </p>
                                    <p class="card-text text-center poppins-regular-400" style="font-size: 12px;">Some example text some example text. John Doe is an architect and engineer</p>
                                  </div>
                                </div>


                              </div>

                          </div>


                        </div>

                      </div> -->
  
                      <!-- Left and right controls -->
                      <!-- <a class="carousel-control-prev" href="#demonew" data-slide="prev" style="padding-bottom: 2rem;"> -->
                        <!-- <span class="carousel-control-prev-icon" style="background-color: black;"></span> -->
                       <!--  <svg width="3.5em" height="3.5em" viewBox="0 0 16 16" class="bi bi-arrow-left-circle" fill="currentColor" xmlns="http://www.w3.org/2000/svg" style="color: black;padding-right: 2em;">
                          <path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                          <path fill-rule="evenodd" d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5z"/>
                        </svg>

                      </a> -->

                      <!-- <a class="carousel-control-next" href="#demonew" data-slide="next" style="padding-bottom: 2rem;"> -->
                        <!-- <span class="carousel-control-next-icon" style="color: #000000;"></span> -->
                       <!--  <svg width="3.5em" height="3.5em" viewBox="0 0 16 16" class="bi bi-arrow-right-circle" fill="currentColor" xmlns="http://www.w3.org/2000/svg" style="color: black; padding-left: 2em;">
                          <path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                          <path fill-rule="evenodd" d="M4 8a.5.5 0 0 0 .5.5h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5A.5.5 0 0 0 4 8z"/>
                        </svg>
                      </a>

                </div>

              
                </div> -->


                  <!-- <h2 class="font-weight-bold my-4 poppins-medium-500" style="font-weight: 100;">Team Member</h2>
                  <p class="poppins-regular-400" style="font-weight:200;color: #555;">Lorem ipsum dolor sit amet,  consectetur
                  adipisicing elit. Fugit, error amet numquam iure provident voluptate esse quasi, veritatis totam voluptas
                  nostrum quisquam eum porro a pariatur veniam.
                  </p> -->

                  <div class="card mt-4" style="padding: 25px;">

                  <h2 class="poppins-medium-500" style="font-weight: 100; font-size: 24px;">Organizers</h2>
                  <p class="poppins-regular-400 mt-2" style="font-weight:200;color: #555; font-size: 14px;">Lorem ipsum dolor sit amet,  consectetur
                  adipisicing elit. Fugit, error amet numquam iure provident voluptate esse quasi, veritatis totam voluptas
                  nostrum quisquam eum porro a pariatur veniam.
                  </p>


                  <div class="row mb-4 mt-2">
                              
                              <div class="col-xl-4 col-lg-4 col-md-4 col-sm-12">

                                <div class="card">
                                  <img src="images/avtar.png" class=" card-img-top rounded-circle" style="height: 100px; width: 100px; margin: auto; margin-top: 1rem;">

                                  <div class="card-body">
                                    <p class="card-title text-center poppins-medium-500"> Team Member 1 </p>
                                    <p class="card-text text-center poppins-regular-400" style="font-size: 12px;">Some example text some example text. John Doe is an architect and engineer</p>
                                  </div>
                                </div>

                              </div>

                              <div class="col-xl-4 col-lg-4 col-md-4">

                                <div class="card">
                                  <img src="images/avtar.png" class=" card-img-top rounded-circle" style="height: 100px; width: 100px; margin: auto; margin-top: 1rem;">

                                  <div class="card-body">
                                    <p class="card-title text-center poppins-medium-500"> Team Member 1 </p>
                                    <p class="card-text text-center poppins-regular-400" style="font-size: 12px;">Some example text some example text. John Doe is an architect and engineer</p>
                                  </div>
                                </div>


                              </div>

                              <div class="col-xl-4 col-lg-4 col-md-4">

                                <div class="card">
                                  <img src="images/avtar.png" class=" card-img-top rounded-circle" style="height: 100px; width: 100px; margin: auto; margin-top: 1rem;">

                                  <div class="card-body">
                                    <p class="card-title text-center poppins-medium-500"> Team Member 1 </p>
                                    <p class="card-text text-center poppins-regular-400" style="font-size: 12px;">Some example text some example text. John Doe is an architect and engineer</p>
                                  </div>
                                </div>


                              </div>

                  </div>


                   <div class="row">
                              
                              <div class="col-xl-4 col-lg-4 col-md-4 col-sm-12">

                                <div class="card">
                                  <img src="images/avtar.png" class=" card-img-top rounded-circle" style="height: 100px; width: 100px; margin: auto; margin-top: 1rem;">

                                  <div class="card-body">
                                    <p class="card-title text-center poppins-medium-500"> Team Member 1 </p>
                                    <p class="card-text text-center poppins-regular-400" style="font-size: 12px;">Some example text some example text. John Doe is an architect and engineer</p>
                                  </div>
                                </div>

                              </div>

                              <div class="col-xl-4 col-lg-4 col-md-4">

                                <div class="card">
                                  <img src="images/avtar.png" class=" card-img-top rounded-circle" style="height: 100px; width: 100px; margin: auto; margin-top: 1rem;">

                                  <div class="card-body">
                                    <p class="card-title text-center poppins-medium-500"> Team Member 1 </p>
                                    <p class="card-text text-center poppins-regular-400" style="font-size: 12px;">Some example text some example text. John Doe is an architect and engineer</p>
                                  </div>
                                </div>


                              </div>

                              <div class="col-xl-4 col-lg-4 col-md-4">

                                <div class="card">
                                  <img src="images/avtar.png" class=" card-img-top rounded-circle" style="height: 100px; width: 100px; margin: auto; margin-top: 1rem;">

                                  <div class="card-body">
                                    <p class="card-title text-center poppins-medium-500"> Team Member 1 </p>
                                    <p class="card-text text-center poppins-regular-400" style="font-size: 12px;">Some example text some example text. John Doe is an architect and engineer</p>
                                  </div>
                                </div>


                              </div>

                  </div>

                  </div>


            </div>


            <div class="tab-pane fade show" id="list-workforce" role="tabpanel" aria-labelledby="list-workforce-list"> 
                
          
                  <div class="card mt-4" style="padding: 25px;">

                  <h2 class="poppins-medium-500" style="font-weight: 100; font-size: 24px;">Workforce</h2>
                  <p class="poppins-regular-400 mt-2" style="font-weight:200;color: #555; font-size: 14px;">Lorem ipsum dolor sit amet,  consectetur
                  adipisicing elit. Fugit, error amet numquam iure provident voluptate esse quasi, veritatis totam voluptas
                  nostrum quisquam eum porro a pariatur veniam.
                  </p>


                  <div class="row mb-4 mt-2">
                              
                              <div class="col-xl-4 col-lg-4 col-md-4 col-sm-12">

                                <div class="card">
                                  <img src="images/avtar.png" class=" card-img-top rounded-circle" style="height: 100px; width: 100px; margin: auto; margin-top: 1rem;">

                                  <div class="card-body">
                                    <p class="card-title text-center poppins-medium-500"> Team Member 1 </p>
                                    <p class="card-text text-center poppins-regular-400" style="font-size: 12px;">Some example text some example text. John Doe is an architect and engineer</p>
                                  </div>
                                </div>

                              </div>

                              <div class="col-xl-4 col-lg-4 col-md-4">

                                <div class="card">
                                  <img src="images/avtar.png" class=" card-img-top rounded-circle" style="height: 100px; width: 100px; margin: auto; margin-top: 1rem;">

                                  <div class="card-body">
                                    <p class="card-title text-center poppins-medium-500"> Team Member 1 </p>
                                    <p class="card-text text-center poppins-regular-400" style="font-size: 12px;">Some example text some example text. John Doe is an architect and engineer</p>
                                  </div>
                                </div>


                              </div>

                              <div class="col-xl-4 col-lg-4 col-md-4">

                                <div class="card">
                                  <img src="images/avtar.png" class=" card-img-top rounded-circle" style="height: 100px; width: 100px; margin: auto; margin-top: 1rem;">

                                  <div class="card-body">
                                    <p class="card-title text-center poppins-medium-500"> Team Member 1 </p>
                                    <p class="card-text text-center poppins-regular-400" style="font-size: 12px;">Some example text some example text. John Doe is an architect and engineer</p>
                                  </div>
                                </div>


                              </div>

                  </div>


                   <div class="row">
                              
                              <div class="col-xl-4 col-lg-4 col-md-4 col-sm-12">

                                <div class="card">
                                  <img src="images/avtar.png" class=" card-img-top rounded-circle" style="height: 100px; width: 100px; margin: auto; margin-top: 1rem;">

                                  <div class="card-body">
                                    <p class="card-title text-center poppins-medium-500"> Team Member 1 </p>
                                    <p class="card-text text-center poppins-regular-400" style="font-size: 12px;">Some example text some example text. John Doe is an architect and engineer</p>
                                  </div>
                                </div>

                              </div>

                              <div class="col-xl-4 col-lg-4 col-md-4">

                                <div class="card">
                                  <img src="images/avtar.png" class=" card-img-top rounded-circle" style="height: 100px; width: 100px; margin: auto; margin-top: 1rem;">

                                  <div class="card-body">
                                    <p class="card-title text-center poppins-medium-500"> Team Member 1 </p>
                                    <p class="card-text text-center poppins-regular-400" style="font-size: 12px;">Some example text some example text. John Doe is an architect and engineer</p>
                                  </div>
                                </div>


                              </div>

                              <div class="col-xl-4 col-lg-4 col-md-4">

                                <div class="card">
                                  <img src="images/avtar.png" class=" card-img-top rounded-circle" style="height: 100px; width: 100px; margin: auto; margin-top: 1rem;">

                                  <div class="card-body">
                                    <p class="card-title text-center poppins-medium-500"> Team Member 1 </p>
                                    <p class="card-text text-center poppins-regular-400" style="font-size: 12px;">Some example text some example text. John Doe is an architect and engineer</p>
                                  </div>
                                </div>


                              </div>

                  </div>

                  </div>


            </div>














          </div>

        </div> 

        </div>    

        </div>




        <!--------------------- Our team---------------->
        <!-- <div class="container">

            <h2 class="font-weight-bold text-center my-4 poppins-medium-500" style="font-weight: 100;">Team Member</h2>
            <p class="text-center poppins-regular-400" style="font-weight:200;color: #555;">Lorem ipsum dolor sit amet, consectetur
                adipisicing elit. Fugit, error amet numquam iure provident voluptate esse quasi, veritatis totam voluptas
            nostrum quisquam eum porro a pariatur veniam.</p>
                
                <div id="demonew" class="carousel slide" data-ride="carousel"> -->

                  <!-- Indicators -->
                  <!-- <ul class="carousel-indicators">
                    <li data-target="#demonew" data-slide-to="0" class="active"></li>
                    <li data-target="#demonew" data-slide-to="1"></li>
                    <li class="lg-none" data-target="#demonew" data-slide-to="2"></li>
                    <li class="lg-none" data-target="#demonew" data-slide-to="3"></li>
                  </ul> -->
  
                  <!-- The slideshow -->
                  <!-- <div class="carousel-inner">
                    <div class="carousel-item active">
                      
                      <div class="row mb-5">
                          
                          <div class="col-xl-4 col-lg-4 col-md-4 col-sm-12">

                            <div class="card" id="ourteam">
                              <img src="images/avtar.png" class=" card-img-top rounded-circle" style="height: 150px; width: 150px; margin: auto; margin-top: 1rem;">

                              <div class="card-body">
                                <h4 class="card-title text-center poppins-medium-500"> Team Member 1 </h4>
                                <p class="card-text text-center poppins-regular-400">Some example text some example text. John Doe is an architect and engineer</p>
                              </div>
                            </div>

                          </div>

                          <div class="col-xl-4 col-lg-4 col-md-4 m-none">

                            <div class="card" id="ourteam">
                              <img src="images/avtar.png" class=" card-img-top rounded-circle" style="height: 150px; width: 150px; margin: auto; margin-top: 1rem;">

                             <div class="card-body">
                                <h4 class="card-title text-center poppins-medium-500"> Team Member 1 </h4>
                                <p class="card-text text-center poppins-regular-400">Some example text some example text. John Doe is an architect and engineer</p>
                              </div>
                            </div>

                          </div>

                          <div class="col-xl-4 col-lg-4 col-md-4 m-none">

                            <div class="card" id="ourteam">
                              <img src="images/avtar.png" class=" card-img-top rounded-circle" style="height: 150px; width: 150px; margin: auto; margin-top: 1rem;">

                              <div class="card-body">
                                <h4 class="card-title text-center poppins-medium-500"> Team Member 1 </h4>
                                <p class="card-text text-center poppins-regular-400">Some example text some example text. John Doe is an architect and engineer</p>
                              </div>
                            </div>

                          </div>

                      </div>

                    </div>

                    <div class="carousel-item">
                      
                        <div class="row mb-5">
                          
                          <div class="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">

                            <div class="card" id="ourteam">
                              <img src="images/avtar.png" class=" card-img-top rounded-circle" style="height: 150px; width: 150px; margin: auto; margin-top: 1rem;">

                              <div class="card-body">
                                <h4 class="card-title text-center poppins-medium-500"> Team Member 1 </h4>
                                <p class="card-text text-center poppins-regular-400">Some example text some example text. John Doe is an architect and engineer</p>
                              </div>
                            </div>

                          </div>

                          <div class="col-xl-4 col-lg-4 col-md-4 m-none">

                            <div class="card" id="ourteam">
                              <img src="images/avtar.png" class=" card-img-top rounded-circle" style="height: 150px; width: 150px; margin: auto; margin-top: 1rem;">

                              <div class="card-body">
                                <h4 class="card-title text-center poppins-medium-500"> Team Member 1 </h4>
                                <p class="card-text text-center poppins-regular-400">Some example text some example text. John Doe is an architect and engineer</p>
                              </div>
                            </div>

                          </div>

                          <div class="col-xl-4 col-lg-4 col-md-4 m-none">

                            <div class="card" id="ourteam">
                              <img src="images/avtar.png" class=" card-img-top rounded-circle" style="height: 150px; width: 150px; margin: auto; margin-top: 1rem;">

                              <div class="card-body">
                                <h4 class="card-title text-center poppins-medium-500"> Team Member 1 </h4>
                                <p class="card-text text-center poppins-regular-400">Some example text some example text. John Doe is an architect and engineer</p>
                              </div>
                            </div>

                          </div>

                      </div>


                    </div>

                  </div> -->
  
                  <!-- Left and right controls -->
                  <!-- <a class="carousel-control-prev" href="#demonew" data-slide="prev">
                    <span class="carousel-control-prev-icon" id="prev"></span>
                  </a>

                  <a class="carousel-control-next" href="#demonew" data-slide="next">
                    <span class="carousel-control-next-icon" id="next"></span>
                  </a>

                </div>

        </div>  --> 

        <!--------------  Footer ---------------------------------------->
        <footer-component></footer-component>

	</div>
</template>

<style scoped>


/*.jumbotron-fluid{

    display: flex;
    justify-content: center;
    align-items: center;*/
    /*height: 80%!important;*/
/*}*/


.jumbotron-fluid{

    height: 45vh;
    width: 100vw;

}



.list-group-item-color{
    color: #F08423;
  }

  .list-group-item-color:hover{

    color:#F08423;
  }

  .list-group-item-action.active{
    background-color: #F08423;
    color:#ffff;
    border: none;
  }


  
@media(min-width: 1200px){


    
    }


    @media(min-width:992px) and (max-width: 1199px){


      

    }



    @media(min-width:768px) and (max-width: 991px){


    }



@media(min-width:576px) and (max-width: 767px){



    }




    @media(max-width: 575px){

    


    }


</style>