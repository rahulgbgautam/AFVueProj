<template>
	<div>

		<!-------- Header Section ------------------->
        <header-component></header-component>

		<div class="container"> 
		
		<div class="row mt-5 mb-5">
			
			<div class="col-xl-4 col-lg-4 col-md-4 mt-5 col-sm-12">
				<div class="list-group" id="list-tab" role="tablist">

					<h4 style="font-weight:200;color: #555;"> Payment Method </h4>
					<a class="list-group-item list-group-item-action active" id="list-Debit-list" data-toggle="list" href="#list-Debit" role="tab" aria-controls="Debit">Debit Card</a>

					<a class="list-group-item list-group-item-action list-group-item-color" id="list-Credit-list" data-toggle="list" href="#list-Credit" role="tab" aria-controls="Credit"> Credit Card</a>

					<a class="list-group-item list-group-item-action list-group-item-color" id="list-Net-list" data-toggle="list" href="#list-Net" role="tab" aria-controls="Net"> Net Banking </a>

					<a class="list-group-item list-group-item-action list-group-item-color" id="list-UPI-list" data-toggle="list" href="#list-UPI" role="tab" aria-controls="UPI">UPI</a>
				</div>
			</div>

			<div class="col-xl-8 col-lg-8 col-md-8 col-sm-12 mt-5">
				<div class="tab-content" id="nav-tabContent">

					<div class="tab-pane fade show active" id="list-Debit" role="tabpanel" aria-labelledby="list-Debit-list"> 
						<div class="container" style="width: 680px;margin-left: -30px;">


							<div class="card mb-5" style="margin-top: 33px;">
						    	
						    	<div class="card-body">

									<h5> Fill Debit Card details </h5>

						    		<form>

								<div class="row mt-4">

										<div class="col-lg-8">
											
											<div class="form-group">
												<label for="name"> Name On Card </label>
												<input type="text" name="name" class="form-control" id="name">
											</div>

										</div>

										<div class="col-lg-4">
											
											<div class="form-group">
												<label for="type"> Card Type </label>
												<input type="text" name="type" class="form-control" id="type">
											</div>

										</div>

										<!-- <div class="col-lg-4">
											
											<div class="form-group">
												<label for="number"> Card Number: </label>
												<input type="text" name="number" id="number">
											</div>

										</div> -->

								</div>

								<div class="row">
									
									<div class="col-lg-7">
											
											<div class="form-group">
												<label for="number"> Card Number </label>
												<input type="text" name="number" class="form-control" id="number">
											</div>

									</div>

									<div class="col-lg-3">
											
											<div class="form-group">
												<label for="edate"> Expiry Date </label>
												<input type="text" name="edate" class="form-control" id="edate">
											</div>

										</div>

										<div class="col-lg-2">
											
											<div class="form-group">
												<label for="cvv"> CVV </label>
												<input type="text" name="cvv" class="form-control" id="cvv">
											</div>

										</div>


								</div>


								<!-- <div class="row">

										<div class="col-lg-4">
											
											<div class="form-group">
												<label for="edate"> Expiry Date: </label>
												<input type="text" name="edate" class="form-control" id="edate">
											</div>

										</div>

										<div class="col-lg-4">
											
											<div class="form-group">
												<label for="cvv"> CVV: </label>
												<input type="text" name="cvv" class="form-control" id="cvv">
											</div>

										</div>

								</div> -->

								<div class="row d-flex justify-content-start">

										<div class="col-lg-4">
											
											<div class="form-group">
											
												<input type="submit" name="submit" value="continue" class="form-control" id="submit" style="margin-top: 20px;height: 43px; padding: 5px;">
											</div>

										</div>

								</div>


							</form>

						    	</div>

						  	</div>

							

						</div>

					</div>	

					<div class="tab-pane fade show" id="list-Credit" role="tabpanel" aria-labelledby="list-Credit-list"> 
						
						<div class="container" style="width: 680px;margin-left: -30px;">


							<div class="card mb-5" style="margin-top: 33px;">
						    	
						    	<div class="card-body">

									<h5> Fill Credit Card details </h5>

						    		<form>

								<div class="row mt-4">

										<div class="col-lg-8">
											
											<div class="form-group">
												<label for="name"> Name On Card </label>
												<input type="text" name="name" class="form-control" id="name">
											</div>

										</div>

										<div class="col-lg-4">
											
											<div class="form-group">
												<label for="type"> Card Type </label>
												<input type="text" name="type" class="form-control" id="type">
											</div>

										</div>

										<!-- <div class="col-lg-4">
											
											<div class="form-group">
												<label for="number"> Card Number: </label>
												<input type="text" name="number" id="number">
											</div>

										</div> -->

								</div>

								<div class="row">
									
									<div class="col-lg-7">
											
											<div class="form-group">
												<label for="number"> Card Number </label>
												<input type="text" name="number" class="form-control" id="number">
											</div>

									</div>

									<div class="col-lg-3">
											
											<div class="form-group">
												<label for="edate"> Expiry Date </label>
												<input type="text" name="edate" class="form-control" id="edate">
											</div>

										</div>

										<div class="col-lg-2">
											
											<div class="form-group">
												<label for="cvv"> CVV </label>
												<input type="text" name="cvv" class="form-control" id="cvv">
											</div>

										</div>


								</div>


								<!-- <div class="row">

										<div class="col-lg-4">
											
											<div class="form-group">
												<label for="edate"> Expiry Date: </label>
												<input type="text" name="edate" class="form-control" id="edate">
											</div>

										</div>

										<div class="col-lg-4">
											
											<div class="form-group">
												<label for="cvv"> CVV: </label>
												<input type="text" name="cvv" class="form-control" id="cvv">
											</div>

										</div>

								</div> -->

								<div class="row d-flex justify-content-start">

										<div class="col-lg-4">
											
											<div class="form-group">
											
												<input type="submit" name="submit" value="continue" class="form-control" id="submit" style="margin-top: 20px;height: 43px; padding: 5px;">
											</div>

										</div>

								</div>


							</form>

						    	</div>

						  	</div>

							

						</div>


					</div>	

					<div class="tab-pane fade show" id="list-Net" role="tabpanel" aria-labelledby="list-Net-list"> 
						

						<div class="container" style="width: 680px;margin-left: -30px;">


							<div class="card mb-5" style="margin-top: 33px;">
						    	
						    	<div class="card-body">

									<h5 class="ml-4"> Net Banking </h5>

									<div class="row mt-4">

										<div class="col-xl-4 col-lg-4 col-md-4 col-sm-12">

											<div class="card ml-4 shadoww" style="width: 150px; height: 100px;">
												<div class="card-body">
													<img src="images/Payment/sbi.png" style="height: 30px; width: 80px;">
													<p class="text-center mt-4"> SBI </p>
												</div>
											</div>

										</div>

										<div class="col-xl-4 col-lg-4 col-md-4 col-sm-12">
											<div class="card ml-4 shadoww" style="width: 150px; height: 100px;"> 
												<div class="card-body">
													<img src="images/Payment/sbi.png" style="height: 30px; width: 80px;">
													<p class="text-center mt-4"> SBI </p>
												</div>
											</div>	
										</div>

										<div class="col-xl-4 col-lg-4 col-md-4 col-sm-12">
											<div class="card ml-4 shadoww" style="width: 150px; height: 100px;">
												<div class="card-body">
													<img src="images/Payment/sbi.png" style="height: 30px; width: 80px;">
													<p class="text-center mt-4"> SBI </p>
												</div>
											</div>
										</div>

									</div>

									<div class="row mt-4">

										<div class="col-xl-4 col-lg-4 col-md-4 col-sm-12">
											<div class="card ml-4 shadoww" style="width: 150px; height: 100px;">
												<div class="card-body">
													<img src="images/Payment/sbi.png" style="height: 30px; width: 80px;">
													<p class="text-center mt-4"> SBI </p>
												</div>
											</div>
										</div>

										<div class="col-xl-4 col-lg-4 col-md-4 col-sm-12">
											<div class="card ml-4 shadoww" style="width: 150px; height: 100px;">
												<div class="card-body">
													<img src="images/Payment/sbi.png" style="height: 30px; width: 80px;">
													<p class="text-center mt-4"> SBI </p>
												</div>
											</div>	
										</div>

										<div class="col-xl-4 col-lg-4 col-md-4 col-sm-12">
											<div class="card ml-4 shadoww" style="width: 150px; height: 100px;">
												<div class="card-body">
													<img src="images/Payment/sbi.png" style="height: 30px; width: 80px;">
													<p class="text-center mt-4"> SBI </p>
												</div>
											</div>
										</div>

									</div>

									<div class="row mt-4">

										<div class="col-xl-6 col-lg-6 col-md-6 col-sm-12">

											<select class="form-control ml-4">
												<option>Other Options </option>
												<option>1</option>
												<option>2</option>
												<option>3</option>
											</select>

										</div>	

									</div>

									<div class="row d-flex justify-content-start">

										<div class="col-lg-4">
											
											<div class="form-group">
											
												<input type="submit" name="submit" value="continue" class="form-control ml-4" id="submit" style="margin-top: 20px;height: 43px; padding: 5px;">
											</div>

										</div>

								</div>


						    	</div>

						  	</div>

						</div>

					</div>	


					<div class="tab-pane fade show" id="list-UPI" role="tabpanel" aria-labelledby="list-UPI-list"> 
							
							<div class="container" style="width: 680px;margin-left: -30px;">


							<div class="card" style="margin-top: 33px;">
						    	
						    	<div class="card-body">

									<h5 class="ml-4"> upi </h5>

									<div class="row mt-4">

										<div class="col-xl-4 col-lg-4 col-md-4 col-sm-12">

											<div class="card ml-4 shadoww" style="width: 150px; height: 110px;">
												<div class="card-body text-center">
													<img src="images/Payment/upi.png" class="img-fluid">
													<!-- <p class="text-center mt-4"> SBI </p> -->
												</div>
											</div>

										</div>

										<div class="col-xl-4 col-lg-4 col-md-4 col-sm-12">
											
											<div class="card ml-4 shadoww" style="width: 150px; height: 110px;">
												<div class="card-body text-center">
													<img src="images/Payment/upi.png" class="img-fluid">
													<!-- <p class="text-center mt-4"> SBI </p> -->
												</div>
											</div>

										</div>

										<div class="col-xl-4 col-lg-4 col-md-4 col-sm-12">
											
											<div class="card ml-4 shadoww" style="width: 150px; height: 110px;">
												<div class="card-body text-center">
													<img src="images/Payment/upi.png" class="img-fluid">
													<!-- <p class="text-center mt-4"> SBI </p> -->
												</div>
											</div>

										</div>

									</div>

									<div class="row mt-4">

										<div class="col-xl-4 col-lg-4 col-md-4 col-sm-12">
											
											<div class="card ml-4 shadoww" style="width: 150px; height: 110px;">
												<div class="card-body text-center">
													<img src="images/Payment/upi.png" class="img-fluid">
													<!-- <p class="text-center mt-4"> SBI </p> -->
												</div>
											</div>

										</div>

										<div class="col-xl-4 col-lg-4 col-md-4 col-sm-12">
											
											<div class="card ml-4 shadoww" style="width: 150px; height: 110px;">
												<div class="card-body text-center">
													<img src="images/Payment/upi.png" class="img-fluid">
													<!-- <p class="text-center mt-4"> SBI </p> -->
												</div>
											</div>

										</div>

										<div class="col-xl-4 col-lg-4 col-md-4 col-sm-12">
											
											<div class="card ml-4 shadoww" style="width: 150px; height: 110px;">
												<div class="card-body text-center">
													<img src="images/Payment/upi.png" class="img-fluid">
													<!-- <p class="text-center mt-4"> SBI </p> -->
												</div>
											</div>
											
										</div>

									</div>

									<!-- <div class="row mt-4">

										<div class="col-xl-6 col-lg-6 col-md-6 col-sm-12">

											<select class="form-control ml-4">
												<option>Other Options </option>
												<option>1</option>
												<option>2</option>
												<option>3</option>
											</select>

										</div>	

									</div> -->

									<div class="row d-flex justify-content-start">

										<div class="col-lg-4">
											
											<div class="form-group">
											
												<input type="submit" name="submit" value="continue" class="form-control ml-4" id="submit" style="margin-top: 20px;height: 43px; padding: 5px;">
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

		</div>			

		<!--------------  Footer ---------------------------------------->
        <footer-component></footer-component> 

	</div>
</template>

<script>
	
	$(document).ready(function(){
  		$(".shadoww").click(function(){
    		$(this).addClass("shadow");
  		});
	});

</script>