$(document).ready(function(){
	alert("doc is ready");

$("header").click(function(){
	$("header").hide()
});

$("button").click(function(){
	$("button").animate({
    opacity: 0.25,
    marginLeft: "+500",
    //height: "toggle"
  }, 5000, function() {
    // Animation complete.
    	$("button").animate({
    opacity: 1.0,
    marginLeft: "0",
    //height: "toggle"
  }, 5000, function() {
  });
  });
});

$("p").click(function(){
	$("header").show()
});

$( "h3" ).on( "mouseover", function() {
  $( this ).css( "color", "red" );
});

$( "h3" ).on( "mouseleave", function() {
  $( this ).css( "color", "black" );
});

$("h5").mouseover(function(){
	$("h5").animate({
	padding: "+250px"
}, 3000, function() {
	//Animation complete.
	});
});

$("h5").mouseleave(function(){
	$("h5").animate({
	padding: "-250px"
}, 3000, function() {
	//Animation complete.
	});
});

$( ".divvy1" ).click(function() {
  $( ".divvy1 p" ).slideToggle( "slow", function() {
    // Animation complete.
  });
});


}); //doc is ready bracket

