$(document).ready(function(){
	alert("doc is ready");

$("body").click(function(){
	$("header").hide()
});

$("body").click(function(){
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


$( "body" ).click(function() {
  $( this ).css( "color", "red" );
});


$("body").click(function(){
	$("h5").animate({
	padding: "+250px"
}, 3000, function() {
	//Animation complete.
	});
});

$("body").click(function(){
	$("h5").animate({
	padding: "-250px"
}, 3000, function() {
	//Animation complete.
	});
});

$( "body" ).click(function() {
  $( ".divvy1 p" ).slideToggle( "slow", function() {
    // Animation complete.
  });
});

$( "body" ).click(function() {
  $( "footer" ).fadeOut( "slow", function() {
    // Animation complete.
  });
});


}); //doc is ready bracket

