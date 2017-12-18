require(['jquery', 'jquery/ui'], function($){
    $(document).ready(function() {
       $("dt.Color").click(function(){
            $(".filter-options-content.Color").toggle();
            $("i", this).toggleClass("fa fa-angle-down fa fa-angle-up");
        });
        $("dt.Manufacturer").click(function(){
            $(".filter-options-content.Manufacturer").toggle();
            $("i", this).toggleClass("fa fa-angle-down fa fa-angle-up");
        });
        $("dt.Price").click(function(){
            $(".filter-options-content.Price").toggle();
            $("i", this).toggleClass("fa fa-angle-down fa fa-angle-up");
        });
    });
});