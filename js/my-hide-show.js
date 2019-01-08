const index = $('.index-box-contacts')
const bottom = $('.index-bottom-contacts')
$('.contacts-show').click(function () {
  if (!index.is(':visible')) {
    index.slideToggle()
    bottom.hide()
    index.css('display', 'flex');
  }
});
$('.contacts-hide').click(function () {
  if (index.is(':visible')) {
    bottom.show()
    index.slideToggle()
  }
});