var markupBtn = document.querySelectorAll('.btn-full-width');
// showMarkup = document.querySelectorAll('.show-markup');

var forEach = function(array, callback, scope) {
  for (var i = 0; i < array.length; i++) {
    callback.call(scope, i, array[i]);
  }
};

forEach(markupBtn,function(index, elem) {
  elem.addEventListener('click', function(ev) {
    ev.preventDefault();
    var showMarkup = this.nextElementSibling;

    showMarkup.classList.toggle('slide-down');
    this.classList.toggle('btn-bottom-no-radius');

    if(this.classList.contains('btn-bottom-no-radius')) {
      this.innerHTML = "Hide markup";
    } else {
      this.innerHTML = "Show markup";
    }
  }, false);

});
