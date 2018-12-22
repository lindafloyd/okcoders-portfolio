$(document).ready(() => {
	console.log('document is ready');

	var users =
	[
		{	username: 'linda@email.com', password: 'abc123'},
		{	username: 'faith@email.com', password: 'abc124'}
	];

	$('.loginSubmit').click((event) => {
		event.preventDefault();
		var userNameInput = $('.username').val();
		var userPassInput = $('.userpass').val();

		users.map(user => {
			if(userNameInput !== user.username) {
				$('#passNotFound').hide(500);
				$('#userNotFound').show(600);
			}
		});

		users.map(user => {
			if(userNameInput === user.username) {
				if(userPassInput === user.password) {
					window.location.href = "../home-page/projects-home-page.html";
				}
				else {
					console.log(`incorrect password`);
					$('#userNotFound').hide(500);
					$('#passNotFound').show(600);
				}
			}
		});
	});
});
