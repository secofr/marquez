
$(document).ready(function() {

$(".audio-controls").hover( function(){
//	$(this).css("transform","translate3d(0px, 0px, 0px)");
//	$(this).css("opacity","0");
//	$(this).css("visibility","inherit");  
	$(".audio-controls-slider-mask").css("visibility","inherit");
	$(".audio-controls-slider-mask").css("opacity","1");
	$(".audio-controls-slider-mask").css("transform","translate3d(0px, 0px, 0px)");
	$(".audio-controls-inner").css("transform","translate3d(0px, 0px, 0px)");
	$(".audio-scrubber").css("transform","translate3d(75.2px, 0px, 0px)");
	$(".audio-scrubber").css("touch","none");
	$(".audio-scrubber").css("cursor","pointer");
	$(".js-volume-close-line").css("stroke-dasharray","50px");
	
	$(".js-volume-close-line").css("stroke-dashoffset","100px");
	$(".js-volume-waves").css("opacity","0");


//	
//	$(".audio-controls").css("transform","translate3d(-120px, 0px, 0px)");
//	$(".audio-controls-panel").css("transform","translate3d(0px, 0px, 0px)");
//	$(".audio-controls-panel").css("opacity",".3");

  },
  function() {
  //	$(this).css("transform","translate3d(0px, 0px, 0px)");
//	$(this).css("opacity","1");
//	$(this).css("visibility","inherit"); 
	$(".audio-controls-slider-mask").css("visibility","hidden");
	$(".audio-controls-slider-mask").css("opacity","0");
	$(".audio-controls-slider-mask").css("transform","translate3d(0px, 0px, 0px)");
	$(".audio-controls-inner").css("transform","translate(10%,0%) translate3d(0px, 0px, 0px)");
	$(".audio-scrubber").css("transform","translate3d(75.2px, 0px, 0px)");
	$(".audio-scrubber").css("touch-action","none");
	$(".js-volume-close-line").css("stroke-dasharray","50px");
	$(".js-volume-close-line").css("stroke-dashoffset","50px");
	$(".js-volume-waves").css("opacity","1");

//	$(".audio-controls-slider-mask").fadeOut("slow");
//	$(".audio-controls").css("transform","translate3d(0px, 0px, 0px)");
//	$(".audio-controls-panel").css("transform","translate3d(0px, 0px, 0px)");
//	$(".audio-controls-panel").css("opacity","1");
  });

//$(".btn-footer-book-share").hover( function(){
$(".footer-book-share").hover( function(){
	$(".btn-footer-book-share").css("transform","translate3d(0px, 0px, 0px)");
	$(".btn-footer-book-share").css("opacity","0");
	$(".btn-footer-book-share").css("visibility","inherit");
	$(".share-navigation").css("visibility","inherit");
	$(".share-navigation").css("opacity","1");
	$(".share-navigation").css("transform","translate3d(0px, 0px, 0px)");
	$(".audio-controls").css("transform","translate3d(-120px, 0px, 0px)");
	$(".audio-controls-panel").css("transform","translate3d(0px, 0px, 0px)");
	$(".audio-controls-panel").css("opacity",".3");
	$(".icon-share").css("opacity","1");
	$(".icon-share").css("transform","translate3d(0px, 0px, 0px)");

//	$(".footer-book-share").fadeIn("slow");

  },
  function() {
	$(".btn-footer-book-share").css("transform","translate3d(0px, 0px, 0px)");
	$(".btn-footer-book-share").css("opacity","1");
	$(".btn-footer-book-share").css("visibility","inherit");
	$(".share-navigation").css("visibility","hidden");
	$(".share-navigation").css("opacity","0");
	$(".share-navigation").css("transform","translate3d(0px, 0px, 0px)");
	$(".audio-controls").css("transform","translate3d(0px, 0px, 0px)");
	$(".audio-controls-panel").css("transform","translate3d(0px, 0px, 0px)");
	$(".audio-controls-panel").css("opacity","1");
	$(".icon-share").css("opacity","0");
	$(".icon-share").css("transform","translate3d(0px, 15x, 0px)");
//	$(".btn-footer-book-share").fadeIn("slow");
  });

$(".audio-controls").click(function () {
		if (player.isMuted()) {
			player.unMute();
			//$(".book-video-controls-play").css("opacity","0");
			//$(".book-video-controls-play").css("transform","translate3d(0px, 0px, 0px) scale(0.1, 0.1)");
			//$(".book-video-controls-pause").css("opacity","1");
			//$(".pause-bar-mask").css("transform","translate3d(0px, 0px, 0px)");
			} else {
			player.mute();
			//$(".book-video-controls-play").css("opacity","1");
			//$(".book-video-controls-play").css("transform","translate3d(0px, 0px, 0px)");
			//$(".book-video-controls-pause").css("opacity","0");
			//$(".pause-bar-mask:nth-child(1)").css("transform","translate3d(10px, 0px, 0px)");
			//$(".pause-bar-mask:nth-child(2)").css("transform","translate3d(-10px, 0px, 0px)");
			
		}
	});
	

$(".btn-close").click(function() {
		$("div.overlay-book-menu").hide();
		$(".overlay-bg").css("opacity", "0");
		//$(".overlay-bg").fadeOut(600);
	});
$(".book-menu").click(function() {
		$("div.overlay-book-menu").show();
		$(".overlay-bg").css("opacity", "1");
		//$(".overlay-bg").fadeOut(600);
	});

 $(".button").hover(
    function () {
        $(this).css("transform","translate3d(0px, 0px, 0px)");
        $(this).css("border-color", "rgba(255, 255, 255, 1)");

      },
    function () {
		$(this).css("transform","translate3d(0px, 0px, 0px)");
        $(this).css("border-color", "rgba(255, 255, 255, 0.5)");
                $(this).fadeIn(500);
      }
    );

 
   //$(".button").hover(function(){$(this).fadeOut(100);$(this).fadeIn(500);});

$(".toggle-inner").click(
	function () { 
		if (player.getPlayerState() == 2) {
			player.playVideo();	
			$(".book-video-controls-play").css("opacity","0");
			$(".book-video-controls-play").css("transform","translate3d(0px, 0px, 0px) scale(0.1, 0.1)");
			$(".book-video-controls-pause").css("opacity","1");
			$(".pause-bar-mask").css("transform","translate3d(0px, 0px, 0px)");
			} else {
		player.pauseVideo();
			$(".book-video-controls-play").css("opacity","1");
			$(".book-video-controls-play").css("transform","translate3d(0px, 0px, 0px)");
			$(".book-video-controls-pause").css("opacity","0");
			$(".pause-bar-mask:nth-child(1)").css("transform","translate3d(10px, 0px, 0px)");
			$(".pause-bar-mask:nth-child(2)").css("transform","translate3d(-10px, 0px, 0px)");
			
		}
	});
	$(".toggle-inner").click(function(){$(this).fadeOut(100);$(this).fadeIn(500);});
});

$(window).load(function() {
	$("div.overlay-book-menu").hide();
	$(".icon-share").css("opacity","0");
	$(".icon-share").css("transform","translate3d(0px, 15x, 0px)");
	$(".btn-footer-book-share").css("transform","translate3d(0px, 0px, 0px)");
	$(".btn-footer-book-share").css("opacity","1");
	$(".btn-footer-book-share").css("visibility","inherit");
	$(".share-navigation").css("visibility","hidden");
	$(".share-navigation").css("opacity","0");
	$(".share-navigation").css("transform","translate3d(0px, 0px, 0px)");
	$(".audio-controls-slider-mask").css("visibility","hidden");
	$(".audio-controls-slider-mask").css("opacity","0");
	$(".audio-controls-slider-mask").css("transform","translate3d(0px, 0px, 0px)");
	$(".js-volume-close-line").css("stroke-dasharray","50px");
	$(".js-volume-close-line").css("stroke-dashoffset","50px");
	$(".js-volume-waves").css("opacity","1");

});