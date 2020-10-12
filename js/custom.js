$(document).ready(function(){

  var winH = $(window).height(),
      upperH = $(".upper_bar").innerHeight(),
      navH = $(".navbar").innerHeight();
  $(".slider").height(winH - (upperH + navH));

  $(".navbar-toggler").click(function(){
    $(this).toggleClass('change');
});
});
