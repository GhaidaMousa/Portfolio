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
  ////////////////// delete above if not using
$('header .nav-link').click(function(){
  $('header .nav-link').removeClass('active');
  $('header .nav-link').addClass('text-secondary');
  $(this).removeClass('text-secondary');
  $(this).addClass('active');
})



// })