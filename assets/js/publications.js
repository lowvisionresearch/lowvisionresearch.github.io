var data = null;
function doData(json) {
    if(json.feed.entry[0].title.$t=='selab_pub')
        data = json.feed.entry[0].content;
    else
        data = json.feed.entry[1].content;
}
function readData() {
    var htmlExpr = '<ol>';
    data = data['$t'].split('$');
    //Loop through each news data row and format/display it.
    for (var i = 1; i < data.length; i++) {
        htmlExpr += '<li>';
        htmlExpr += data[i].split('</p>')[0];
        htmlExpr += '</li>';
    }

    htmlExpr += "</ol>";

    document.getElementById("publications-text-area").innerHTML += htmlExpr;
}
