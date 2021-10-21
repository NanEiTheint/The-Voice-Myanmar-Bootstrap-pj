$(document).ready(function() {

		$(".result_header").hide();
		$(".battle1").hide();
		$(".live1_1_winner").hide();
		$(".live1_2_winner").hide();
		  $('.dropright a').on("click", function(e) {
		    // e.stopPropagation();
		     //e.preventDefault();

		    if (!$(this).next('div').hasClass('show')) {
		      $(this).next('div').addClass('show');
		    } else {
		      $(this).next('div').removeClass('show');
		    }

		  });


		  $(".season1").hover(function()
		  {
		  	$(".season1item").show();
		  	$(".season2item").hide();
		  	$(".season3item").hide();
		  })

		  $(".season2").hover(function()
		  {
		  	$(".season1item").hide();
		  	$(".season2item").show();
		  	$(".season3item").hide();
		  })

		   $(".season3").hover(function()
		  {
		  	$(".season1item").hide();
		  	$(".season2item").hide();
		  	$(".season3item").show();
		  })

		  $(".downs").click(function()
		  {
		  	$(".season1item").hide();
		  	$(".season2item").hide();
		  	$(".season3item").hide();
		  })

		  $("#btnVideo").click(function(){
		  	// alert("Hello");
		  	if ($("#myVideo").get(0).paused) {
		  		//alert("Hi");
			    $("#myVideo")[0].play();
			    $("#btnVideo").html("Pause");
			  } else {
			  	//alert("hi");
			    $("#myVideo").get(0).pause();
			    $("#btnVideo").html("Play");
			  }
		  })
		 setInterval($("#result").click(function()
		  	 {
			 	//alert("hi");
			 	$(".result_header").show();
		 	}),5000);

		
		 setInterval($("#result").click(function(){
		 	//alert("hi");
		 	$(".battle1").show();
		 }),5000);
		 setInterval($("#result").click(function(){
		 	//alert("hi");
		 	$(".live1_1_winner").show();
		 }),5000);
		 setInterval($("#result").click(function(){
		 	//alert("hi");
		 	$(".live1_2_winner").show();
		 }),5000);

		  
});
