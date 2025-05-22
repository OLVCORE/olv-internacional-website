window.onscroll = function() {
  const footer = document.querySelector('footer');
  if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
    footer.classList.add('visible');
  } else {
    footer.classList.remove('visible');
  }
};
