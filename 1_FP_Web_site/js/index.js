$('.nav a').click(function (e) {
  $(this).tab('show');
    // e.preventDefault();
});

$('#myModal').modal(options);

var form = document.forms.registration;
form.addEventListener('submit', function (e) {
	e.preventDefault();
	var name = form.elements.name;
	if (name.value.search(/[A-z a-z]/) === -1) {
		name.style.border = '1px solid red';
	} else {
		name.style.border = '';
	}
	var email = form.elements.email;
	if (email.value.search(/^[a-z0-9]+@[a-z0-9-]+\.[a-z]{2,6}/ig) === -1) {
		email.style.border = '1px solid red';
	} else {
		email.style.border = '';
	}


}, false);
