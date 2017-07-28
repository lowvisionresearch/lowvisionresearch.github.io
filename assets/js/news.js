var data = null;
function doData(json) {
    data = json.feed.entry;
}

function readData() {
    var htmlExpr = '';

    //Loop through each news data row and format/display it.
    for (var i = 3; i < data.length; i+=3) {
        htmlExpr += '<div class=\"text-area\">';
        htmlExpr += '<div class=\"headline\">' + data[i]["gs$cell"]["$t"] + '</div>';
        htmlExpr += '<div class=\"date\">' + data[i+1]["gs$cell"]["$t"] + '</div>';
        htmlExpr += '<div class=\"detail\">' + data[i+2]["gs$cell"]["$t"] + '</div>';
        htmlExpr += '</div>';
    }

    document.getElementById("news-area").innerHTML += htmlExpr;
}

$(document).ready(function(){
    readData();
});
