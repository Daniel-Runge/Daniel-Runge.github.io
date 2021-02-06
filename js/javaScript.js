function createBubble(){
  const body = document.querySelector('body');
  const createElement = document.createElement('div');
  createElement.className = 'bubble';
  var size = 20 + Math.random() * 60;

  createElement.style.width = size + 'px';
  createElement.style.height = size + 'px';
  createElement.style.left = Math.random() * 0.9*innerWidth + 'px';
  body.appendChild(createElement);

  setTimeout(() => {
    createElement.remove()
  }, 60000);
}

function popBubble(bubble) {
  bubble.remove();
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