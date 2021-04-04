<template>
	<div>

        <!-------- ############# Pre Header ################################ ------------>

        <preheader-component></preheader-component>

		
        <div class="jumbotron-fluid ngodetail-jmbo">

            <postheader-component></postheader-component>

        </div>
            


    <!------------------------- NGO --------------------------------------------------------------------------->
        
        <div class="container">
            <h2 class="text-center poppins-medium-500" style="color: #653E3C;"> NGOs </h2>

            <div class="row mt-5" data-aos="fade-right">
                
                <div class="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-6 zoom-effect" style="overflow: hidden;position: relative;">
                    <router-link to="/education-component">  
                         
                         <img src="images/Home-Page-Images/Ngo-Images/1.jpg" class="img-fluid" style="transition: all 0.5s linear"> 

                         <figcaption class="d-flex justify-content-center">
                            <p class="poppins-regular-400" style="position: absolute;top: 7rem;"> Education </p>
                         </figcaption>

                    </router-link>
                </div>

                <div class="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-6 zoom-effect" style="overflow: hidden;position: relative;">
                    <router-link to="/health-component">  

                        <img src="images/Home-Page-Images/Ngo-Images/2.jpg" class="img-fluid" style="transition: all 0.5s linear">

                        <figcaption class="d-flex justify-content-center">
                            <p class="poppins-regular-400" style="position: absolute;top: 7rem;"> Health </p>
                        </figcaption>

                    </router-link>  
                </div>

                <div class="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-6 zoom-effect m-none" style="overflow: hidden;position: relative;">
                    <router-link to="/village-component">  
                        
                        <img src="images/Home-Page-Images/Ngo-Images/3.jpg" class="img-fluid" style="transition: all 0.5s linear"> 

                        <figcaption class="d-flex justify-content-center">
                            <p class="poppins-regular-400" style="position: absolute;top: 7rem;"> Village Development </p>
                        </figcaption>
                    </router-link>   
                </div>

            </div>

            <div class="row mt-5">
                
                <div class="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-6 zoom-effect" style="overflow: hidden;position: relative;">
                   <router-link to="/water-component">  

                        <img src="images/Home-Page-Images/Ngo-Images/4.jpg" class="img-fluid" style="transition: all 0.5s linear">

                        <figcaption class="d-flex justify-content-center">
                            <p class="poppins-regular-400" style="position: absolute;top: 7rem;"> Water conservation & Harvesting </p>
                        </figcaption>

                   </router-link>  
                </div>

                <div class="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-6 zoom-effect" style="overflow: hidden;position: relative;">
                   <router-link to="/agriculture-component">  

                        <img src="images/Home-Page-Images/Ngo-Images/5.jpg" class="img-fluid" style="transition: all 0.5s linear">

                        <figcaption class="d-flex justify-content-center">
                            <p class="poppins-regular-400" style="position: absolute;top: 7rem;"> Agriculture </p>
                        </figcaption>

                   </router-link> 
                </div>

                <div class="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-6 zoom-effect m-none" style="overflow: hidden;position: relative;">
                    <router-link to="/skilldevelopement-component">  

                        <img src="images/Home-Page-Images/Ngo-Images/6.jpg" class="img-fluid" style="transition: all 0.5s linear">

                        <figcaption class="d-flex justify-content-center">
                            <p class="poppins-regular-400" style="position: absolute;top: 7rem;"> Skill Development  </p>
                        </figcaption>

                    </router-link>  
                </div>

            </div>


            <div class="row mt-5 mb-5" data-aos="fade-left">
                
                <div class="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-6 zoom-effect" style="overflow: hidden;position: relative;">
                    <router-link to="/differentlyabled-component">  

                        <img src="images/Home-Page-Images/Ngo-Images/7.jpg" class="img-fluid" style="transition: all 0.5s linear"> 

                        <figcaption class="d-flex justify-content-center">
                            <p class="poppins-regular-400" style="position: absolute;top: 7rem;"> Differently Abled (Divyang Jan) </p>
                        </figcaption>

                    </router-link>  
                </div>
 
                <div class="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-6 zoom-effect" style="overflow: hidden;position: relative;">
                    <router-link to="/womenempowerment-component">  

                        <img src="images/Home-Page-Images/Ngo-Images/8.jpg" class="img-fluid" style="transition: all 0.5s linear">

                        <figcaption class="d-flex justify-content-center">
                            <p class="poppins-regular-400" style="position: absolute;top: 7rem;"> Women Empowerment </p>
                        </figcaption>

                    </router-link>   
                </div>

                <div class="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-6 zoom-effect m-none" style="overflow: hidden;position: relative;">
                    <router-link to="/humanrights-component">  

                        <img src="images/Home-Page-Images/Ngo-Images/9.jpg" class="img-fluid" style="transition: all 0.5s linear">

                        <figcaption class="d-flex justify-content-center">
                            <p class="poppins-regular-400" style="position: absolute;top: 7rem;"> Human Rights </p>
                        </figcaption>

                    </router-link>  
                </div>

            </div>

        </div>


	</div>
</template>

<style scoped>


.jumbotron-fluid{

    height: 45vh;
    width: 100vw;

}


figcaption{

      position: absolute; 
      left: 0; 
      top: 0; 
      width: 100%; 
      height: 100%; 
      color: white;
      opacity: 0;
      
}

.zoom-effect:hover figcaption{

      opacity: 1;
      background:  rgba(0,0,0,0.4);
      transition: all 0.5s linear
     
}

.zoom-effect:hover img{

    transform: scale(1.2);
}


</style>


<script>

	export default{
      

}

</script>