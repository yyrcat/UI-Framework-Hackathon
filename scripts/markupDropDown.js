var markupBtn = document.querySelector('.btn-full-width'),
showMarkup = document.querySelector('.show-markup');

markupBtn.addEventListener('click', function(ev) {
  ev.preventDefault();

  showMarkup.classList.toggle('slide-down');
  this.classList.toggle('btn-bottom-no-radius');

  if(this.classList.contains('btn-bottom-no-radius')) {
    this.innerHTML = "Hide markup";
  } else {
    this.innerHTML = "Show markup";
  }
}, false);
