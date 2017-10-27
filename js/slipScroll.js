var setLogo = function() {
 	$('.moveable-name').each(function() {
    $(this).css('top',
      $('.default-name').offset().top -
      $(this).closest('section').offset().top + 80
    );
  });
};
 
$(document).scroll(function() {
  setLogo();
});
 
setLogo();