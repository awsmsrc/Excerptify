$(function(){
  $.fn.excerptify = function() {	
    var limit = 100;
    var count = 0;
    
	$('.pagepart').each(function(i, e){
      $excerpt = $(e).find(">:first-child")
      count += $excerpt.text().length
      while(count <= limit){
        if (!$excerpt.length){
          break
        }
        $excerpt = $excerpt.next()
        count += $excerpt.text().length
      }
      $excerpt.nextAll().addClass('hide_me').hide()	  
  
      if($(e).find('.hide_me').length){
        $(e).append('<a href="#" class="expand">read more...</a>')  
      }
      count = 0;
    })

    

    //expander link click functionality and toggling
    $('.pagepart .expand').click(function(ev){
      ev.preventDefault()
      if($(this).parent().find('.hide_me').is(':visible')){
 	    $(this).parent().find('.hide_me').hide()
        $(this).html('read more...')    	  
      }else{
        $(this).parent().find('.hide_me').show()
        $(this).html('read less...')
      }	
    })  
  
  }//end plugin function
})//end doc ready function
