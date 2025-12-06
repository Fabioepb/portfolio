(function() {
  // Wait for EmailJS library to be available
  function initEmailJS() {
    if (typeof emailjs !== 'undefined') {
      emailjs.init('Bi61EkDhk1cn1Hj4m');
    } else {
      // Retry if EmailJS isn't loaded yet
      setTimeout(initEmailJS, 100);
    }
  }
  
  // Start initialization when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initEmailJS);
  } else {
    initEmailJS();
  }
})();