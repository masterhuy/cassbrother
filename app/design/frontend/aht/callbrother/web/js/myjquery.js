$(document).ready(function(){
    $(".swu").click(function(){		        
        $("i", this).toggleClass("fa fa-angle-down fa fa-angle-up");
        $(".topo").toggle();
    });
    $(".acb").click(function(){
        $(".atec").toggle();
        $("i", this).toggleClass("fa fa-angle-down fa fa-angle-up");
    });
    $(".nam").click(function(){
        $(".bnnh").toggle();
        $("i", this).toggleClass("fa fa-angle-down fa fa-angle-up");
    });
    $(".cs").click(function(){
        $(".cpts").toggle();
        $("i", this).toggleClass("fa fa-angle-down fa fa-angle-up");
    });
    $(".btn-search").click(function(){
    	$(".btn-search").toggleClass("btn-active");
		$(".search-mobile input").slideToggle("slow");
	});
	$(".btn-cart").click(function(){
    	$(".btn-cart").toggleClass("btn-active");
    	$(".col-xs-3").toggleClass("sidenav-custom");
    	$(".shopping-cart").toggle();
	});
});