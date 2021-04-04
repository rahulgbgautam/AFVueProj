<template>
	<div>

        <!-------- ############# Pre Header ################################ ------------>

        <preheader-component></preheader-component>

        <postheader-component></postheader-component>

        <div class="jumbotron-fluid about-jmbo"></div>


        <!----------------------   About Us ----------------------->
        <div class="container">
            <h2 class="text-center mt-4 poppins-medium-500" style="color: #555;"> About Us </h2>
            <div class="row">
                
                <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 mt-3 mb-3 poppins-regular-400">
                    
                    <p> We are a team of dedicated social activist and workers who have vast experience in SocioEconomic  programs for upliftment of underprivileged in rural and urban countryside.
                        We specialize in collecting like minded NGOs who have dedicated their resources to run projects
                        in rural areas on various streams given in the para of “our initiative”. </p>

                </div>

            </div>
        </div>


        <!--------------  Footer ---------------------------------------->
        <footer-component></footer-component>

	</div>
</template>


<style scoped>

.jumbotron-fluid{

    /*max-height: 350px;
    min-height: 300px;*/
    width: 100vw;

    /*background-size: 100%;*/


}



  @media(min-width: 1200px){


    .jumbotron-fluid{

        /*max-height:350px ;
        min-height:300px ;*/
        height: 300px;

    }
  
        
}


    @media(min-width:992px) and (max-width: 1199px){


        .jumbotron-fluid{

        height:200px ;

    }


}



    @media(min-width:768px) and (max-width: 991px){


        .jumbotron-fluid{

        height:180px ;

    }


}



@media(min-width:576px) and (max-width: 767px){


        .jumbotron-fluid{

        height:150px ;

    }


}




    @media(max-width: 575px){

        
        .jumbotron-fluid{

        height:100px ;

    }


}

</style>