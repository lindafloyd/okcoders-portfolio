$(document).ready(() => {
	console.log('document is ready');

	$(document).on('mouseover', '.shoppingItem', function() {
		$(this).children().show(600);
		$(this).css('background-color', 'lightgrey');
	});

	$(document).on('mouseleave', '.shoppingItem', function() {
		$(this).children().hide(600);
		$(this).css("background-color", "");
	});

	var totalPrice = [];

	$(document).on('click', '#addItemButton', function(event) {
		event.preventDefault();
		var item = $('#itemName').val();
		var price = $('#itemPrice').val();
				if(!item.length) {
			$('#nameEmpty').show(600);
			return;
		}
		if(!price.length) {
			$('#priceEmpty').show(800);
			return;
		}
		$('.itemList').show(800);
		$('.list-group').append(`<li class="list-group-item shoppingItem">${item}  ${price}<button class="button btn btn-danger deleteButton float-right">Delete</button><button class="button btn btn-dark completeButton float-right">Complete</button></li>`);
		totalPrice.push(+price);
		var priceTotal = totalPrice.reduce((a, b) => a + b, 0);
		var itemPriceCount = totalPrice.length;
		$('.listTotal').text(`List Total: ${priceTotal}`);
		$('.listCount').text(`Total Number of Items: ${itemPriceCount}`);
		$('#itemName').val("");
		$('#itemPrice').val("");
	});

	$(document).on('click', '.deleteButton', function() {
		var removeItems = (($(this).parent().html()).split('<',1));
		$(this).parent().remove();
	});

	$(document).on('click', '.completeButton', function() {
		$(this).parent().css('text-decoration', 'line-through');
	});
});
