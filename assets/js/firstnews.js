function readData() {
    var data;
	$.ajax({
	  type: "GET",
	  url: "assets/data/news.csv",
	  dataType: "text",
	  success: function(response)
	  {
		data = $.csv.toArrays(response);

        var htmlExpr = '<div class=\"text-area\">';
        htmlExpr += '<div class=\"headline\">' + data[1][0] + '</div>';
        htmlExpr += '<div class=\"date\">' + data[1][1] + '</div>';
        htmlExpr += '<div class=\"detail\">' + data[1][2] + '</div>';
        htmlExpr += '</div>';

        document.getElementById("news-snippet").innerHTML += htmlExpr;
	  }
	});
}
