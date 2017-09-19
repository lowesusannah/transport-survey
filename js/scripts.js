$(document).ready(function(){
  $("#survey").submit(function(event){
    event.preventDefault();
    
    $("input:checkbox[name=work-transport]:checked").each(function(){
      var input = $(this).val();
      $(".results ul").append('<li>' + input + '</li>');
    });

    $("#survey").slideUp();
    $(".results").slideDown();
  });
});
