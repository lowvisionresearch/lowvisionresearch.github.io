function readData() {
    var data;
	$.ajax({
	  type: "GET",
	  url: "assets/data/people.csv",
	  dataType: "text",
	  success: function(response)
	  {
		data = $.csv.toArrays(response);

        var htmlExprPI = '';
        var htmlExprPostDocs = '';
        var htmlExprStudents = '';
        var htmlExprAlumni = '';

        //Loop through each data row and format/display it.
        for (var i = 1; i < data.length; i++) {
            if (data[i][0] == "Principal Investigator.") {
                htmlExprPI += "<div class=\"profile-area\">";
                if (data[i][1] != "--") {
                    htmlExprPI += "<a href=\"" + data[i][1] + "\" target=\"_blank\">";
                }
                htmlExprPI += "<div class=\"profile-pic\">";
                if (data[i][5] != "--") {
                    htmlExprPI += "<img src=\"https://lowvisionresearch.github.io/" + data[i][5] + "\"></div>";
                } else {
                    htmlExprPI += "<img src=\"https://lowvisionresearch.github.io/assets/img/people.jpg\"></div>";
                }
                htmlExprPI += "<div class=\"profile-desc\">";
                if (data[i][2] != "--") {
                    htmlExprPI += "<h1>" + data[i][2] + "</h1>";
                }
                if (data[i][3] != "--") {
                    htmlExprPI += "<h2>" + data[i][3] + "</h2>";
                }
                if (data[i][4] != "--") {
                    htmlExprPI += "<h3>" + data[i][4] + "</h3>";
                }
                htmlExprPI += "</div>";
                if (data[i][1] != "--") {
                    htmlExprPI += "</a>";
                }
                htmlExprPI += "</div>";
            } else if (data[i][0] == "Post-Doctoral Fellows.") {
                htmlExprPostDocs += "<div class=\"profile-area\">";
                if (data[i][1] != "--") {
                    htmlExprPostDocs += "<a href=\"" + data[i][1] + "\" target=\"_blank\">";
                }
                htmlExprPostDocs += "<div class=\"profile-pic\">";
                if (data[i][5] != "--") {
                    htmlExprPostDocs += "<img src=\"https://lowvisionresearch.github.io/" + data[i][5] + "\"></div>";
                } else {
                    htmlExprPostDocs += "<img src=\"https://lowvisionresearch.github.io/assets/img/people.jpg\"></div>";
                }
                htmlExprPostDocs += "<div class=\"profile-desc\">";
                if (data[i][2] != "--") {
                    htmlExprPostDocs += "<h1>" + data[i][2] + "</h1>";
                }
                if (data[i][3] != "--") {
                    htmlExprPostDocs += "<h2>" + data[i][3] + "</h2>";
                }
                if (data[i][4] != "--") {
                    htmlExprPostDocs += "<h3>" + data[i][4] + "</h3>";
                }
                htmlExprPostDocs += "</div>";
                if (data[i][1] != "--") {
                    htmlExprPostDocs += "</a>";
                }
                htmlExprPostDocs += "</div>";
            } else if (data[i][0] == "Students.") {
                htmlExprStudents += "<div class=\"profile-area\">";
                if (data[i][1] != "--") {
                    htmlExprStudents += "<a href=\"" + data[i][1] + "\" target=\"_blank\">";
                }
                htmlExprStudents += "<div class=\"profile-pic\">";
                if (data[i][5] != "--") {
                    htmlExprStudents += "<img src=\"https://lowvisionresearch.github.io/" + data[i][5] + "\"></div>";
                } else {
                    htmlExprStudents += "<img src=\"https://lowvisionresearch.github.io/assets/img/people.jpg\"></div>";
                }
                htmlExprStudents += "<div class=\"profile-desc\">";
                if (data[i][2] != "--") {
                    htmlExprStudents += "<h1>" + data[i][2] + "</h1>";
                }
                if (data[i][3] != "--") {
                    htmlExprStudents += "<h2>" + data[i][3] + "</h2>";
                }
                if (data[i][4] != "--") {
                    htmlExprStudents += "<h3>" + data[i][4] + "</h3>";
                }
                htmlExprStudents += "</div>";
                if (data[i][1] != "--") {
                    htmlExprStudents += "</a>";
                }
                htmlExprStudents += "</div>";
            } else if (data[i][0] == "Alumni.") {
                htmlExprAlumni += "<div class=\"profile-desc\">";
                if (data[i][1] != "--") {
                    htmlExprAlumni += "<a href=\"" + data[i][1] + "\" target=\"_blank\">";
                }
                if (data[i][2] != "--") {
                    htmlExprAlumni += "<h1>" + data[i][2] + "</h1>";
                }
                if (data[i][3] != "--") {
                    htmlExprAlumni += "<h2>" + data[i][3] + "</h2>";
                }
                if (data[i][4] != "--") {
                    htmlExprAlumni += "<h3>" + data[i][4] + "</h3>";
                }
                htmlExprAlumni += "</div>";
                if (data[i][1] != "--") {
                    htmlExprAlumni += "</a>";
                }
                htmlExprAlumni += "</div>";
            }
        }

        document.getElementById("pi").innerHTML += htmlExprPI;
        document.getElementById("postdocs").innerHTML += htmlExprPostDocs;
        document.getElementById("students").innerHTML += htmlExprStudents;
        document.getElementById("alumni").innerHTML += htmlExprAlumni;
    }
	});
}
