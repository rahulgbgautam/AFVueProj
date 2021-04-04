<template>
	<div>

		 <!-------- ############# Pre Header ################################ ------------>

        <preheader-component></preheader-component>

        
        <div class="jumbotron-fluid donor-jmbo">

            <postheader-component></postheader-component>

        </div>



		<div class="container"> 

		<div class="row mt-5 mb-5">
			<div class="col-4">
				<div class="list-group" id="list-tab" role="tablist">
					<a class="list-group-item list-group-item-action list-group-item-color active" id="list-home-list" data-toggle="list" href="#list-home" role="tab" aria-controls="home">Individual</a>
					<a class="list-group-item list-group-item-action list-group-item-color" id="list-profile-list" data-toggle="list" href="#list-profile" role="tab" aria-controls="profile">Small Corporate / Trust</a>
					<a class="list-group-item list-group-item-action list-group-item-color" id="list-messages-list" data-toggle="list" href="#list-messages" role="tab" aria-controls="messages">Big Corporate</a>
				</div>
			</div>
			<div class="col-8">
				<div class="tab-content" id="nav-tabContent">
					<div class="tab-pane fade show active" id="list-home" role="tabpanel" aria-labelledby="list-home-list"> 

						<div class="card" style="padding: 15px;">

			                 <h3 class="poppins-medium-500" style="font-weight: 100; font-size: 24px;"> Indidual </h3>
			                 <p class="poppins-regular-400 mt-2" style="font-weight:200;color: #555; font-size: 14px;">Lorem ipsum dolor sit amet,  consectetur
			                  adipisicing elit. Fugit, error amet numquam iure provident voluptate esse quasi, veritatis totam voluptas
			                  nostrum quisquam eum porro a pariatur veniam.
			                 </p>
                             

						<div class="table-responsive">
							<table class="table table-bordered">
								<thead>
									<tr>
										<th>#</th>
										<th>Firstname</th>
										<th>Lastname</th>
										<th>Age</th>
										<th>City</th>
										<th>Country</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td>1</td>
										<td>Anna</td>
										<td>Pitt</td>
										<td>35</td>
										<td>New York</td>
										<td>USA</td>
									</tr>
								</tbody>
							</table>
						</div>

						</div>

					</div>

					<div class="tab-pane fade" id="list-profile" role="tabpanel" aria-labelledby="list-profile-list">
						
						<div class="card" style="padding: 15px;">

			                 <h3 class="poppins-medium-500" style="font-weight: 100; font-size: 24px;"> Small Corporate / Trust </h3>
			                 <p class="poppins-regular-400 mt-2" style="font-weight:200;color: #555; font-size: 14px;">Lorem ipsum dolor sit amet,  consectetur
			                  adipisicing elit. Fugit, error amet numquam iure provident voluptate esse quasi, veritatis totam voluptas
			                  nostrum quisquam eum porro a pariatur veniam.
			                 </p>
                             
                  		


						<div class="table-responsive">
							<table class="table table-bordered">
								<thead>
									<tr>
										<th>#</th>
										<th>Firstname</th>
										<th>Lastname</th>
										<th>Age</th>
										<th>City</th>
										<th>Country</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td>1</td>
										<td>Anna</td>
										<td>Pitt</td>
										<td>35</td>
										<td>New York</td>
										<td>USA</td>
									</tr>
								</tbody>
							</table>
						</div>

						</div>

					</div>

					<div class="tab-pane fade" id="list-messages" role="tabpanel" aria-labelledby="list-messages-list">
						
						<div class="card" style="padding: 15px;">

			                 <h3 class="poppins-medium-500" style="font-weight: 100; font-size: 24px;"> Big Corporate </h3>
			                 <p class="poppins-regular-400 mt-2" style="font-weight:200;color: #555; font-size: 14px;">Lorem ipsum dolor sit amet,  consectetur
			                  adipisicing elit. Fugit, error amet numquam iure provident voluptate esse quasi, veritatis totam voluptas
			                  nostrum quisquam eum porro a pariatur veniam.
			                 </p>
                             
						<div class="table-responsive">
							<table class="table table-bordered">
								<thead>
									<tr>
										<th>#</th>
										<th>Firstname</th>
										<th>Lastname</th>
										<th>Age</th>
										<th>City</th>
										<th>Country</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td>1</td>
										<td>Anna</td>
										<td>Pitt</td>
										<td>35</td>
										<td>New York</td>
										<td>USA</td>
									</tr>
								</tbody>
							</table>
						</div>

						</div>

					</div>

					<!-- <div class="tab-pane fade" id="list-settings" role="tabpanel" aria-labelledby="list-settings-list">
						
						<div class="card mt-4" style="padding: 15px;">

			                 <h3 class="poppins-medium-500" style="font-weight: 100; font-size: 24px;"> Indidual </h3>
			                 <p class="poppins-regular-400 mt-2" style="font-weight:200;color: #555; font-size: 14px;">Lorem ipsum dolor sit amet,  consectetur
			                  adipisicing elit. Fugit, error amet numquam iure provident voluptate esse quasi, veritatis totam voluptas
			                  nostrum quisquam eum porro a pariatur veniam.
			                 </p>
                             
                  		


						<div class="table-responsive">
							<table class="table table-bordered">
								<thead>
									<tr>
										<th>#</th>
										<th>Firstname</th>
										<th>Lastname</th>
										<th>Age</th>
										<th>City</th>
										<th>Country</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td>1</td>
										<td>Anna</td>
										<td>Pitt</td>
										<td>35</td>
										<td>New York</td>
										<td>USA</td>
									</tr>
								</tbody>
							</table>
						</div>

						</div>

					</div> -->
				</div>
			</div>

		</div>
	</div>

	<!--------------  Footer ---------------------------------------->
        <footer-component></footer-component>

</div>	
</template>

<style scoped>

.list-group-item-color{
	color: #F08423;
}

.list-group-item-color:hover{

	color:#F08423;
}

.list-group-item-action.active{
	background-color: #F08423;
	color:#ffff;
}

.list-group-item.active {
    border-color: #F08423;
}

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


</style>

<script>

	export default{

	}

</script>