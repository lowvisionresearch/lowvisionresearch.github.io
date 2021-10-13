function readData() {
    var data;
	$.ajax({
	  type: "GET",
	  url: "assets/data/news.csv",
	  dataType: "text",
	  success: function(response)
	  {
		data = $.csv.toArrays(response);

        var htmlExpr = '';

        //Loop through each news data row and format/display it.
        for (var i = 1; i < data.length; i++) {
            htmlExpr += '<div class=\"text-area\">';
            htmlExpr += '<div class=\"headline\">' + data[i][0] + '</div>';
            htmlExpr += '<div class=\"date\">' + data[i][1] + '</div>';
            htmlExpr += '<div class=\"detail\">' + data[i][2] + '</div>';
            htmlExpr += '</div>';
        }

        document.getElementById("news-area").innerHTML += htmlExpr;
	  }
	});
}
