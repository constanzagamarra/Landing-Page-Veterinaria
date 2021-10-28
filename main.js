

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
 let showt= document.querySelectorAll(".showt")


 function scrollShow() {
     let scrollTop= document.documentElement.scrollTop;
     for (var i=0; i<showt.length; i++){
         let heightShow= showt[i].offsetTop;
         if (heightShow+900 < scrollTop){
             showt[i].style.opacity=1;
             showt[i].classList.add("up")
         }
     }
 }


 window.addEventListener('scroll', scrollShow)