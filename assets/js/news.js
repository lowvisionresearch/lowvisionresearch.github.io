var data = null;
function doData(json) {
    if(json.feed.entry[0].title.$t=='selab_news')
        data = json.feed.entry[0].content;
    else
        data = json.feed.entry[1].content;
}

function readData() {
    
    data = data['$t'].split('<p><br />');
    var htmlExpr = '';
    var k = 0;
    //Loop through each news data row and format/display it.
    for (var i = 0; i < data.length; i+=1) {
        if(i>0) k=1;
        var dataLine = data[i].split('</p>');
        htmlExpr += '<div class=\"text-area\">';
        htmlExpr += '<div class=\"headline\">' + dataLine[1+k].substring(3) + '</div>';
        htmlExpr += '<div class=\"date\">' + dataLine[0+k].substring(3) + '</div>';
        htmlExpr += '<div class=\"detail\">' + dataLine[2+k].substring(3) + '</div>';
        htmlExpr += '</div>';
    }

    document.getElementById("news-area").innerHTML += htmlExpr;
}