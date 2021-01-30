(function () {
  const t = window.performance && performance.timing;
  if (!t) {
    return;
  }
  const loadTime = (t.loadEventEnd - t.navigationStart) / 1000;
  alert(`This page loaded in ${loadTime} seconds`);
})();

/* https://www.phpied.com/this-page-loaded-in-x-seconds/ source. Refer for details.*/