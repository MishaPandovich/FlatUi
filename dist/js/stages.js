function animationSt(elementid, finalvalue, speedAnimation, number) {
	// функция анимации
	function animationStage() {
		var n = parseInt(elementid.style.right);
			n -= 1;

		elementid.style.right = n + 'px';
	}

	// запуск анимации
	var startAnimationStage = setInterval(function() { animationStage() }, speedAnimation);

	var stopAnimationStage = setInterval(function() { 
		var value = parseInt(elementid.style.right);
		if (value == finalvalue) {
			clearInterval(startAnimationStage); 
			clearInterval(stopAnimationStage);
			numbers[number].classList.add('active'); 
		}
	});
}

var stages = document.querySelectorAll('.stage > .stage__line > .stage__fill');		
var numbers = document.querySelectorAll('.stage > .stage__number');
/*функция отвечающая за анимацию*/
function animationStages() {
	animationSt(stages[0], -1, 50, 1); //стадия, число на котором заканчивается анимация, скорость анимация, следующая стадия

	if (parseInt(stages[0].style.right) == -1) { // -1 -не обязательно, это зависит от таймера, а вообще 0
		animationSt(stages[1], -1, 50, 2);
	} 
};
