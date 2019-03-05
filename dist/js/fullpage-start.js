new fullpage('#fullpage', {
  v2compatible: true,
  anchors: ['page1', 'page2', 'page3', 'page4'],
  sectionsColor: ['#ffffff', '#ffffff', '#ffffff', '#ffffff'],
  anchors: ['firstPage', 'secondPage', '3rdPage', '4thpage', 'lastPage'],

  onLeave: function(index, nextIndex, direction) {
		if(index == 1) {
			var pies = document.querySelectorAll('.pie');	
			animation(pies[0], 0, 30);
			animation(pies[1], 38, 30);
			animation(pies[2], 62, 30);
			animation(pies[3], 89, 30);
			createPie(".pieID.legend", ".pieID.pie-chart");
		}

		if (index == 2) {
			var startAnimationStages = setInterval(function() { animationStages() }, 50);
		}
	}
});