//$(document).ready deprecated, documentation suggested using jQuery(function) instead

jQuery(function () {
  $("#submit").on("click", function () {
    let name = $("#name");
    let email = $("#email");
    let phoneNum = $("#phone");
    let required = new Array(name, email, phoneNum);

    for (i = 0; i < required.length; i++) {
      let message = $("#message").html("Please Fill Out Required Fields");
      if (required[i].val() == "") {
        message.addClass("warning");
        required[i].prev().addClass("warning");
      }

      if (required[i].val() != "") {
        message.removeClass("warning");
        required[i].prev().removeClass("warning");
      }
    }

    if ($(".warning").length == 0) {
      $("#form").remove();
      $("h2").html("Thanks for your feedback!");
    }
  });
});
