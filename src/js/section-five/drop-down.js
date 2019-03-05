(function() {
	var select = document.querySelector('.drop-down__select');
	var button = document.querySelector('.drop-down__button');
	var wrapperOptions = document.querySelector('.options');
	var options = document.querySelectorAll('.options__item');

	button.addEventListener('click', function() {
		wrapperOptions.classList.toggle('no-hidden');
	});

	function selectOption(element) {
		element.addEventListener('click', function() {
			select.placeholder = this.textContent;
			select.value = this.textContent;
			select.name = this.textContent;
		});
	}

	for (var i=0; i<options.length; i++) {
		selectOption(options[i]);
	}
}());