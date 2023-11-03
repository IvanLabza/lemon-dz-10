(() => {
  const colorBody = document.querySelector('.element');
  const onDart = document.querySelector('.toggle-mode-button');
  const offDart = document.querySelector('.toggle-mode-button');

  const toggleBody = () => {
    const isColorBody =
      onDart.getAttribute('aria-expanded') === 'true' || false;
    onDart.setAttribute('aria-expanded', !isColorBody);
    colorBody.classList.toggle('is-dart');

  
  };

  onDart.addEventListener('click', toggleBody);
  offDart.addEventListener('click', toggleBody);


})();