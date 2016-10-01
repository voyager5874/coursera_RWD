    var quick_overview;


    function showTemplate(template, data){
    var html    = template(data); // render the data into the template
    $('#content').html(html); // put the rendered template into the DOM
}




    $(document).ready(function(){

    var source = $("#quick_overview").html();
    var quick_overview_templ = Handlebars.compile(source);


    // define the data for the template
    // we define an objects which contains an 
    // array of other objects. This array will be used
    // to create multiple images


    
 showTemplate(quick_overview_templ, taskList)

});