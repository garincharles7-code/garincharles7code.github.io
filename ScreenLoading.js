window.addEventListener('load', function() {
  const loader = document.querySelector('.loading-screen');
  loader.classList.add('loader-hidden');

  loader.addEventListener('transitionend', function() {
    loader.remove();
  });
});
