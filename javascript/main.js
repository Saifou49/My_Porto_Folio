const nav_bar = document.querySelector('#navBarId');

// window.addEventListener('resize', () => {
//     if(window.innerWidth< 958)
//     {
//         nav_bar.classList.toggle('hidden');
//     }
    // else
    // {
    //     nav_bar.classList.remove('hidden');
    // }
// });

const menuButton = document.querySelector('#menuButton');

menuButton.addEventListener('click', () => {
    nav_bar.classList.toggle('navBar_is_clicked');
});

// The swiper event
const swiper = new Swiper('.swiper', {
    loop: true,
    pagination: {
        el:'.swiper-pagination',
        clickable: true,
    },
    navigation:{
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    }

});
// The swiper event

// The animation settings text
const srollReveal = ScrollReveal({
    origin: 'bottom',
    distance: '70px',
    duration: 500,
    delay:200,
    reset: true
});

srollReveal.reveal('.text_home' ,{
    origin:'top',
    duration:1500,
});

srollReveal.reveal('.profile_image' ,{
    origin:'rigth',
    duration:1500,
    distance:'200px',
    reset: true
});

srollReveal.reveal('.box' ,{
    origin:'left',
    duration:1500,
    distance:'200px',
    reset: true
});


srollReveal.reveal('.header_skills' ,{
    origin:'top',
    duration:1500,
    distance:'200px',
    reset: true
});


srollReveal.reveal('.the_skills' ,{    
    duration:1500,
    distance:'200px',
    reset: true
});


srollReveal.reveal('.contacts_header' ,{  
    origin:'left',  
    duration:1500,
    distance:'200px',
    reset: true
});


srollReveal.reveal('.contacts_details' ,{  
    origin:'right',  
    duration:1500,
    distance:'200px',
    reset: true
});


// Infinit swiping
const scrollers = document.querySelectorAll(".scroller");

// If a user hasn't opted in for recuded motion, then we add the animation
if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  addAnimation();
}

function addAnimation() {
  scrollers.forEach((scroller) => {
    // add data-animated="true" to every `.scroller` on the page
    scroller.setAttribute("data-animated", true);

    // Make an array from the elements within `.scroller-inner`
    const scrollerInner = scroller.querySelector(".scroller__inner");
    const scrollerContent = Array.from(scrollerInner.children);

    // For each item in the array, clone it
    // add aria-hidden to it
    // add it into the `.scroller-inner`
    scrollerContent.forEach((item) => {
      const duplicatedItem = item.cloneNode(true);
      duplicatedItem.setAttribute("aria-hidden", true);
      scrollerInner.appendChild(duplicatedItem);
    });
  });
}

// Infinit swiping
