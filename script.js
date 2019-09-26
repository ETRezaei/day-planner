

//create 1 row div with 3 columns.
for(let i = 9; i <= 17; i++){
    let rowDiv = $("<div>");
    rowDiv.attr("class", "row");
    let column1 = $("<div>");
    if(i < 12){
        column1.text(i + " AM");
    }
    else if(i === 12){
        column1.text("12 PM");
    }
    else{
        column1.text(i-12 + " PM")
    }
    column1.attr("class", "col-md-2 hour");
    column1.attr("data-id", i);
    let column2 = $("<input>");
    let object = JSON.parse(localStorage.getItem(i));
    if(object){
        column2.val(object.todok);
    }
    
    column2.attr("class", "col-md-8");
    column2.attr("data-id", i);
    let column3 = $("<button>");
    column3.attr("class", "col-md-2 saveBtn");
    column3.attr("data-id", i);
    rowDiv.append(column1);
    rowDiv.append(column2);
    rowDiv.append(column3);
    $(".container").append(rowDiv);


}

$("button").on("click",function(event){
    event.preventDefault();
    let data_id = $(this).data("id");
    let rowEls = $('[data-id="'+data_id+'"]');
    let todo = rowEls[1].value;
    let time = rowEls[0].textContent;
    let saveInput = {
        todok: todo,    
        timek: time
    }

localStorage.setItem(data_id, JSON.stringify(saveInput));

})