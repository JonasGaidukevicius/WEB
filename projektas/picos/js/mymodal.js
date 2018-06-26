$(".box p img.sicilietiska").click(function () {
  var mazoPaveiksliukoSrc = $(this).prop("src");
  var naujasPaveiksliukas = $("<img>");
  // var sudetis = "<h3>Sudėtis</h3><ul><li>• picos tešla</li><li>• paprika: 2 vnt. (didelės)</li><li>• pomidorai: 500 gramų</li><li>• pomidorai savo sultyse be odelių: 1 skardinė (nėra privaloma)</li><li>• svogūnas: 2 vnt. (dideli)</li><li>• česnakas: 2-3 skiltelės</li><li>• čili pipiriukai: 1-2 vnt.</li><li>• raudonosios pupelės: 1 skardinė</li><li>• mėsos prieskoniai</li><li>• druska</li><li>• saldžiosios paprikos milteliai</li><li>• mėgstami prieskoniai</li><li>• šviežiai malti juodieji pipirai</li><li>• alyvuogių aliejus</li></ul>"

  var sudetis = "<h6>Sudėtis</h6><ul><li>• picos tešla</li><li>• picos tešla</li><li>• picos padažas arba pomidorų tyrė</li><li>• sutarkuotas mocarelos sūris</li><li>• sutarkuotas čederio sūris</li><li>• Pepperoni dešra</li><li>• džiovinti raudonėliai: šiek tiek</li></ul>"

  var gaminimas = "<h6>Gaminimas</h6><p>Iš pradžių pasiruošiame picos tešlą, iškočiojame arba suformuojame rankomis kvadrato formos padą. Dedame ant aliejumi pateptos kepimo skardos.<br>Tuomet patepkite tešlą picos padažu bei užbarstome sūriais (visą pagrindą). Vieną picos pusę paliekame tik su sūriu, ant kitos pusės sudėliojame<br>supjaustytą 'Pepperoni' dešrą. Apibarstome pagal savo skonį džiovintais raudonėliais. Po to kepame iki 220 laipsnių temperatūros įkaitintoje orkaitėje maždaug 12 minučių.</p>"

  naujasPaveiksliukas.prop("src", mazoPaveiksliukoSrc);
  naujasPaveiksliukas.prop("width", 150);
  $(".mymodalbox").append(naujasPaveiksliukas);
  $(".mymodalbox").append(sudetis);
  $(".mymodalbox").append(gaminimas);
  $(".mymodal").css({"display":"flex"})
  // $(".mymodal").show("slow");

})
// ------------------------------------------------------------
$(".box p img.plonapade").click(function () {
  var mazoPaveiksliukoSrc = $(this).prop("src");
  var naujasPaveiksliukas = $("<img>");
  // var sudetis = "<h3>Sudėtis</h3><ul><li>• picos tešla</li><li>• paprika: 2 vnt. (didelės)</li><li>• pomidorai: 500 gramų</li><li>• pomidorai savo sultyse be odelių: 1 skardinė (nėra privaloma)</li><li>• svogūnas: 2 vnt. (dideli)</li><li>• česnakas: 2-3 skiltelės</li><li>• čili pipiriukai: 1-2 vnt.</li><li>• raudonosios pupelės: 1 skardinė</li><li>• mėsos prieskoniai</li><li>• druska</li><li>• saldžiosios paprikos milteliai</li><li>• mėgstami prieskoniai</li><li>• šviežiai malti juodieji pipirai</li><li>• alyvuogių aliejus</li></ul>"

  var sudetis = "<h6>Sudėtis</h6><ul><li>• picos tešla</li><li>• picos tešla</li><li>• picos padažas arba pomidorų tyrė</li><li>• sutarkuotas mocarelos sūris</li><li>• sutarkuotas čederio sūris</li><li>• Pepperoni dešra</li><li>• džiovinti raudonėliai: šiek tiek</li></ul>"

  var gaminimas = "<h6>Gaminimas</h6><p>Iš pradžių pasiruošiame picos tešlą, iškočiojame arba suformuojame rankomis kvadrato formos padą. Dedame ant a--------------------------------------------liejumi pateptos kepimo skardos.<br>Tuomet patepkite tešlą picos padažu bei užbarstome sūriais (visą pagrindą). Vieną picos pusę paliekame tik su sūriu, ant kitos pusės sudėliojame<br>supjaustytą 'Pepperoni' dešrą. Apibarstome pagal savo skonį džiovintais raudonėliais. Po to kepame iki 220 laipsnių temperatūros įkaitintoje orkaitėje maždaug 12 minučių.</p>"

  naujasPaveiksliukas.prop("src", mazoPaveiksliukoSrc);
  naujasPaveiksliukas.prop("width", 150);
  $(".mymodalbox").append(naujasPaveiksliukas);
  $(".mymodalbox").append(sudetis);
  $(".mymodalbox").append(gaminimas);
  $(".mymodal").css({"display":"flex"})
  // $(".mymodal").show("slow");

})

// ------------------------------------------------------------
$(".mymodal").click(function () {
    $(".mymodal").css({"display":"none"});
    $(".mymodalbox").empty();
})
