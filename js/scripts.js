$(document).ready(function () {
  $("#PageColors form").submit(function(event) {
    var background = $("input#BgColor").val();
    var header1 = $("input#h1Color").val();
    var header4 = $("input#h4Color").val();
    var paragraph = $("input#ParagraphColor").val();

    $("body").css("background-color", background);
    $("h1").css("color", header1);
    $("h4").css("color", header4);
    $("p").css("color", paragraph);

    $(".Input1").text(background);
    $(".Input2").text(header1);
    $(".Input3").text(header4);
    $(".Input4").text(paragraph);

    $(".hex").show();

    event.preventDefault();
  })
})
