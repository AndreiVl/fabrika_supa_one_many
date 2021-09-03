const tabsHeader = () => {
  $('.tabs-header__link').on('click', function(e) {
    e.preventDefault();

    let tabId = $(this).attr('href');

    $('.tabs-header__link').removeClass('tabs-header__link--active');
    $(this).addClass('tabs-header__link--active');
    
    $('.tab__item').removeClass('tab__item--active');
    $(tabId).addClass('tab__item--active');
  });
}

export default tabsHeader;