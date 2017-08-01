var data = null;
function doData(json) {
    data = json.feed.entry;
}

function readData() {
    var htmlExprPI = '';
    var htmlExprPostDocs = '';
    var htmlExprStudents = '';
    var htmlExprAlumni = '';

    //Loop through each news data row and format/display it.
    for (var i = 6; i < data.length; i+=6) {
        if (data[i]["gs$cell"]["$t"] == "Principal Investigator.") {
            htmlExprPI += "<div class=\"profile-area\">";
            if (data[i+1]["gs$cell"]["$t"] != "--") {
                htmlExprPI += "<a href=\"" + data[i+1]["gs$cell"]["$t"] + "\" target=\"_blank\">";
            }
            htmlExprPI += "<div class=\"profile-pic\">";
            if (data[i+5]["gs$cell"]["$t"] != "--") {
                htmlExprPI += "<img src=\"" + data[i+5]["gs$cell"]["$t"] + "\"></div>";
            } else {
                htmlExprPI += "<img src=\"assets/img/people.jpg\"></div>";
            }
            htmlExprPI += "<div class=\"profile-desc\">";
            if (data[i+2]["gs$cell"]["$t"] != "--") {
                htmlExprPI += "<h1>" + data[i+2]["gs$cell"]["$t"] + "</h1>";
            }
            if (data[i+3]["gs$cell"]["$t"] != "--") {
                htmlExprPI += "<h2>" + data[i+3]["gs$cell"]["$t"] + "</h2>";
            }
            if (data[i+4]["gs$cell"]["$t"] != "--") {
                htmlExprPI += "<h3>" + data[i+4]["gs$cell"]["$t"] + "</h3>";
            }
            htmlExprPI += "</div>";
            if (data[i+1]["gs$cell"]["$t"] != "--") {
                htmlExprPI += "</a>";
            }
            htmlExprPI += "</div>";
        } else if (data[i]["gs$cell"]["$t"] == "Post-Doctoral Fellows.") {
            htmlExprPostDocs += "<div class=\"profile-area\">";
            if (data[i+1]["gs$cell"]["$t"] != "--") {
                htmlExprPostDocs += "<a href=\"" + data[i+1]["gs$cell"]["$t"] + "\" target=\"_blank\">";
            }
            htmlExprPostDocs += "<div class=\"profile-pic\">";
            if (data[i+5]["gs$cell"]["$t"] != "--") {
                htmlExprPostDocs += "<img src=\"" + data[i+5]["gs$cell"]["$t"] + "\"></div>";
            } else {
                htmlExprPostDocs += "<img src=\"assets/img/people.jpg\"></div>";
            }
            htmlExprPostDocs += "<div class=\"profile-desc\">";
            if (data[i+2]["gs$cell"]["$t"] != "--") {
                htmlExprPostDocs += "<h1>" + data[i+2]["gs$cell"]["$t"] + "</h1>";
            }
            if (data[i+3]["gs$cell"]["$t"] != "--") {
                htmlExprPostDocs += "<h2>" + data[i+3]["gs$cell"]["$t"] + "</h2>";
            }
            if (data[i+4]["gs$cell"]["$t"] != "--") {
                htmlExprPostDocs += "<h3>" + data[i+4]["gs$cell"]["$t"] + "</h3>";
            }
            htmlExprPostDocs += "</div>";
            if (data[i+1]["gs$cell"]["$t"] != "--") {
                htmlExprPostDocs += "</a>";
            }
            htmlExprPostDocs += "</div>";
        } else if (data[i]["gs$cell"]["$t"] == "Students.") {
            htmlExprStudents += "<div class=\"profile-area\">";
            if (data[i+1]["gs$cell"]["$t"] != "--") {
                htmlExprStudents += "<a href=\"" + data[i+1]["gs$cell"]["$t"] + "\" target=\"_blank\">";
            }
            htmlExprStudents += "<div class=\"profile-pic\">";
            if (data[i+5]["gs$cell"]["$t"] != "--") {
                htmlExprStudents += "<img src=\"" + data[i+5]["gs$cell"]["$t"] + "\"></div>";
            } else {
                htmlExprStudents += "<img src=\"assets/img/people.jpg\"></div>";
            }
            htmlExprStudents += "<div class=\"profile-desc\">";
            if (data[i+2]["gs$cell"]["$t"] != "--") {
                htmlExprStudents += "<h1>" + data[i+2]["gs$cell"]["$t"] + "</h1>";
            }
            if (data[i+3]["gs$cell"]["$t"] != "--") {
                htmlExprStudents += "<h2>" + data[i+3]["gs$cell"]["$t"] + "</h2>";
            }
            if (data[i+4]["gs$cell"]["$t"] != "--") {
                htmlExprStudents += "<h3>" + data[i+4]["gs$cell"]["$t"] + "</h3>";
            }
            htmlExprStudents += "</div>";
            if (data[i+1]["gs$cell"]["$t"] != "--") {
                htmlExprStudents += "</a>";
            }
            htmlExprStudents += "</div>";
        } else if (data[i]["gs$cell"]["$t"] == "Alumni.") {
            htmlExprAlumni += "<div class=\"profile-desc\">";
            if (data[i+1]["gs$cell"]["$t"] != "--") {
                htmlExprAlumni += "<a href=\"" + data[i+1]["gs$cell"]["$t"] + "\" target=\"_blank\">";
            }
            if (data[i+2]["gs$cell"]["$t"] != "--") {
                htmlExprAlumni += "<h1>" + data[i+2]["gs$cell"]["$t"] + "</h1>";
            }
            if (data[i+3]["gs$cell"]["$t"] != "--") {
                htmlExprAlumni += "<h2>" + data[i+3]["gs$cell"]["$t"] + "</h2>";
            }
            if (data[i+4]["gs$cell"]["$t"] != "--") {
                htmlExprAlumni += "<h3>" + data[i+4]["gs$cell"]["$t"] + "</h3>";
            }
            htmlExprAlumni += "</div>";
            if (data[i+1]["gs$cell"]["$t"] != "--") {
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

$(document).ready(function(){
    readData();
});
