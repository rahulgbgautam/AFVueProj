<template>
	<div>
		
		<div class="mw-100" id="foot">
			<!-- <h6 class="text-center text-light pt-4"> © By Rahul</h6>
			<p class="text-center text-light m-auto pb-4">Designed with love by <a href="" class="text-warning"> ahul </a></p> -->

            <div class="container">

            <div class="row poppins-regular-400">
                
                <div class="col-xl-3 col-lg-3 col-md-3 col-sm-6 col-6">

                    <!-- <h3 class="orange-color mt-4">  </h3> -->
                    <a class="navbar-brand text-light mt-5" href="#" style="height: auto;width: 20%;">
                        Logo 
                    </a>

                    <p style="font-size:0.8rem;color: #ffff;">  Rahul Page <br>
                            lorem ipsum, <br> address <br>
                            Contact : 12364<br>
                            11:00 a.m.- 1:00 p.m.</p>

                    <!-- <div class="social-links mb-3">
                        <a href="#" class="facebook"> <i class=" fa fa-facebook"> </i> </a>
                        <a href="#" class="instagram"> <i class=" fa fa-instagram"> </i> </a>
                        <a href="#" class="linkedin"> <i class=" fa fa-linkedin"> </i> </a>
                        <a href="#" class="twitter"> <i class=" fa fa-twitter"> </i> </a>   
                    </div> -->

                </div>


                <div class="col-xl-3 col-lg-3 col-md-3 col-sm-6 col-6">

                    <p class="orange-color" style="font-size: 1.1rem;margin-top: 3rem; margin-left: 2.2rem;"> Beneficiary </p>
                    
                    <ul style="list-style-type:none;">

                        <li>
                            <a class="text-light font-weight-lighter" href="#"> Individual </a>
                        </li>

                        <li class="mt-2">
                            <a class="text-light font-weight-lighter" href="#"> NGO </a>
                        </li>

                    </ul>

                </div>

                <div class="col-xl-3 col-lg-3 col-md-3 col-sm-6 col-6">

                    <p class="orange-color" style="font-size: 1.1rem;margin-top: 3rem; margin-left: 2.2rem;"> Get Involved </p>
                    
                    <ul style="list-style-type:none;">

                        <li>
                            <a class="text-light font-weight-lighter" href="#"> Anubhav </a>
                        </li>

                        <li class="mt-2">
                            <a class="text-light font-weight-lighter" href="#"> Partner with us </a>
                        </li>

                        <li class="mt-2">
                            <a class="text-light font-weight-lighter" href="#"> volunteer </a>
                        </li>

                    </ul>


                </div>

                <div class="col-xl-3 col-lg-3 col-md-3 col-sm-6 col-6">

                    <p class="orange-color" style="font-size: 1.1rem;margin-top: 3rem; margin-left: 2.2rem;"> Donor </p>
                    
                    <ul style="list-style-type:none;">

                        <li>
                            <a class="text-light font-weight-lighter" href="#"> Individual </a>
                        </li>

                        <li class="mt-2">
                            <a class="text-light font-weight-lighter" href="#"> small corporate / Trust </a>
                        </li>

                        <li class="mt-2">
                            <a class="text-light font-weight-lighter" href="#"> Big corporate </a>
                        </li>

                    </ul>
                    
                </div>

            </div>

            <h6 class="text-center text-light mt-4" style="font-size: 0.8rem;"> By Rahul </h6>
            <p class="text-center text-light m-auto pb-4" style="font-size: 0.8rem;">Designed with love by <a href="" class="text-warning"> Rahul </a></p>

            </div>

            <button type="" id="topBtn"><i class="fa fa-arrow-up "></i></button>

		</div>



	</div>	
</template>

<style>
	
	#foot{
		background-color: rgb(101, 62, 60);
	}

	#topBtn{
        position:fixed;
        bottom: 40px;
        right: 40px;
        font-size: 22px;
        width:50px;
        height: 50px;
        background: #F08423;
        color: white;
        border: none;
        cursor: pointer;
    }

    #topBtn:focus{
    	border-color: red;
        outline: none;
    }


    @media(min-width: 1024px){


}


    @media(min-width:769px) and (max-width: 991px){


        

    }


    @media(min-width:769px) and (max-width: 1023px){

         

}



    @media(min-width:576px) and (max-width: 768px){

}




    @media(max-width: 575px){

       

}



</style>

<script>


    export default{


  mounted(){

             $(document).ready(function(){

           
            $(window).scroll(function(){
                if($(this).scrollTop() > 40){
                    $('#topBtn').fadeIn();
            }else{
                $('#topBtn').fadeOut();
           } 
        });


            $('#topBtn').click(function(){
                $("html,body").animate({scrollTop:0},400);
            });

    });

            
    }

}

</script>