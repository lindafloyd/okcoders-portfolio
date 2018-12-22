$(document).ready(() => {
	console.log('document is ready');

	$('.logout').click(() => {
	 	window.location.href = "../login/projects-login.html"
	});
	$('.sideBarToggle').click(() => {
		$('.sidebar').show(600);
		$('.sideBarToggle').hide(600);
		$('.sideBarToggleOff').show(600);
	});
	$('.sideBarToggleOff').click(() => {
		$('.sidebar').hide(600);
		$('.sideBarToggle').show(600);
		$('.sideBarToggleOff').hide(600);
	});
});
