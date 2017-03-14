(function() {
  var accordionItems = document.querySelectorAll(".accordion-level-js");

  function init() {
    for (var i = 0; i < accordionItems.length; i++) {
      accordionItems[i].className = 'accordion-level-js accordion--hide';
      var label = getFirstChildWithClassName(accordionItems[i], "accordion__toggle");
      label.onclick = toggleItem;
    }
  }

  function toggleItem() {
    var itemClass = this.parentNode.className;
    for (var i = 0; i < accordionItems.length; i++) {
      accordionItems[i].className = 'accordion-level-js accordion--hide';
      if (itemClass === "accordion-level-js accordion--hide") {
        this.parentNode.className = "accordion-level-js";
      }

    }
  }

  function getFirstChildWithClassName(element, className) {
    for (var i = 0; i < element.childNodes.length; i++) {
      if (element.childNodes[i].className === className)
        return element.childNodes[i];
    }

  }

  init();

})();
