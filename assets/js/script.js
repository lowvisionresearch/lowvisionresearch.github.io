$(document).ready(function() {

    if (isNaN(parseFloat(window.name))) {
        window.name = "100";
    }

    /** On load, use previous settings. **/
    $(".text-area").css('zoom', window.name + '%');
    $("#page-title").css('zoom', window.name + '%');
    $(".subtitle").css('zoom', window.name + '%');
    $("#footer").css('zoom', window.name + '%');

    $("#logo").click(function(event) {
        event.stopPropagation();
        window.name = window.name * 1.25;
        $(".text-area").css('zoom', window.name + '%');
        $("#page-title").css('zoom', window.name + '%');
        $(".subtitle").css('zoom', window.name + '%');
        $("#footer").css('zoom', window.name + '%');
    });

    /** https://stackoverflow.com/questions/1055336/changing-the-browser-zoom-level **/


});
