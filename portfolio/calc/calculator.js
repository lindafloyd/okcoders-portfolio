$(document).ready(() => {
	console.log('document is ready');

	var math = '';
	var mathTotal = 0;
	var answer = '';
	var number1 = '';
	var number2 = '';

	$(document).on('click', '.digit', function() {
		var digitPressed = $(this).html();
		answer = $('.answerBox').append(digitPressed).html();
		return answer;
	});

	$(document).on('click', '.mathSymbol', function() {
		math = $(this).html();
		number1 = answer;
		$('.answerBox').text(math);
		$('.answerBox').text('');

		$(document).on('click', '.total', function() {
			number2 = answer;
			if(math === '+') {mathTotal = parseInt(number1) + parseInt(number2);}
			if(math === '-') {mathTotal = parseInt(number1) - parseInt(number2);}
			if(math === '*') {mathTotal = parseInt(number1) * parseInt(number2);}
			if(math === '/') {mathTotal = parseInt(number1) / parseInt(number2);}
			$('.answerBox').text(mathTotal);
		});
		$('#clearAll').click(() => {
			answer = '';
			math = '';
			mathTotal = 0;
			number1 = '';
			number2 = '';
			$('.inputOne').val("");
			$('.inputTwo').val("");
			$('.answerBox').text("");
		});
	});
});
