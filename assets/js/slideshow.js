$(document).ready(function() {

    var pictures = [
        "photo1",
        "photo2"
    ];
    var i = 0;

    setInterval(function() {
         i++;
         document.getElementById(pictures[(i-1)%pictures.length]).style.opacity = "0";
         document.getElementById(pictures[(i-1)%pictures.length]).style.setProperty("-webkit-opacity", "0");
         document.getElementById(pictures[(i-1)%pictures.length]).style.setProperty("-moz-opacity", "0");
         document.getElementById(pictures[(i-1)%pictures.length]).style.setProperty("-ms-opacity", "0");
         document.getElementById(pictures[(i)%pictures.length]).style.opacity = "1";
         document.getElementById(pictures[(i)%pictures.length]).style.setProperty("-webkit-opacity", "1");
         document.getElementById(pictures[(i)%pictures.length]).style.setProperty("-moz-opacity", "1");
         document.getElementById(pictures[(i)%pictures.length]).style.setProperty("-ms-opacity", "1");
    }, 7500);

});
