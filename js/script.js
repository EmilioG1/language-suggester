// business logic



// UI logic

$(document).ready(function() {
  $("form#language").submit(function(event) {
    event.preventDefault();
    const plane = $("input:radio[name=plane]:checked").val();
    // const back = $("input#back").val();
    // const middle = $("input#middle").val();
    const bev = $("select#drink").val();
    const travelYes = $("input#yes").val()
    const travelNo = $("input#no").val();
    const num = parseInt($("input#num").val());




    if (num <= 4) {
      if (bev === "1") {
        $("#ruby").show();
      } else if (bev === "2") {
        $("#python").show();
      } else {
        $("#trouble").show();
      }
    } else if (num >= 5 && num <= 10) {
      if (plane === "front") {
        $("#javascript").show();
      } else if (plane === "back") {
        $("#python").show();
      } else if (plane === "middle") {
        $("#ruby").show();
      } else {
        $("#trouble").show();
      }
    } else {
      $("#trouble").show();
    }
  

  });
});