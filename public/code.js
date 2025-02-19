// // Wrap every letter in a span
// var textWrapper = document.querySelector('.ml3');
// textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

// anime.timeline({loop: true})
//   .add({
//     targets: '.ml3 .letter',
//     opacity: [0,1],
//     easing: "easeInOutQuad",
//     duration: 2250,
//     delay: (el, i) => 150 * (i+1)
//   }).add({
//     targets: '.ml3',
//     opacity: 0,
//     duration: 1000,
//     easing: "easeOutExpo",
//     delay: 1000
//   });
// $("document").ready(function(){

  ////////////////////
  /*
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      console.log(entry);
      if(entry.isIntersecting){
        // entry.target.classList.remove('.hiddenSec');
        entry.target.classList.add('.showSec');
      }
      // else{
      //   entry.target.classList.remove('.showSec')
      // }
      });
    }) ;

  const hiddenElements = document.querySelectorAll('.hiddenSec');
  hiddenElements.forEach((el) => observer.observe(el));
  */
 // })
  ////////////////// delete above if not using

// to highlghit nav items when a press on it  
$('header .nav-link').click(function(){
  $('header .nav-link').removeClass('active');
  $('header .nav-link').addClass('text-secondary');
  $(this).removeClass('text-secondary');
  $(this).addClass('active');
})

// to add fade effect on i scroll to section 
// const observer = new IntersectionObserver((entries)=>{
//   entries.forEach((entry)=>{
//     console.log(entry)
//     if(entry.isIntersecting){
//       entry.target.classList.add('showSection')
//     }
//   });
// });

// $('.hiddenSection').each((el)=> observer.observe($(this)));

/////

// const sectionObserver = new IntersectionObserver((entries)=>{
//     entries.forEach((entry)=>{
//       console.log(entry)
//       if(entry.isIntersecting){
//         $(this).fadeIn('slow');     
//        }
//     });
//   });
  // sectionObserver.observe($('section')[0]);
  // $('section').each((el)=> {
  //   sectionObserver.observe(el).$(this)})
  $('.hero').animate({'opacity':'1'},1000);
  $('main').scroll(function(){
    $('.fadein').each( function(i){
      const bottom_of_element = $(this).offset().top + $(this).outerHeight();
      const bottom_of_window = $('main').scrollTop() + $('main').height();
      console.log(bottom_of_element , "|||", bottom_of_window);
      console.log($(this))

      if(bottom_of_window > bottom_of_element){
        $(this).animate({'opacity':'1'},1000);
        // $(this).fadeIn('slow');  
      }
    });
  });