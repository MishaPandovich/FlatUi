(function() {
	// кнопки на которые будет вешаться анимация
	var buttons = document.querySelectorAll('.standart-buttons .standart-button');
	// элемент который будет создавать ripple effect
	var elementsEffect = document.querySelectorAll('.standart-buttons .standart-button span');

	function rippleEffect(button, elementEffect, e) {
		button.addEventListener('click', function(e) {

			/*координата мыши*/
			var cursorX = e.offsetX==undefined?e.layerX:e.offsetX;
		  var cursorY = e.offsetY==undefined?e.layerY:e.offsetY;

		  // поиск координат элемента, который должен появляться
		  var coordElementEffect = elementEffect.getBoundingClientRect();
		  // задаем координаты так, чтобы при нажатии на кнопку эффект появлялся по середине курсора
		  elementEffect.style.left = cursorX - coordElementEffect.width/2.5 + 'px';
		  elementEffect.style.top = cursorY - coordElementEffect.height/2.5 + 'px';

		  // задаем класс для пояления элемента 
			elementEffect.classList.add('active');
			// удаляем элемент через 0.8 сек после нажатия
			setTimeout(function() { elementEffect.classList.remove('active'); }, 600);
		});
	}

	// навешиваем обработчик на все кнопки
	for (var i=0; i<buttons.length; i++) {
		rippleEffect(buttons[i], elementsEffect[i], event);
	}
}());