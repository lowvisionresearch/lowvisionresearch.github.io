var data = null;
function doData(json) {
    data = json.feed.entry;
}

function readData() {
    var htmlExpr = '<ol>';

    //Loop through each news data row and format/display it.
    for (var i = 1; i < data.length; i++) {
        htmlExpr += '<li>';
        htmlExpr += data[i]["gs$cell"]["$t"].replace(/&/g, "&amp;");
        htmlExpr += '</li>';
    }

    htmlExpr += "</ol>";

    document.getElementById("publications-text-area").innerHTML += htmlExpr;
}
