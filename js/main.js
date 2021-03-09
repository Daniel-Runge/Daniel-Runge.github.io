/* SHOW MENU */
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)
    
    // Validate that variables exist
    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            // We add the show-menu class to the div tag with the navMenu class
            nav.classList.toggle('showMenu')
        })
    }
}
showMenu('navToggle','navMenu')


/* REMOVE MENU */
const navLink = document.querySelectorAll('.navLink')

function linkAction(){
    const navMenu = document.getElementById('navMenu')
    // When we click on each navLink, we remove the show-menu class
    navMenu.classList.remove('showMenu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/* scroll section ACTIVE LINK */
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset;

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id');

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.navMenu a[href*=' + sectionId + ']').classList.add('activeLink');
        }else{
            document.querySelector('.navMenu a[href*=' + sectionId + ']').classList.remove('activeLink');
        }}
    )
}
window.addEventListener('scroll', scrollActive);

/* Scroll to top button */
function scrollTop() {
    const scrollTop = document.getElementById('scrollTop');
    if(this.scrollY >= 200) {
        scrollTop.classList.add('showScroll');
    } else {
        scrollTop.classList.remove('showScroll');
    }
}
window.addEventListener('scroll', scrollTop);

/* SITE LOAD TIME */

// (function () {
//   const t = window.performance && performance.timing;
//   if (!t) {
//     return;
//   }
//   const loadTime = (t.loadEventEnd - t.navigationStart) / 1000;
//   alert(`This page loaded in ${loadTime} seconds`);
// })();

/* https://www.phpied.com/this-page-loaded-in-x-seconds/ source. Refer for details.*/