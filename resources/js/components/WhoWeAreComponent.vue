<template>
	<div>

		<!-------- Header Section ------------------->
        <header-component></header-component>

        <!------ Background Image  ------------------------>
            
        <bgimage-component></bgimage-component>


        <div class="container"> 
		<div class="row">
			<div class="col-xl-4 col-lg-4 col-md-12 col-sm-12 mt-4">
				<div class="list-group" id="list-tab" role="tablist">

					<a class="list-group-item list-group-item-action active" id="list-education-list" data-toggle="list" href="#list-education" role="tab" aria-controls="education">About Us</a>

					<a class="list-group-item list-group-item-action list-group-item-color" id="list-health-list" data-toggle="list" href="#list-health" role="tab" aria-controls="health">Promoters</a>

					<a class="list-group-item list-group-item-action list-group-item-color" id="list-skill-list" data-toggle="list" href="#list-skill" role="tab" aria-controls="skill">Our Team</a>

				</div>
			</div>
			<div class="col-xl-8 col-lg-8 col-md-12 col-sm-12">
				<div class="tab-content" id="nav-tabContent">

					<div class="tab-pane fade show active" id="list-education" role="tabpanel" aria-labelledby="list-education-list"> 

							<aboutus-component></aboutus-component>

					</div>

					<div class="tab-pane fade" id="list-health" role="tabpanel" aria-labelledby="list-health-list"> 
							
        					<promoters-component></promoters-component>

					</div>

					<div class="tab-pane fade" id="list-skill" role="tabpanel" aria-labelledby="list-skill-list"> 
							
							 <ourteam-component></ourteam-component>

					</div>


				</div>
			</div>

		</div>

		</div>


		<!--------------  Footer ---------------------------------------->
        <footer-component></footer-component>

	</div>
</template>

<style scoped>

	

</style>

<script>
	export default{

	}
</script>