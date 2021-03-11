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

/* Light/dark theme */
const themeButton = document.getElementById('themeButton');
const darkTheme = 'darkTheme';
const iconTheme = 'bx-sun';

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme');
const selectedIcon = localStorage.getItem('selected-icon');

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light';
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bx-moon' : 'bx-sun';

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme);
  themeButton.classList[selectedIcon === 'bx-moon' ? 'add' : 'remove'](iconTheme);
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme);
    themeButton.classList.toggle(iconTheme);
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme());
    localStorage.setItem('selected-icon', getCurrentIcon());
})

// Reduce size and print to A4
function scaleCV(){
    document.body.classList.add('scaleCV');
}

// Return size to normal
function removeScale() {
    document.body.classList.remove('scaleCV');
}

// Generate PDF
let areaCV = document.getElementById('areaCV')
let resumeButton = document.getElementById('resumeButton')
let opt = {
    margin: 0,
    filename: 'Resume.pdf',
    pagebreak: { before: '.beforeClass', after: ['#after1', '#after2'], avoid: 'img' },
    image: {type: 'jpeg', quality: 0.98},
    html2canvas: {backgroundColor: '#000000', scale: 4},
    jsPDF: {format: [281.5, 200], orientation: 'portrait'}
}

function generateResume() {
    html2pdf(areaCV, opt);
}

resumeButton.addEventListener('click', () => {
    scaleCV();
    generateResume();
    setTimeout(removeScale, 3000);
})

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