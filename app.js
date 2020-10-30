var a = document.getElementById('preloader');
		function myfun(){
			a.style.display = "none";
		}

$(document).ready(function () {
  $("#autoWidth,#autoWidth2").lightSlider({
    autoWidth: true,
    loop: true,
    onSliderLoad: function () {
      $("#autoWidth,#autoWidth2").removeClass("cS-hidden");
    },
  });
});
