/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

const scrollActive = () =>{
    const scrollDown = window.scrollY

  sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id'),
              sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')
        
        if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
            sectionsClass.classList.add('active-link')
        }else{
            sectionsClass.classList.remove('active-link')
        }                                                    
    })
}
window.addEventListener('scroll', scrollActive)

/*===== SCROLL REVEAL ANIMATION =====*/
const scroller = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 1500,
    delay: 100,
});

scroller.reveal('.home__data, .about__img, .skills__subtitle, .skills__text',{}); 
scroller.reveal('.home__img, .about__subtitle, .about__text, .skills__img',{delay: 100}); 
scroller.reveal('.home__social-icon',{ interval: 50}); 
scroller.reveal('.work__img, .contact__input, .contact__textarea, .contact__button, .contact, .about, .contact__text, .portfolio bd-grid, .portolio, .portfolio img, .getintouch__arrow, .image-group2, .image-group3, .portfolio_subtitle, #linebreaker',{interval: 100});