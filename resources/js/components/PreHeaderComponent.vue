<template>
	<div>
		
		<nav class="navbar navbar-expand-sm  navbar-dark pt-1 pb-1 pl-4 pr-4">
			
			
			<!-- Brand -->
			<a class="navbar-brand text-dark " :href="url">
				Logo
			</a>


		  <!-- <form class="form-inline position-relative header-form md-noshow sm-noshow m-noshow">
		    
		    <input class="form-control position-absolute pl-4 ml-4" type="text" placeholder="Search Here" style="width: 100%; border-radius: 10px; background-color: #f2f2f2">
		    
		    <button class="btn position-absolute" type="submit" style="left:95%;box-shadow: none;">
		    	
		    	<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
				width="24" height="24"
				viewBox="0 0 172 172"
				style=" fill:#000000;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g fill="#cccccc"><path d="M64.5,14.33333c-27.6214,0 -50.16667,22.54527 -50.16667,50.16667c0,27.6214 22.54527,50.16667 50.16667,50.16667c12.52732,0 23.97256,-4.67249 32.7819,-12.31771l3.05143,3.05143v9.26628l43,43l14.33333,-14.33333l-43,-43h-9.26628l-3.05143,-3.05143c7.64521,-8.80934 12.31771,-20.25458 12.31771,-32.7819c0,-27.6214 -22.54527,-50.16667 -50.16667,-50.16667zM64.5,28.66667c19.87509,0 35.83333,15.95824 35.83333,35.83333c0,19.87509 -15.95825,35.83333 -35.83333,35.83333c-19.87509,0 -35.83333,-15.95825 -35.83333,-35.83333c0,-19.87509 15.95824,-35.83333 35.83333,-35.83333z"></path></g></g></svg>


		    </button>

		  </form> -->

		<ul class="navbar-nav ml-auto">

			<li class="nav-item sm-noshow m-noshow mr-3">

				<form class="form-inline header-form position-relative">
		    
				    <input class="form-control pl-4 ml-4" type="text" placeholder="Search Here" style=" border-radius: 10px; background-color: #f2f2f2;border: none;">
				    
				    <button class="btn position-absolute" type="submit" style="box-shadow: none;left: 80%;">
				    	
				    	<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
						width="24" height="24"
						viewBox="0 0 172 172"
						style=" fill:#707070;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g fill="#707070"><path d="M73.45833,21.5c-28.61092,0 -51.95833,23.34743 -51.95833,51.95833c0,28.6109 23.34741,51.95833 51.95833,51.95833c11.72882,0 22.53529,-3.96669 31.24919,-10.56803l33.55876,33.55176c1.79752,1.87223 4.46675,2.62641 6.97825,1.97168c2.5115,-0.65472 4.47282,-2.61605 5.12755,-5.12755c0.65472,-2.5115 -0.09946,-5.18073 -1.97168,-6.97825l-33.55176,-33.55876c6.60135,-8.7139 10.56803,-19.52038 10.56803,-31.24919c0,-28.6109 -23.34741,-51.95833 -51.95833,-51.95833zM73.45833,35.83333c20.86462,0 37.625,16.76039 37.625,37.625c0,10.01796 -3.89127,19.06549 -10.2181,25.7902c-0.61586,0.44585 -1.15686,0.98684 -1.6027,1.6027c-6.72616,6.33487 -15.77907,10.2321 -25.8042,10.2321c-20.86462,0 -37.625,-16.76039 -37.625,-37.625c0,-20.86461 16.76038,-37.625 37.625,-37.625z"></path></g></g></svg>


				    </button>

				</form>

			</li>


		  	<li class="nav-item">


			  	<div class="social-links">


			  		<button class="openBtn xl-noshow lg-noshow md-noshow" v-on:click="openSearch" style="background-color: #ffff!important"> <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
				width="24" height="24"
				viewBox="0 0 172 172"
				style=" fill:#000000;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g fill="#e67e22"><path d="M73.45833,21.5c-28.63214,0 -51.95833,23.32621 -51.95833,51.95833c0,28.63212 23.32619,51.95833 51.95833,51.95833c12.38529,0 23.77079,-4.37509 32.71191,-11.64583l35.15446,35.15446c1.34815,1.40412 3.35005,1.96971 5.23364,1.47866c1.88359,-0.49105 3.35456,-1.96202 3.84561,-3.84561c0.49105,-1.88359 -0.07455,-3.88549 -1.47866,-5.23364l-35.15446,-35.15446c7.27074,-8.94112 11.64583,-20.32663 11.64583,-32.71191c0,-28.63212 -23.32619,-51.95833 -51.95833,-51.95833zM73.45833,32.25c22.82242,0 41.20833,18.38593 41.20833,41.20833c0,11.11769 -4.38529,21.16215 -11.49886,28.56169c-0.43849,0.32229 -0.8255,0.7093 -1.14779,1.14779c-7.39953,7.11357 -17.44399,11.49886 -28.56169,11.49886c-22.82242,0 -41.20833,-18.38593 -41.20833,-41.20833c0,-22.8224 18.38591,-41.20833 41.20833,-41.20833z"></path></g></g></svg>
				</button>


	                <a href="#" class="instagram"> <i class=" fa fa-instagram"> </i> </a>
	                <a href="#" class="facebook ml-2"> <i class=" fa fa-facebook"> </i> </a>	                
	                <a href="#" class="twitter ml-2"> <i class=" fa fa-twitter"> </i> </a>
	                <a href="#" class="twitter ml-2"> <i class="fa fa-youtube-play"></i> </a>	                

	            </div>

            </li>


		</ul>


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



	</div>
</template>

<style scoped>
	
.social-links a{

    font-size: 16px;
    display: inline-block;
    background: #F08423;
    color: #ffff;
    line-height: 1;
    padding: 8px 0;
    margin-right: 4px;
    border-radius: 50%;
    text-align: center;
    width: 36px;
    height: 36px;
    transition: 0.3s;
    border: 1px solid #F08423;

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

/*.header-form{

	width: 18%;
	margin-left: 50%;

}*/

.logo{

	height: 60px;
	width: 120px;

}


.social-links a{

    font-size: 14px !important;
   
    width: 33px !important;
    height: 33px !important;

    /*margin-right: 3.5px !important;*/

    
}

   

}


@media(min-width:992px) and (max-width: 1199px){

  /*.header-form{

	width: 35%;
	margin-left: 35%;


}*/

.logo{

	height: 60px;
	width: 120px;

}


.social-links a{

    font-size: 12px !important;
   
    width: 30px !important;
    height: 30px !important;

    /*margin-right: 3.5px !important;*/

    
}


}



@media(min-width:768px) and (max-width: 991px){


.logo{

	height: 60px;
	width: 120px;

}


}



@media(min-width:576px) and (max-width: 767px){

   

.logo{

	height: 50px;
	width: 100px;

}


}




@media(min-width:429px) and (max-width: 575px){


.logo{

	height: 40px;
	width: 80px;

}


/*.search-opn{

	width: 1%;
}*/


}




@media(max-width: 428px){


.logo{

	height: 40px;
	width: 80px;

}





/*.search-opn{

	width: 1%;
}*/


.social-links a{

    font-size: 12px !important;
   
    width: 24px !important;
    height: 24px !important;

    padding: 5px 0 !important;

    margin-right: -4.5px !important;

    /*margin-right: 3.5px !important;*/

    
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

  				
			
	}

}

</script>