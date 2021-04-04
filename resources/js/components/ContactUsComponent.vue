<template>
	<div>

		<!-------- ############# Pre Header ################################ ------------>

        <preheader-component></preheader-component>


        <!------ Background Image  ------------------------>
            
        <div class="jumbotron-fluid contact-jmbo" style="height: 45vh;">
          
            <postheader-component></postheader-component>

                <!-- <h1 class="text-center" style="padding-top: 6rem; color:darkorange;" id="h1text">  Contact Us  </h1>     -->
        </div>


        <!----------------------  contact -------------------------------->
        <!-- <div class="container mb-5"> -->
                <contact-component></contact-component>
        <!-- </div> -->

        <!--------------  Footer ---------------------------------------->
        <footer-component></footer-component> 

	</div>
</template>

<style scoped>
        
        /*.jumbotron-fluid1{
        height: 300px;
        width: 100%;
    }
        */

        /*.img-jmbo1{

        background-image: url("http://synchsofthq.development/anubhav/public/images/Baner/contact us.jpg");
        height: 300px;
        width: 100%;
        background-repeat:no-repeat;
        background-size: cover;
        
    }*/

    .jmbo1-text {

        height: 50vh;
        display: flex;
        text-align: center;
        justify-content: center;
    }

#h1text{

        font-family: "Lato", sans-serif;
        font-size: 3rem;
        font-weight: 100;
}

</style>