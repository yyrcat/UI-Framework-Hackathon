(function() {
  var elems = document.querySelectorAll('ul.dot-default li'),
    makeActive;

  makeActive = function() {
    for (var i = 0; i < elems.length; i++)
      elems[i].classList.remove('dot-active');

    this.classList.add('dot-active');
  };

  for (var i = 0; i < elems.length; i++)
    elems[i].addEventListener('mousedown', makeActive);
})();
