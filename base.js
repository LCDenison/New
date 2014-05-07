$(window).load(function() {

$('#gap-link').click(function(){
	loadAndChangeBody('html/gap.html');
})

$('#11').click(function(){
	loadAndChangeBody('html/week1/one.html');
})

$('#12').click(function(){
	loadAndChangeBody('html/week1/two.html');
})

$('#13').click(function(){
	loadAndChangeBody('html/week1/three.html');
})

$('#14').click(function(){
	loadAndChangeBody('html/week1/four.html');
})

$('#15').click(function(){
	loadAndChangeBody('html/week2/two_one.html');
})

$('#16').click(function(){
	loadAndChangeBody('html/week2/two_two.html');
})

$('#17').click(function(){
	loadAndChangeBody('html/week2/two_three.html');
})


function loadAndChangeBody(content) {

	$('body').removeClass('main');
	$('#changing-content').load(content);
	
}
});