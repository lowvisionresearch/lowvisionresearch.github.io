$(document).ready(function() {

    var upperZoomLimit = 150;
    var lowerZoomLimit = 75;
    var stepSize = 1.25;

    /** Firefox uses different scaling. **/
    if (navigator.userAgent.indexOf("Firefox") > 0){
        upperZoomLimit /= 125;
        lowerZoomLimit /= 85;
        stepSize = 1.1;
    }

    /** On load, use previous settings. **/
    if (isNaN(parseFloat(window.name))) {
        window.name = "100";
        if (navigator.userAgent.indexOf("Firefox") > 0){
            window.name /= 100;
        }
    }
    if (typeof readData === "function") {
        readData();
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
            $("#home-div").css('zoom', window.name + '%');
            $(".text-area").css('zoom', window.name + '%');
            $("#page-title").css('zoom', window.name + '%');
            $(".subtitle").css('zoom', window.name + '%');
            $("#footer").css('zoom', window.name + '%');
            $("#zoom-in").css('filter', 'grayscale(0%)');
            $("#zoom-in").css('-webkit-filter', 'grayscale(0%)');
            $("#zoom-in").css('cursor', 'pointer');
            $("#zoom-out").css('filter', 'grayscale(0%)');
            $("#zoom-out").css('-webkit-filter', 'grayscale(0%)');
            $("#zoom-out").css('cursor', 'pointer');

            if (window.name >= upperZoomLimit) {
                $("#zoom-in").css('filter', 'grayscale(100%)');
                $("#zoom-in").css('-webkit-filter', 'grayscale(100%)');
                $("#zoom-in").css('cursor', 'default');
            }

            if (window.name <= lowerZoomLimit) {
                $("#zoom-out").css('filter', 'grayscale(100%)');
                $("#zoom-out").css('-webkit-filter', 'grayscale(100%)');
                $("#zoom-out").css('cursor', 'default');
            }
        } else {
            // Firefox browser.
            $("#home-div").css('MozTransform','scale(' + window.name + ')');
            $(".text-area").css('MozTransform','scale(' + window.name + ')');
            $("#page-title").css('MozTransform','scale(' + window.name + ')');
            $(".subtitle").css('MozTransform','scale(' + window.name + ')');
            $("#news-snippet").css('MozTransform','scale(' + window.name + ')');
            $("#news-snippet div").css('MozTransform','scale(1)');
            $("#news-snippet").css('MozTransformOrigin','0 0');
            $("#home-div").css('MozTransformOrigin','50% 0');
            $(".text-area").css('MozTransformOrigin','50% 0');
            $("#page-title").css('MozTransformOrigin','0 0');
            $(".subtitle").css('MozTransformOrigin','0 0');
            $("#alumni-subtitle").css('MozTransformOrigin','0 -3500%');
            $("#alumni").css('MozTransformOrigin','0 -50%');
            if (window.innerWidth < 960) {
                $("#alumni-subtitle").css('MozTransformOrigin','0 -6500%');
                $("#alumni").css('MozTransformOrigin','0 -100%');
            }
            $("#zoom-in").css('-webkit-filter', 'grayscale(0%)');
            $("#zoom-in").css('cursor', 'pointer');
            $("#zoom-out").css('-webkit-filter', 'grayscale(0%)');
            $("#zoom-out").css('cursor', 'pointer');

            if (window.name >= upperZoomLimit) {
                $("#zoom-in").css('-webkit-filter', 'grayscale(100%)');
                $("#zoom-in").css('cursor', 'default');
            }

            if (window.name <= lowerZoomLimit) {
                $("#zoom-out").css('-webkit-filter', 'grayscale(100%)');
                $("#zoom-out").css('cursor', 'default');
            }
        }
    }

    $(window).resize(update);
});
