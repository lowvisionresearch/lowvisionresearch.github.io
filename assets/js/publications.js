function readData() {
    var data;
	$.ajax({
	  type: "GET",
	  url: "assets/data/publications.csv",
	  dataType: "text",
	  success: function(response)
	  {
		data = $.csv.toArrays(response);

        var htmlExpr = '<ol>';

        // Loop through each news data row and format/display it.
        for (var i = 1; i < data.length; i++) {
            htmlExpr += '<li>' + data[i] + '</li>';
        }

        htmlExpr += "</ol>";

        document.getElementById("publications-text-area").innerHTML += htmlExpr;
	  }
	});
}
