// let container = document.querySelectorAll(".container");

//create 1 row div with 3 columns.
for(let i = 9; i <= 17; i++){
    let rowDiv = $("<div>");
    rowDiv.attr("class", "row");
    let column1 = $("<div>");
    column1.attr("class", "col-md-2");
    let column2 = $("<div>");
    column2.attr("class", "col-md-8");
    let column3 = $("<div>");
    column3.attr("class", "col-md-2 saveBtn");
    rowDiv.append(column1);
    rowDiv.append(column2);
    rowDiv.append(column3);
    $(".container").append(rowDiv);

}