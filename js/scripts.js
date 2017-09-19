$(document).ready(function(){
  $("#survey").submit(function(event){
    event.preventDefault();

    $("input:checkbox[name=work-transport]:checked").each(function(){
      var input = $(this).val();
      $(".results-work ul").append('<li>' + input + '</li>');
    });

    $("input:checkbox[name=fun-transport]:checked").each(function(){
      var input = $(this).val();
      $(".results-fun ul").append('<li>' + input + '</li>');
    });

    $("#survey").slideUp();
    $(".results").slideDown();
  });
});
