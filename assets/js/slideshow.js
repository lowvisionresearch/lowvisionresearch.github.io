$(document).ready(function() {

    var pictures = [
        "photo4",
        "photo5",
	    "photo3"
    ];
    var i = 0;
	
	 // Show the first image immediately
    document.getElementById(pictures[0]).style.opacity = "1";
    document.getElementById(pictures[0]).style.setProperty("-webkit-opacity", "1");
    document.getElementById(pictures[0]).style.setProperty("-moz-opacity", "1");
    document.getElementById(pictures[0]).style.setProperty("-ms-opacity", "1");

   // Start the first transition earlier (after 3 seconds instead of 7)
    setTimeout(function() {
        i++;
        document.getElementById(pictures[0]).style.opacity = "0";
        document.getElementById(pictures[0]).style.setProperty("-webkit-opacity", "0");
        document.getElementById(pictures[0]).style.setProperty("-moz-opacity", "0");
        document.getElementById(pictures[0]).style.setProperty("-ms-opacity", "0");

        document.getElementById(pictures[i % pictures.length]).style.opacity = "1";
        document.getElementById(pictures[i % pictures.length]).style.setProperty("-webkit-opacity", "1");
        document.getElementById(pictures[i % pictures.length]).style.setProperty("-moz-opacity", "1");
        document.getElementById(pictures[i % pictures.length]).style.setProperty("-ms-opacity", "1");

        // Continue normal slideshow at 7-second intervals
        setInterval(function() {
            i++;
            document.getElementById(pictures[(i-1) % pictures.length]).style.opacity = "0";
            document.getElementById(pictures[(i-1) % pictures.length]).style.setProperty("-webkit-opacity", "0");
            document.getElementById(pictures[(i-1) % pictures.length]).style.setProperty("-moz-opacity", "0");
            document.getElementById(pictures[(i-1) % pictures.length]).style.setProperty("-ms-opacity", "0");

            document.getElementById(pictures[i % pictures.length]).style.opacity = "1";
            document.getElementById(pictures[i % pictures.length]).style.setProperty("-webkit-opacity", "1");
            document.getElementById(pictures[i % pictures.length]).style.setProperty("-moz-opacity", "1");
            document.getElementById(pictures[i % pictures.length]).style.setProperty("-ms-opacity", "1");
        }, 7000);
    }, 3000); // First transition happens after 3 seconds
});
