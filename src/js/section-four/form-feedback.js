(function() {
	var form =  document.querySelector('.form-feedback');
	var validateBtn = form.querySelector('.submit');
	var input = form.querySelectorAll('.input');

	var generateError = function(text) {
	// создает сообщение об ошибке
		var error = document.createElement('div');
		error.className = "error";
		error.innerHTML = text;

		return error;
	}

	var generateThanks = function(text) {
	// создает сообщение об ошибке
		var thanks = document.createElement('div');
		thanks.className = "thanks";
		thanks.innerHTML = text;

		return thanks;
	}

	var removeValidation = function() {
	// не дает дублировать ошибки
		var errors = form.querySelectorAll('.error');
		var thanks = form.querySelectorAll('.thanks');

		for (var i=0; i<errors.length; i++) {
			errors[i].remove();
			thanks[i].remove();
		}
	}

	function validateEmail() {
	   var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
	   var email = form.querySelector('.input--email');
	   var address = email.value;
	   if(reg.test(address) == false) {
	      var error = generateError("error");
				email.parentElement.insertBefore(error, email.nextSibling);
	   } else {
	   		var thanks = generateThanks("thanks");
				email.parentElement.insertBefore(thanks, email.nextSibling);
	   }
	}

	var checkFieldsPresence = function(event) {
		for (var i=0; i<input.length-1; i++) {
			if(!input[i].value) {
				var error = generateError("error");
				input[i].parentElement.insertBefore(error, input[i].nextSibling);
			} else {
				var thanks = generateThanks("thanks");
				input[i].parentElement.insertBefore(thanks, input[i].nextSibling);
			}
		}
	}

	form.addEventListener('submit', function(event) {
		event.preventDefault();
		removeValidation();
		/*проверка на пустые данные*/
		checkFieldsPresence(event);
		validateEmail();
	});
}()); // при нажатии во второй раз уже запускается
