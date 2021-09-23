burgur =document.querySelector('.burgur');
navbar =document.querySelector('#navbar');
logo =document.querySelector('.logo');
list=document.querySelector('.u-list')


burgur.addEventListener('click',()=>{
    logo.classList.toggle('v-class-r,','logo');
    list.classList.toggle('v-class-r');
    navbar.classList.toggle('h-nav-r');

})
function myFunction() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less";
      moreText.style.display = "inline";
    }
  }
  

