// business logic



// UI logic

$(document).ready(function() {
  $("form#language").submit(function(event) {
    event.preventDefault();
    const front = $("input#front").val();
    const back = $("input#back").val();
    const middle = $("input#middle").val();
    const bev = $("select#drink").val();
    const travelYes = $("input#yes").val()
    const travelNo = $("input#no").no();
    const num = $("input#num").val()


  });
});