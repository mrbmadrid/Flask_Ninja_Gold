$(document).ready(function(){
	var actions = ['farm', 'cave', 'house', 'casino']
	$('.button').each(function(index){
		$(this).data('type',actions[index])
	})
	$('.button').hover(function(){
		$(this).css('color','#c1d9ff')
		$(this).css( 'cursor', 'pointer' );
	}, function(){
		$(this).css('color', 'white')
	})
	$('.button').mousedown(function(){
		$(this).css('font-size', '.9em')
		$(this).css('padding', '2%')
		$(this).css('box-shadow', 'none')
	})
	$('.button').mouseup(function(){
		var action = $(this).data('type')
		var url = '/ninjado/'+ action
		var history = "Ninja went to the " + action
		$.get(url, function(res){
			$('#gold').html('Current Ninja Gold: ' + res)
			if(action == 'casino'){
				if(parseInt(res) < 0){
					history += " and lost " + res + " gold coins."
					history = '<span class="subtract">'+history+'   ('+ new Date()+ ')</span>'
				}else{
					history += " and won " + res + " gold coins."
					history = '<span class="add">'+history+'   ('+ new Date()+ ')</span>'
				}	
			}else{
				history += " and earned " + res + " gold coins."
				history = '<span class="add">'+history+'   ('+ new Date()+ ')</span>'
			}
			$('#history-internal').html(history+'<br>'+$('#history-internal').html())
		})
		$(this).css('font-size', '1em')
		$(this).css('padding', '3%')
		$(this).css('box-shadow', '2px 2px 2px white')
	})
})