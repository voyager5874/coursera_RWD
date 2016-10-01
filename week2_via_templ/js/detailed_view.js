    var detailed_view;


    function showTemplate(template, data){
    var html    = template(data); // render the data into the template
    $('#content').html(html); // put the rendered template into the DOM
}




    $(document).ready(function(){

    var source = $("#detailed_view").html();
    var detailed_view = Handlebars.compile(source);


    // define the data for the template
    // we define an objects which contains an 
    // array of other objects. This array will be used
    // to create multiple images


    
 showTemplate(detailed_view, taskList)


});