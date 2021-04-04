<template>
	<div>
		
        <div class="jumbotron-fluid home-jmbo">

            <postheader-component></postheader-component>

            <div class="row d-flex justify-content-center align-items-center" style="margin-top: 13%;"> 

                <h1 class="text-center poppins-regular-400">Welcome To <br> Our Page </h1>
                <!-- <h1 class="text-center">  Our Page  </h1>
                <h1 class="text-center"> हस्तस्य भूषणं दानं </h1> -->

            </div>


            <div class="row d-flex justify-content-center align-items-center" style="margin-top: 7%;"> 

                <p class="text-center alex-brush" style="font-size: 2vw;"> Sharing From The Heart And Soul Is The Way To Care... </p>
                

            </div>


            <!-- <div class="d-flex justify-content-center align-items-center"> 

                <h1 class="text-center">Welcome To</h1>
                <h1 class="text-center">Anubhav Foundation</h1>
                <h1 class="text-center"> हस्तस्य भूषणं दानं </h1>

            </div>   -->

                   
        </div>

	</div>
</template>

<style scoped>



 @media(min-width: 1200px){

    .jumbotron-fluid{

        height: 87vh;
        
    }


    h1{

        /*color:#413330;*/
        font-size: 4vw;
        
    }

   

}


@media(min-width:992px) and (max-width: 1199px){

    .jumbotron-fluid{

        height: 70vh;

       
    }

     h1{

        /*color:#413330;*/
        font-size:4vw;
        
    }

   

}



@media(min-width:768px) and (max-width: 991px){

    .jumbotron-fluid{

        height: 50vh;
    }


    h1{

        /*color:#413330;*/
        font-size: 3vw;
        
    }

    

}



@media(min-width:576px) and (max-width: 767px){

    .jumbotron-fluid{

        height: 40vh;
    }


    h1{

        /*color:#413330;*/
        font-size: 3vw;
        
        
    }

   

}


@media(max-width: 575px){

    .jumbotron-fluid{

        height: 30vh;
    }


    h1{

        /*color:#413330;*/
        font-size: 3vw;
        
        
    }

   
    }

</style>


<script>

	export default{

      

}

</script>