<template>
	<div>

		<!-- <div class="container"> -->

			<div class="row mt-2">
				
				<div class="col-lg-4 col-sm-12">

					<div class="card">
					<img src="images/avtar.png" class=" card-img-top rounded-circle" style="height: 100px; width: 100px; margin: auto; margin-top: 1rem;">

					<div class="card-body">
						<p class="card-title text-center poppins-medium-500"> Sumant  Agarwal </p>
						<p class="card-text text-center poppins-regular-400" style="font-size: 12px;"> Sumant  Agarwal  is  a  Fellow  Chartered <span class="dots">...</span> <span class="readmore"> Accountant  of  40 Years standing in practice and having a vast experience   of working in philanthropic work and social work with  NGOs  for  the  masses  and  downtrodden in  the  field  of  providing education to the rural children living in the poverty and also working with NGOs in health care and physically handicapped to bring these children and young boys and girls to integrate them into the main stream of the society. He has vast experience in the ways and means to generate financial help for funding of these projects under the Corporate Social Responsibility and otherwise. </span> </p>
						<a class="readmore-btn"> Read More </a>
					</div>
					</div>

				</div>

				<div class="col-lg-4 col-sm-12">

					<div class="card">
					<img src="images/avtar.png" class=" card-img-top rounded-circle" style="height: 100px; width: 100px; margin: auto; margin-top: 1rem;">

					<div class="card-body">
						<p class="card-title poppins-medium-500 text-center"> Rajesh  Goyal </p>
						<p class="card-text poppins-regular-400 text-center" style="font-size: 12px;"> Rajesh  Goyal  is  a  fellow  cost  and  works <span class="dots">...</span> <span class="readmore">  accountant  of  30  years  of standing  and    20  Years   in  practice and  a  commerce  graduate   from  SRCC  ,  Delhi University, having a vast experience of working    in  the field  of socio  economic projects  for the upliftment of rural and aadivasi areas of this country for education, healthcare and sanskar siksha in a big way. He is instrumental in leading large NGOs working in the field of education at the helm of affairs of the same.  As a social reformers and philanthropist he is accepted as a young game changer in the changing environment in bridging the gap of rural and the urban masses to the benefit of both.
						</span></p>
						<a class="readmore-btn"> Read More </a>
					</div>
					</div>

				</div>


				<div class="col-lg-4 col-sm-12">
					<div class="card">
					<img src="images/avtar.png" class="card-img-top rounded-circle" style="height: 100px; width: 100px; margin: auto; margin-top: 1rem;">

					<div class="card-body">
						<p class="card-title poppins-medium-500 text-center"> Rashmi Agarwal </p>
						<p class="card-text poppins-regular-400 text-center" style="font-size: 12px;">Rashmi Agarwal is a graduate <span class="dots">...</span> <span class="readmore"> from university of Delhi in Home science and a housewife. She is part of many social  forums to bring the change in the society by exchange of views and guiding them through a knowledge and experience inherited by from her family of social workers.</span></p>
						<a class="readmore-btn"> Read More </a>
					</div>
					</div>

				</div>						

			</div>
			

			<div class="row mt-4 mb-2">
				
				
				<div class="col-lg-4 col-sm-12">
					<div class="card">
					<img src="images/avtar.png" class=" card-img-top rounded-circle" style="height: 100px; width: 100px; margin: auto; margin-top: 1rem;">

					<div class="card-body">
						<p class="card-title poppins-medium-500 text-center"> Nishu  Goyal </p>
						<p class="card-text poppins-regular-400 text-center" style="font-size: 12px;"> Nishu  Goyal  is  a  graduate  from  University  of  Delhi  and  a  housewife working <span class="dots">...</span> <span class="readmore"> in the field of social upliftment  of rural masses and the underprivileged children of aadivasi areas by helping in taking education to their villages. She is the force behind the  young  Indian  independent  intelligent  women  who believes  in  working  for  the masses  alongwith  laying  standard  of  Indian  sanskar’s  for  her  family  and  people associated with her. She is associated with many NGOs working in the field for last 20 years and would be providing the most needed guidance on the Social Upliftment to this website.</span></p>
						<a class="readmore-btn"> Read More </a>
					</div>
					</div>

				</div>


				<div class="col-lg-4 col-sm-12">
					<div class="card">
					<img src="images/avtar.png" class=" card-img-top rounded-circle" style="height: 100px; width: 100px; margin: auto; margin-top: 1rem;">

					<div class="card-body">
						<p class="card-title poppins-medium-500 text-center">Neha  Agarwal </p>
						<p class="card-text poppins-regular-400 text-center" style="font-size: 12px;">Neha  Agarwal  is  a  Post  graduate  in  foods  and  nutrition,<span class="dots">...</span> <span class="readmore">   child development  and  is  presently  engaged  in  education  field  in  developing  projects  of education for  rural education system  in the country.</span> </p>
						<a class="readmore-btn"> Read More</a>
					</div>
					</div>

				</div>

			</div>

		<!-- </div> -->
 
	</div>
</template>

<style scoped>
	
	.readmore{
		display: none;
	}

</style>


<script>
	
$(document).ready(function(){

	$('.readmore-btn').click(function(){

		if($(this).html() == 'Read More'){

				$('.dots').hide();
				$('.readmore').show();
				$(this).html('Read Less');
		}else{

				$('.dots').show();
				$('.readmore').hide();
				$(this).html('Read More');

		}

	});     

});

</script>