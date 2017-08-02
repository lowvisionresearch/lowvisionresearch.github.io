var data = null;
function doData(json) {
    data = json.feed.entry;
}

function readData() {
    var htmlExpr = '<div class=\"text-area\">';
    htmlExpr += '<div class=\"headline\">' + data[3]["gs$cell"]["$t"] + '</div>';
    htmlExpr += '<div class=\"date\">' + data[4]["gs$cell"]["$t"] + '</div>';
    htmlExpr += '<div class=\"detail\">' + data[5]["gs$cell"]["$t"] + '</div>';
    htmlExpr += '</div>';

    document.getElementById("news-snippet").innerHTML += htmlExpr;
}
