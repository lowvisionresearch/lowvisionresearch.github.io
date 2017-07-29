$(document).ready(function() {

    var upperZoomLimit = 150;
    var lowerZoomLimit = 75;
    var stepSize = 1.25;

    /** On load, use previous settings. **/
    if (isNaN(parseFloat(window.name))) {
        window.name = "100";
    }
    update();

    $("#zoom-in").click(function(event) {
        event.stopPropagation();
        if (window.name < upperZoomLimit) {
            window.name = window.name * stepSize;
            update();
        }
    });

    $("#zoom-out").click(function(event) {
        event.stopPropagation();
        if (window.name > lowerZoomLimit) {
            window.name = window.name / stepSize;
            update();
        }
    });

    function update() {
        $("#home-div").css('zoom', window.name + '%');
        $(".text-area").css('zoom', window.name + '%');
        $("#page-title").css('zoom', window.name + '%');
        $(".subtitle").css('zoom', window.name + '%');
        $("#footer").css('zoom', window.name + '%');
        $("#zoom-in").css('filter', 'grayscale(0%)');
        $("#zoom-in").css('cursor', 'pointer');
        $("#zoom-out").css('filter', 'grayscale(0%)');
        $("#zoom-out").css('cursor', 'pointer');

        if (window.name >= upperZoomLimit) {
            $("#zoom-in").css('filter', 'grayscale(100%)');
            $("#zoom-in").css('cursor', 'default');
        }

        if (window.name <= lowerZoomLimit) {
            $("#zoom-out").css('filter', 'grayscale(100%)');
            $("#zoom-out").css('cursor', 'default');
        }
    }

    /** https://stackoverflow.com/questions/1055336/changing-the-browser-zoom-level **/
});
