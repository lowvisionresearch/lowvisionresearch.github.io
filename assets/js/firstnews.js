var data = ' ';
function doData(json) {
    if(json.feed.entry[0].title.$t=='selab_news')
        data = json.feed.entry[0].content;
    else
        data = json.feed.entry[1].content;
}

function readData() {
    
    data = data['$t'].split('<p><br />');
    var htmlExpr = '';

    var dataLine = String(data[0]).split('</p>');
    htmlExpr += '<div class=\"text-area\">';
    htmlExpr += '<div class=\"headline\">' + String(dataLine[1]).substring(3) + '</div>';
    htmlExpr += '<div class=\"date\">' + String(dataLine[0]).substring(3) + '</div>';
    htmlExpr += '<div class=\"detail\">' + String(dataLine[2]).substring(3) +  '</div>';
    htmlExpr += '</div>';

    document.getElementById("news-snippet").innerHTML += htmlExpr;
}
