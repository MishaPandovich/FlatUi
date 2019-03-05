function animation(elementid, finalvalue, speedAnimation) {

	function pie(element, deg, value) {
		var oneStyle = element.querySelector(".pieone > div").style;
	  var twoStyle = element.querySelector(".pietwo > div").style;

	  pieValue.innerHTML = value; // передача значения загрузки

	  if (deg > 180) {
	  	oneStyle.transform = oneStyle.webkitTransform = "rotate(180deg)";
	    twoStyle.transform = twoStyle.webkitTransform = "rotate(" + deg + "deg)";
	    twoStyle.display = "block";
	  }	else {
	    oneStyle.transform = oneStyle.webkitTransform = "rotate(" + deg + "deg)"
	    twoStyle.display = "none"
	  }
	}

	var deg = 0,
		valuePie = 0;
	// функция анимации
	function animationPie() {
	  pie(elementid, (deg += 3.6) % 360, valuePie += 1);
	}
	// запуск анимации
	var startAnimationPie = setInterval(function() { animationPie() }, speedAnimation);

	var pieValue = elementid.querySelector(".pievalue");
	// прекращение анимации, когда она достигнет определенного числа
	var stopAnimationPie = setInterval(function() { 
		value = pieValue.innerHTML;

		if (value == finalvalue) {
			clearInterval(startAnimationPie); 
			clearInterval(stopAnimationPie); 
		}
	});
}
