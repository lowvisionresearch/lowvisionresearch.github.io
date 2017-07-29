$(document).ready(function() {

    var upperZoomLimit = 150;
    var lowerZoomLimit = 75;
    var stepSize = 1.25;

    /** Firefox uses different scaling. **/
    if (navigator.userAgent.indexOf("Firefox") > 0){
        upperZoomLimit /= 100;
        lowerZoomLimit /= 100;
        stepSize /= 100;
    }

    /** On load, use previous settings. **/
    if (isNaN(parseFloat(window.name))) {
        window.name = "100";
        if (navigator.userAgent.indexOf("Firefox") > 0){
            window.name /= 100;
        }
    }
    update();

    $("#zoom-in").click(function(event) {
        event.stopPropagation();
        if (window.name < upperZoomLimit) {
            window.name *= stepSize;
            update();
        }
    });

    $("#zoom-out").click(function(event) {
        event.stopPropagation();
        if (window.name > lowerZoomLimit) {
            window.name /= stepSize;
            update();
        }
    });

    function update() {
        if (navigator.userAgent.indexOf("Firefox") <= 0){
            // Non-firefox browsers.
            $("#home-div").css('MozTransform','scale(' + window.name + ')');
            $(".text-area").css('MozTransform','scale(' + window.name + ')');
            $("#page-title").css('MozTransform','scale(' + window.name + ')');
            $(".subtitle").css('MozTransform','scale(' + window.name + ')');
            $("#footer").css('MozTransform','scale(' + window.name + ')');
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
        } else {
            // Firefox browser.
            $("#home-div").css('MozTransform','scale(' + window.name + ')');
            $(".text-area").css('MozTransform','scale(' + window.name + ')');
            $("#page-title").css('MozTransform','scale(' + window.name + ')');
            $(".subtitle").css('MozTransform','scale(' + window.name + ')');
            $("#footer").css('MozTransform','scale(' + window.name + ')');
            $("#zoom-in").css('-moz-filter', 'grayscale(0%)');
            $("#zoom-in").css('cursor', 'pointer');
            $("#zoom-out").css('-moz-filter', 'grayscale(0%)');
            $("#zoom-out").css('cursor', 'pointer');

            if (window.name >= upperZoomLimit) {
                $("#zoom-in").css('-moz-filter', 'grayscale(100%)');
                $("#zoom-in").css('cursor', 'default');
            }

            if (window.name <= lowerZoomLimit) {
                $("#zoom-out").css('-moz-filter', 'grayscale(100%)');
                $("#zoom-out").css('cursor', 'default');
            }
        }
    }
});
