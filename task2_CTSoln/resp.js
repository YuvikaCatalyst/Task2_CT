/* USING JAVASCRIPT
burger=document.querySelector('.nav_login')
navbar=document.querySelector('.navbar')
navList=document.querySelector('.list_items')
navIcons=document.querySelector('.icons')
navButton=document.querySelector('.header_button')

burger.addEventListener('click',()=>{
navList.classList.toggle('visibility');
navIcons.classList.toggle('visibility');
navButton.classList.toggle('visibility');
navbar.classList.toggle('nav_height');
burger.classList.toggle("active");
})*/

/*USING JQUERY*/
$(".nav_login").click(() => {
  $(".list_items, .menubar_icons, .header_button").toggleClass("visibility");
  $(".navbar").toggleClass("nav_height");

  if ($(".navbar").hasClass("nav_height")) {
    $(".navbar").css("height", "70px");
  } else {
    $(".navbar").css("height", "100vh");
  }

  $(".line1").toggleClass("rotate_45");
  $(".line3").toggleClass("rotate_45_rev");
  $(".line2").toggleClass("transparent");
});
