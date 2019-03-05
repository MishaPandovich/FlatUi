var sliderElem = document.querySelector('.slider');
var thumbElem = sliderElem.children[0];

thumbElem.onmousedown = function(e) {
  var thumbCoords = getCoords(thumbElem);
  var shiftX = e.pageX - thumbCoords.left;
  // shiftY здесь не нужен, слайдер двигается только по горизонтали

  var sliderCoords = getCoords(sliderElem);

  document.onmousemove = function(e) {
    //  вычесть координату родителя, т.к. position: relative
    var newLeft = e.pageX - shiftX - sliderCoords.left;

    // курсор ушёл вне слайдера
    if (newLeft < 0) {
      newLeft = 0;
    }
    var rightEdge = sliderElem.offsetWidth - thumbElem.offsetWidth;
    if (newLeft > rightEdge) {
      newLeft = rightEdge;
    }

    thumbElem.style.left = newLeft + 'px';
    showMinPrice();
  }

  document.onmouseup = function() {
    document.onmousemove = document.onmouseup = null;
  };

  return false; // disable selection start (cursor change)
};

thumbElem.ondragstart = function() {
  return false;
};

function getCoords(elem) { // кроме IE8-
  var box = elem.getBoundingClientRect();

  return {
    top: box.top + pageYOffset,
    left: box.left + pageXOffset
  };
}

var price = document.querySelector('.slider__value');
function showMinPrice() {
  int = parseInt(thumbElem.style.left);

  percent = Math.round((int * 100)/300);
  value = ((percent * 200)/100);

  price.value = value;
}
showMinPrice();