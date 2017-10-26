$(document).ready(function() {
  $('form').submit(function(event){
  	if ( $( "#in" ).val().length > 0 ) {

  		$('#weath').slideUp(100).delay(300).slideDown(100);
  		$('#place').remove();
   		var mycity = $('#in').val();
   		$.get('https://api.openweathermap.org/data/2.5/weather?q=' + mycity + '&units=imperial&APPID=cf9cb3a4fc1485b6aac43b347cec47f3', function(res) {
    	console.log(res);
    	$('#cty').text(mycity.toUpperCase());
    	$('#tmp').text(res.main.temp + 'ºF');
    	},'json');
    	event.preventDefault();
    } 
    else {
    	$('#in').attr('border', 'none');
    	$('#in').css('color', 'rgba(255, 100, 100, 1)');
    	$('#in').attr('placeholder', 'enter a city');
    	$('#in').css('box-shadow', '0px 0px 10px rgba(255, 100, 100, 1), 0px 0px 10px rgba(255, 100, 100, 1)');
  		event.preventDefault();
  	}

  }); //submit
}); // ready
