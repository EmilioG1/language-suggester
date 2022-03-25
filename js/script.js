// // business logic


// UI logic

$(document).ready(function() {
  $("form#language").submit(function(event) {
    event.preventDefault();
    const plane = $("input:radio[name=plane]:checked").val();
    const bev = $("select#drink").val();
    const travel = $("input:radio[name=visit]:checked").val();
    const num = parseInt($("input#num").val());

    if (num <= 4) {
      if (bev === "1" && travel === "no") {
        $("#ruby").show();
        $("#python").hide();
        $("#javascript").hide();
        $("#trouble").hide();
      } else if (bev === "2") {
        $("#python").show();
        $("#javascript").hide();
        $("#trouble").hide();
        $("#ruby").hide();
      } else if (travel === "yes") {
        $("#javascript").show();
        $("#python").hide();
        $("#trouble").hide();
        $("#ruby").hide();
      } else {
        $("#trouble").show();
        $("#python").hide();
        $("#javascript").hide();
        $("#ruby").hide();
      }
    } else if (num >= 5 && num <= 10) {
      if (plane === "front") {
        $("#javascript").show();
        $("#python").hide();
        $("#trouble").hide();
        $("#ruby").hide();
      } else if (plane === "back") {
        $("#python").show();
        $("#javascript").hide();
        $("#trouble").hide();
        $("#ruby").hide();
      } else if (plane === "middle") {
        $("#ruby").show();
        $("#python").hide();
        $("#javascript").hide();
        $("#trouble").hide();
      } else {
        $("#trouble").show();
        $("#python").hide();
        $("#javascript").hide();
        $("#ruby").hide();
      }
    } else {
      $("#trouble").show();
      $("#python").hide();
      $("#javascript").hide();
      $("#ruby").hide();
    }
  });
});