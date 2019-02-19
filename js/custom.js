$('ul.nav li.dropdown').hover(function() {
  $(this).find('.dropdown-menu').stop(true, true).delay(10).fadeIn(500);
}, function() {
  $(this).find('.dropdown-menu').stop(true, true).delay(10).fadeOut(500);
});
