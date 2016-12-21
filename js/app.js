$('#navbar').find('a').each(function(){

	if($(this).attr('class') != null)
		if($(this).attr('class').indexOf('colorWhite'>=0))
			if($(this).parent().attr('class') != null)
				if($(this).parent().attr('class').indexOf('active') >=0)
					$(this).css('color','black');
				else
					$(this).css('color','white');

			else
				$(this).css('color','white');

})
