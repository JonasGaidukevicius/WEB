$(".box p img.sicilietiska").click(function () {
  var mazoPaveiksliukoSrc = $(this).prop("src");
  var naujasPaveiksliukas = $("<img>");
  // var sudetis = "<h3>Sudėtis</h3><ul><li>• picos tešla</li><li>• paprika: 2 vnt. (didelės)</li><li>• pomidorai: 500 gramų</li><li>• pomidorai savo sultyse be odelių: 1 skardinė (nėra privaloma)</li><li>• svogūnas: 2 vnt. (dideli)</li><li>• česnakas: 2-3 skiltelės</li><li>• čili pipiriukai: 1-2 vnt.</li><li>• raudonosios pupelės: 1 skardinė</li><li>• mėsos prieskoniai</li><li>• druska</li><li>• saldžiosios paprikos milteliai</li><li>• mėgstami prieskoniai</li><li>• šviežiai malti juodieji pipirai</li><li>• alyvuogių aliejus</li></ul>"

  var sudetis = "<h6>Sudėtis</h6><ul><li>• picos tešla</li><li>• picos padažas arba pomidorų tyrė</li><li>• sutarkuotas mocarelos sūris</li><li>• sutarkuotas čederio sūris</li><li>• Pepperoni dešra</li><li>• džiovinti raudonėliai: šiek tiek</li></ul>"

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
  var sudetis = "<h6>Sudėtis</h6><ul><li>• šiltas vanduo: 220 mililitrų</li><li>• sausos mielės: 1,5 arbatinio šaukštelio</li><li>• cukrus: 0,5 arbatinio šaukštelio</li><li>• druska: 0,5 arbatinio šaukštelio</li><li>• aliejus: 1,5 valgomojo šaukšto</li><li>• miltai (tiek, kad tešla būtų minkoma, bet ne per kieta, minkšta ir glotni)</li><br><li>Ant picos viršaus:</li><li>• visi mėgiami ingredientai</li>"
  var gaminimas = "<h6>Gaminimas</h6><p>Pirmiausia šiltą vandenį sumaišome su sausomis mielėmis, druska, cukrumi bei aliejumi. Viską gerai išmaišius, beriame miltus. Gerai suminkome bei paliekame.<br>Tuomet paimame tešlos gabalėlį bei plonai iškočiojame. Iš tokio kiekio man gaunasi 4 didesnės picos, arba 5 mažesnės. Esminis dalykas kepant šią picą,<br>tai sūrio barstymas bei aukšta orkaitės temperatūra. Sūris turi būti barstomas po to, kai picos padas yra išteptas pomidorų pasta, o tik vėliau dedami<br>kiti mėgiami ingredientai. Kad pica būtų tikrai plonapadė, būtina orkaitę įkaitinti iki maksimumo, pas mane aukščiausia orkaitės temperatūra yra 250 laipsnių.<br>Įkaitinus orkaitę dedame picą (svarbiausia bededant, neišleisti viso karščio) bei kepame, kol gražiai parus ir padas kraštuose taps tarsi pūslėtas. </p>"

  naujasPaveiksliukas.prop("src", mazoPaveiksliukoSrc);
  naujasPaveiksliukas.prop("width", 150);
  $(".mymodalbox").append(naujasPaveiksliukas);
  $(".mymodalbox").append(sudetis);
  $(".mymodalbox").append(gaminimas);
  $(".mymodal").css({"display":"flex"})
  // $(".mymodal").show("slow");
})

// ------------------------------------------------------------
$(".box p img.margarita").click(function () {
  var mazoPaveiksliukoSrc = $(this).prop("src");
  var naujasPaveiksliukas = $("<img>");
  var sudetis = "<h6>Sudėtis</h6><ul><li>• 'Malsenos' mišinys picų papločiams kepti: 125 gramų</li><li>• 'Marinaros' padažas: 100 gramų</li><li>• Mocarelos sūris: 200 gramų</li><li>• alyvuogių aliejaus: 1 šaukštas</li><li>• sauja šviežių bazilikų lapelių</li>"
  var gaminimas = "<h6>Gaminimas</h6><p>Orkaitę įkaitinkite iki 250° C temperatūros. Rankomis suformuokite (arba ant miltuoto stalo iškočiokite) apvalų,<br>maždaug 30 cm skersmens picos pagrindą ir įdėkite į skardą. Aptepkite padažu ir išdėliokite mocarelos sūrio griežinėlius.<br>Apšlakstykite alyvuogių aliejumi. Kepkite 10-15 minučių. Ant iškepusios picos uždėkite šviežių bazilikų lapelių.</p>"

  naujasPaveiksliukas.prop("src", mazoPaveiksliukoSrc);
  naujasPaveiksliukas.prop("width", 150);
  $(".mymodalbox").append(naujasPaveiksliukas);
  $(".mymodalbox").append(sudetis);
  $(".mymodalbox").append(gaminimas);
  $(".mymodal").css({"display":"flex"})
  // $(".mymodal").show("slow");
})
// ----------------------------------------------
$(".mymodal").click(function () {
    $(".mymodal").css({"display":"none"});
    $(".mymodalbox").empty();
})
