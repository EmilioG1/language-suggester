// // business logic
// function ruby() {
//   return $("#ruby").show();
// }

// function python() {
//   return $("#python").show();
// }

// function javascript() {
//   return $("#javascript").show();
// }

// function trouble() {
//   return $("#trouble").show();
// }

// UI logic

$(document).ready(function() {
  $("form#language").submit(function(event) {
    const plane = $("input:radio[name=plane]:checked").val();
    // const back = $("input#back").val();
    // const middle = $("input#middle").val();
    const bev = $("select#drink").val();
    const travel = $("input:radio[name=visit]:checked").val();
    // const travelNo = $("input#no").val();
    const num = parseInt($("input#num").val());
    console.log(plane);
    console.log(bev);
    console.log(travel);
    console.log(num);
    event.preventDefault();


    if (num <= 4) {
      if (bev === "1") {
        $("#ruby").show();
        
      } else if (bev === "2") {
        $("#python").show();

      } else if (travel === "yes") {
        $("#javascript").show();

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

    // $("#python").hide();
    // $("#javascript").hide();
    // $("#trouble").hide();
    // $("#ruby").hide();
  });
});