// to highlghit nav items when a press on it  
$('header .nav-link').click(function(){
  $('header .nav-link').removeClass('active');
  $('header .nav-link').addClass('text-secondary');
  $(this).removeClass('text-secondary');
  $(this).addClass('active');
})

// to add fade effect when i scroll to a section 
  $('.hero').animate({'opacity':'1'},1000);
  $('main').scroll(function(){
    $('.fadein').each( function(i){
      const bottom_of_element = $(this).offset().top + $(this).outerHeight();
      const bottom_of_window = $('main').scrollTop() + $('main').height();
      // console.log(bottom_of_element , "|||", bottom_of_window);
      // console.log($(this))

      if(bottom_of_window > bottom_of_element){
        $(this).animate({'opacity':'1'},1000);
        // $(this).fadeIn('slow');  
      }
    });
  });