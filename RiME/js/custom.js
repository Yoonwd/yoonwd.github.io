$(document).ready(function(){
    $(".top").on("mousemove",function(e){
		var posX=e.pageX;
		var posY=e.pageY;
        $(".bird").css({"right":80-(posX/100),"bottom":100-(posY/100)})
    })

});

$(window).on('load', function () {
                $('.swipebox').swipebox();
});
            function openNav() {
                document.getElementById("mySidenav").style.width = "300px";
            }
            function closeNav() {
                document.getElementById("mySidenav").style.width = "0";
            }