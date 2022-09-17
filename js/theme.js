$(function () {
  $("#themeBtn").on("click", () => {
    if ($("body").attr("class")) {
      $("body").removeClass("dark-theme");
      $("a, i, h4, p").removeClass("text-light");
    } else {
      $("body").removeClass("bg-success bg-opacity-75");
      $("body").addClass("dark-theme");
      $("a, i, h4, p").addClass("text-light");
    }
  });
});
