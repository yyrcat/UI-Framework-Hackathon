/**
 * scrollspy.js
 */
!function() {
    var ui = {};
    var pos;
    var active =
        // iterate over the page contents
        [].forEach.call(
            // grab content
            document.querySelectorAll(".ui-element-main"),
            function(nodes) {
                // populate object
                ui[nodes.id] = nodes.offsetTop;
            });
    // scrl function runs as scroll begins
    function scrl() {
        // set the position of the document
        pos = document.documentElement.scrollTop || document.body.scrollTop;
        for (var id in ui) {
            if (ui[id] <= pos) {
                // set the class name to null
                document.querySelector('.active-vertical').className = ' ';
                // as user scolls change class name to 'active'
                document.querySelector('a[href*=' + id + ']').className = 'active-vertical'
            }
        }
    }
    // execute
    window.onscroll = scrl;
}();
