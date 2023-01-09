$(function() {
    // Its a JQuery. We will do bindings here.
    $("#addButton").click(handleBtnClick);
});

function handleBtnClick(){
    var newTodo = $("#newTodo").val();
    if(!newTodo)
    {
        $("#newTodo").addClass("error");
        return;
    }

    $("#newTodo").removeClass("error");
    $("#newTodo").val("")
    $("#todos").append("<li>" + newTodo + "</li>")
}
