$(function(){
  $("#newForm").submit(function(event){
    var message = $("input#message").val();
    message = message.toUpperCase();
    $(".message").text(message);

    $("#shoutMessage").show();
    event.preventDefault();
  });

});
