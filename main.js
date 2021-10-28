

 //Smooth Scrolling

 document.querySelectorAll('a[href^="#"]').forEach(anchor => {
     anchor.addEventListener('click', function (e) {
         e.preventDefault();
         document.querySelector(this.getAttribute('href')).scrollIntoView({
             behavior: 'smooth'
         });
     });
 });


 //Show
 let show= document.querySelectorAll(".show")


 function scrollShow() {
     let scrollTop= document.documentElement.scrollTop;
     for (var i=0; i<show.length; i++){
         let heightShow= show[i].offsetTop;
         if (heightShow-1000 < scrollTop){
             show[i].style.opacity=1;
             show[i].classList.add("up")
         }
     }
 }


 window.addEventListener('scroll', scrollShow)