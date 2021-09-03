const map = () => {
  
ymaps.ready(function () {
  var myMap = new ymaps.Map('map', {
      center: [55.86314863354213,37.605452838623044],
      zoom: 10
  }, {
      searchControlProvider: 'yandex#search'
  }),

  // Создаём макет содержимого.
  MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
      '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
  ),

  myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
      hintContent: 'Москва, метро Отрадное.&nbsp;ул. Хачатуряна, 20А. Кулинария &ldquo;Домашний уголок&rdquo;',
      balloonContent: 'Москва, метро Отрадное.&nbsp;ул. Хачатуряна, 20А. Кулинария &ldquo;Домашний уголок&rdquo;'
  }, {
      // Опции.
      // Необходимо указать данный тип макета.
      iconLayout: 'default#image',
      // Своё изображение иконки метки.
      iconImageHref: 'images/map__icon.png',
      // Размеры метки.
      iconImageSize: [41, 53],
      // Смещение левого верхнего угла иконки относительно
      // её "ножки" (точки привязки).
      iconImageOffset: [-5, -38]
  }),
  myPlacemarkWithContent = new ymaps.Placemark([55.702520357737455,37.944722940475465], {
      hintContent: 'Москва, метро Некрасовка.&nbsp;ул. Лавриненко, 3А. Кулинария &ldquo;Готовая еда&rdquo;',
      balloonContent: 'Москва, метро Некрасовка.&nbsp;ул. Лавриненко, 3А. Кулинария &ldquo;Готовая еда&rdquo;',
  }, {
      iconLayout: 'default#imageWithContent',
      iconImageHref: 'images/map__icon.png',
      iconImageSize: [41, 53],
      iconImageOffset: [-5, -38],
      iconContentLayout: MyIconContentLayout
  }),
  myPlacemarkWithContent2 = new ymaps.Placemark([55.72575218747117,37.743419424244166], {
      hintContent: 'Москва, метро Стахановская.&nbsp;ул. 2-ой Грайвороновский проезд, 42к2. Кулинария &ldquo;Готовая еда&rdquo;',
      balloonContent: 'Москва, метро Стахановская.&nbsp;ул. 2-ой Грайвороновский проезд, 42к2. Кулинария &ldquo;Готовая еда&rdquo;',
  }, {
      iconLayout: 'default#imageWithContent',
      iconImageHref: 'images/map__icon.png',
      iconImageSize: [41, 53],
      iconImageOffset: [-5, -38],
      iconContentLayout: MyIconContentLayout
  });

  myMap.geoObjects
    .add(myPlacemark)
    .add(myPlacemarkWithContent)
    .add(myPlacemarkWithContent2);
});

}

export default map;