$(document).ready(function() {
    $(".content").hide();
    $(".content").fadeIn(500);
    
    $("#navbar-home").on("click", function() {
		$(".dynamic").load("../partials/home.html").hide().fadeIn(500);
    });
    
    $("#navbar-about").on("click", function() {
		$(".dynamic").load("../partials/about.html").hide().fadeIn(500);;
    });
    
    $("#navbar-work").on("click", function() {
        $(".dynamic").load("../partials/work.html").hide();
        function GridLoad() {
          // init Masonry
          var $grid = $('.grid').masonry({
            itemSelector: '.grid-item',
            columnWidth: '.grid-sizer',
            percentPosition: true
          });

          $grid.imagesLoaded().progress( function() {
            $grid.masonry('layout');
          });
        }
        setTimeout(GridLoad, 300);
        $(".dynamic").fadeTo(500, 1);
    });
    
    $("#navbar-resume").on("click", function() {
		$(".dynamic").load("../partials/resume.html").hide().fadeIn(500);
    });
    
    $("#navbar-contact").on("click", function() {
		$(".dynamic").load("../partials/contact.html").hide().fadeIn(500);
    });
    
});