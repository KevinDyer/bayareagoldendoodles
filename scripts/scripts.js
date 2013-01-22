$(document).ready(function(){
  $("img")
    .mouseenter(function(){
      var $this = $(this);
      $this
	    .stop(true,false)
	    .closest(".puppy")
		  .css('z-index', '2')
		  .end()
        .animate({width:'50%'});
    })
    .mouseleave(function(){
      var $this = $(this);
      $this
	    .stop(true,false)
		  .closest(".puppy")
			.css('z-index', '1')
			.end()
        .animate({width:'30%'},'slow',function(){
	      $this
		    .closest(".puppy")
			  .css('z-index', '0');
	    });
    });
});