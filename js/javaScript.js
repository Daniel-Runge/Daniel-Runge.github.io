function createBubble(){
  const body = document.querySelector('body');
  const createElement = document.createElement('div');
  var size = 20 + Math.random() * 60;

  createElement.className = 'bubble';

  createElement.style.width = size + 'px';
  createElement.style.height = size + 'px';
  createElement.style.left = Math.random() * 0.9*innerWidth + 'px';
  createElement.style.cursor = 'pointer';
  createElement.onclick = function() {createElement.remove();};
  body.appendChild(createElement);

  setTimeout(() => {
    createElement.remove()
  }, 25000);
}



setInterval(createBubble,5000);

// (function () {
//   const t = window.performance && performance.timing;
//   if (!t) {
//     return;
//   }
//   const loadTime = (t.loadEventEnd - t.navigationStart) / 1000;
//   alert(`This page loaded in ${loadTime} seconds`);
// })();

/* https://www.phpied.com/this-page-loaded-in-x-seconds/ source. Refer for details.*/