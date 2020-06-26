$(document).ready(function () {
  setTimeout(function () {
    $("#tpopup").fadeIn(500);
  }, 5000);
  $("#thover").click(function () {
    $(this).fadeOut();
    $("#tpopup").fadeOut();
  });

  $("#tclose").click(function () {
    $("#thover").fadeOut();
    $("#tpopup").fadeOut();
  });
});
