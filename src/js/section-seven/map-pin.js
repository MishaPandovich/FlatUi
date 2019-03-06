ymaps.ready(function () {
    var myMap = new ymaps.Map('map', {
    center: [37.787509, -122.444838],
    zoom: 16
}, {
    searchControlProvider: 'yandex#search'
}),

// Создаём макет содержимого.
MyIconContentLayout = ymaps.templateLayoutFactory.createClass (
    '<div style="color: #000000; font-weight: bold;">$[properties.iconContent]</div>'
),

myPlacemarkWithContent = new ymaps.Placemark([37.787509, -122.444838], {
    balloonContent: 'Чтобы посмотреть более подробный маршрут,<br> нажмите ссылку «Как добраться» в левом нижнем углу карты'
    }, 
    {
    // Опции.
    // Необходимо указать данный тип макета.
    iconLayout: 'default#imageWithContent',
    // Своё изображение иконки метки.
    iconImageHref: 'images/maps-icon.png',
    // Размеры метки.
    iconImageSize: [59, 60],
    // Смещение левого верхнего угла иконки относительно
    // её "ножки" (точки привязки).
    iconImageOffset: [0, -70],
    // Смещение слоя с содержимым относительно слоя с картинкой.
    iconContentOffset: [20, 15],
    // Макет содержимого.
    iconContentLayout: MyIconContentLayout
});

myMap.geoObjects
.add(myPlacemarkWithContent);
});