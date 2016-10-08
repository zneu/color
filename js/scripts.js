$(document).ready(function () {
  $("#PageColors form").submit(function(event) {
    var background = $("input#BgColor").val();
    var introBg = $("input#IntroColor").val();
    var formBg = $("input#FormColor").val();
    var header1 = $("input#h1Color").val();
    var header4 = $("input#h4Color").val();
    var paragraph = $("input#ParagraphColor").val();

    $("body").css("background-color", background);
    $("#Intro").css("background-color", introBg);
    $("#PageColors").css("background-color", formBg);
    $("h1").css("color", header1);
    $("h4").css("color", header4);
    $("p").css("color", paragraph);

    $(".OutputBg").text(background);
    $(".OutputIntro").text(introBg);
    $(".OutputForm").text(introBg);
    $(".OutputH1").text(header1);
    $(".OutputH4").text(header4);
    $(".OutputP").text(paragraph);

    $(".hex").show();

    event.preventDefault();
  })
})
