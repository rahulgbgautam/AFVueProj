<template>
	<div>


		<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">Navbar</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavDropdown">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="http://example.com" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Dropdown link
        </a>
        <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <li><a class="dropdown-item" href="#">Action</a></li>
          <li><a class="dropdown-item" href="#">Another action</a></li>
          <li class="dropdown-submenu">
            <a class="dropdown-item dropdown-toggle" href="#">Submenu</a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">Submenu action</a></li>
              <li><a class="dropdown-item" href="#">Another submenu action</a></li>


              <li class="dropdown-submenu">
                <a class="dropdown-item dropdown-toggle" href="#">Subsubmenu</a>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="#">Subsubmenu action</a></li>
                  <li><a class="dropdown-item" href="#">Another subsubmenu action</a></li>
                </ul>
              </li>
              <li class="dropdown-submenu">
                <a class="dropdown-item dropdown-toggle" href="#">Second subsubmenu</a>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="#">Subsubmenu action</a></li>
                  <li><a class="dropdown-item" href="#">Another subsubmenu action</a></li>
                </ul>
              </li>



            </ul>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</nav>


	</div>
</template>

<style scoped>
	
	.dropdown-submenu {
  position: relative;
}

.dropdown-submenu a::after {
  transform: rotate(-90deg);
  position: absolute;
  right: 6px;
  top: .8em;
}

.dropdown-submenu .dropdown-menu {
  top: 0;
  left: 100%;
  margin-left: .1rem;
  margin-right: .1rem;
}

</style>

<script>


$(document).ready(function(){

	$('.dropdown-menu a.dropdown-toggle').on('click', function(e) {
  if (!$(this).next().hasClass('show')) {
    $(this).parents('.dropdown-menu').first().find('.show').removeClass('show');
  }
  var $subMenu = $(this).next('.dropdown-menu');
  $subMenu.toggleClass('show');


  $(this).parents('li.nav-item.dropdown.show').on('hidden.bs.dropdown', function(e) {
    $('.dropdown-submenu .show').removeClass('show');
  });


  return false;
});
	

});
	
</script>