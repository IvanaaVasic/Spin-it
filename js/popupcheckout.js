$(document).ready(function() {
  setTimeout(function() {
    $("#checkout-popup").fadeIn(500);
  }, 5000);
  $("#thover").click(function() {
    $(this).fadeOut();
    $("#checkout-popup").fadeOut();
  });

  $("#tclose").click(function() {
    $("#thover").fadeOut();
    $("#checkout-popup").fadeOut();
  });
});
