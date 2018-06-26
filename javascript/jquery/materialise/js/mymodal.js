$(".box p img").click(function () {
  var mazoPaveiksliukoSrc = $(this).prop("src");
  var naujasPaveiksliukas = $("<img>");
  var tekstas = "Tekstas po nuotrauka"
  naujasPaveiksliukas.prop("src", mazoPaveiksliukoSrc);
  $(".mymodalbox").append(naujasPaveiksliukas);
  $(".mymodalbox").append(tekstas);
  $(".mymodal").css({"display":"flex"})
  // $(".mymodal").show("slow");

})

$(".mymodal").click(function () {
    $(".mymodal").css({"display":"none"});
    $(".mymodalbox").empty();
})
