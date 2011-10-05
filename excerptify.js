$(function(){
  $.fn.excerptify = function( options ) {	
        
    //default settings
    var defaults = {
	  limit: 100
	}
    
    var options = $.extend({}, defaults, options); 

    var count = 0;
    
	this.each(function(i, e){
      $excerpt = $(e).find(">:first-child")
      count += $excerpt.text().length
      while(count <= options.limit){
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
    this.find('.expand').click(function(ev){
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
