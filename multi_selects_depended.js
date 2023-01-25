$(document).on("change", "#filter_category", function () {
  
  $.post(
    "services.php?j=get_sub_Cats",
    { cats: $(this).val() },
    function (res) {
      var already_selected = $("#filter_sub_category").val();
      console.log(already_selected);
      if (res.length >0) {
        $("#filter_sub_category").html("");
        var sub_categories = JSON.parse(res);
        $.each(sub_categories, function (key, sub_category) {
          if (already_selected.includes(sub_category.id)) {
            $("#filter_sub_category").append(
              "<option selected value='" +
                sub_category.id +
                "'>" +
                sub_category.title +
                "</option>"
            );
          } else {
            $("#filter_sub_category").append(
              "<option value='" +
                sub_category.id +
                "'>" +
                sub_category.title +
                "</option>"
            );
          }
        });
      }
    }
  );
});
