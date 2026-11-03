/* Sección "(Elsewhere)": piezas sueltas, logos y descartes que no son parte de un proyecto.
   - file / thumb: archivo grande (visor) y miniatura (rejilla). Los vídeos usan
     NOMBRE.mp4 + NOMBRE.poster.webp (mismo nombre).
   - w / h: tamaño en píxeles (para calcular la proporción de cada pieza).
   - size: tamaño en la rejilla: "S" pequeño, "M" medio, "L" grande, "XL" muy ancho.
   - caption: texto del pie (opcional). Si está vacío no se muestra nada. */
var ELSEWHERE_BASE = "assets/elsewhere/";

var ELSEWHERE = [
  { file: "00-99-game.webp", thumb: "thumb/00-99-game.webp", w: 616, h: 954, size: "S", caption: "" },
  { file: "untitled-artwork-9.webp", thumb: "thumb/untitled-artwork-9.webp", w: 900, h: 1800, size: "S", caption: "" },
  { file: "coffee-shop-illustration.webp", thumb: "thumb/coffee-shop-illustration.webp", w: 1273, h: 1800, size: "M", caption: "" },
  { file: "alba-flower.webp", thumb: "thumb/alba-flower.webp", w: 871, h: 1800, size: "S", caption: "" },
  { file: "alba-packaging-cutsheet.webp", thumb: "thumb/alba-packaging-cutsheet.webp", w: 1439, h: 1800, size: "M", caption: "" },
  { file: "are-na-profile-picture.webp", thumb: "thumb/are-na-profile-picture.webp", w: 1800, h: 1800, size: "S", caption: "" },
  { file: "bisiesto-logo.webp", thumb: "thumb/bisiesto-logo.webp", w: 1678, h: 1678, size: "S", caption: "" },
  { file: "cards-test.webp", thumb: "thumb/cards-test.webp", w: 1800, h: 1370, size: "L", caption: "" },
  { file: "carpeta-manila-profile-picture.webp", thumb: "thumb/carpeta-manila-profile-picture.webp", w: 1800, h: 1800, size: "S", caption: "" },
  { file: "elisava-tag-5guys.webp", thumb: "thumb/elisava-tag-5guys.webp", w: 1350, h: 1800, size: "M", caption: "" },
  { file: "eureka.webp", thumb: "thumb/eureka.webp", w: 998, h: 905, size: "S", caption: "" },
  { file: "evernote-test.mp4", thumb: "thumb/evernote-test.webp", w: 1280, h: 720, size: "L", caption: "" },
  { file: "infographic-asset.webp", thumb: "thumb/infographic-asset.webp", w: 1800, h: 1651, size: "M", caption: "" },
  { file: "jart-the-finest-cuts-deck-tests.webp", thumb: "thumb/jart-the-finest-cuts-deck-tests.webp", w: 1600, h: 1066, size: "L", caption: "" },
  { file: "keycap-ai.webp", thumb: "thumb/keycap-ai.webp", w: 1024, h: 1024, size: "M", caption: "" },
  { file: "alba-turntable-test.mp4", thumb: "thumb/alba-turntable-test.webp", w: 1016, h: 1280, size: "M", caption: "" },
  { file: "mande-mask-b.webp", thumb: "thumb/mande-mask-b.webp", w: 1349, h: 1800, size: "S", caption: "" },
  { file: "martin-identity-test.webp", thumb: "thumb/martin-identity-test.webp", w: 1080, h: 1350, size: "M", caption: "" },
  { file: "monotype-workshop.webp", thumb: "thumb/monotype-workshop.webp", w: 1427, h: 1800, size: "M", caption: "" },
  { file: "nudge-asset-test.mp4", thumb: "thumb/nudge-asset-test.webp", w: 1024, h: 1280, size: "M", caption: "" },
  { file: "nudge-nudges.webp", thumb: "thumb/nudge-nudges.webp", w: 868, h: 1800, size: "S", caption: "" },
  { file: "offscript-scene-test.webp", thumb: "thumb/offscript-scene-test.webp", w: 1800, h: 1106, size: "L", caption: "" },
  { file: "paperplane-building.webp", thumb: "thumb/paperplane-building.webp", w: 1350, h: 1800, size: "S", caption: "" },
  { file: "parachilna-jury-final.webp", thumb: "thumb/parachilna-jury-final.webp", w: 1350, h: 1800, size: "M", caption: "" },
  { file: "portfolio-concept-test-black.webp", thumb: "thumb/portfolio-concept-test-black.webp", w: 1528, h: 1800, size: "M", caption: "" },
  { file: "portfolio-concept-test-magenta.webp", thumb: "thumb/portfolio-concept-test-magenta.webp", w: 1800, h: 1800, size: "M", caption: "" },
  { file: "portfolio-favicon.webp", thumb: "thumb/portfolio-favicon.webp", w: 1028, h: 1028, size: "S", caption: "" },
  { file: "product-photography-session.webp", thumb: "thumb/product-photography-session.webp", w: 1350, h: 1800, size: "M", caption: "" },
  { file: "ss-anagram.svg", thumb: "thumb/ss-anagram.svg", w: 26, h: 34, size: "S", caption: "" },
  { file: "saas-modular-proposal.mp4", thumb: "thumb/saas-modular-proposal.webp", w: 750, h: 500, size: "S", caption: "" },
  { file: "sass-cap.webp", thumb: "thumb/sass-cap.webp", w: 1450, h: 1800, size: "M", caption: "" },
  { file: "sass-logo.webp", thumb: "thumb/sass-logo.webp", w: 1800, h: 530, size: "L", caption: "" },
  { file: "sass-web-test.mp4", thumb: "thumb/sass-web-test.webp", w: 1280, h: 824, size: "L", caption: "" },
  { file: "shoot-adjustments.webp", thumb: "thumb/shoot-adjustments.webp", w: 1242, h: 1552, size: "M", caption: "" },
  { file: "ssmm-profile-picture.webp", thumb: "thumb/ssmm-profile-picture.webp", w: 1800, h: 1800, size: "S", caption: "" },
  { file: "temps-detail.webp", thumb: "thumb/temps-detail.webp", w: 1350, h: 1800, size: "S", caption: "" },
  { file: "temps.webp", thumb: "thumb/temps.webp", w: 1376, h: 1800, size: "M", caption: "" },
  { file: "title-test.webp", thumb: "thumb/title-test.webp", w: 1800, h: 901, size: "M", caption: "" },
  { file: "u-u.webp", thumb: "thumb/u-u.webp", w: 1618, h: 108, size: "XL", caption: "" },
  { file: "vestige-logo-test.svg", thumb: "thumb/vestige-logo-test.svg", w: 818, h: 226, size: "M", caption: "" },
  { file: "workshop-buildup.webp", thumb: "thumb/workshop-buildup.webp", w: 1350, h: 1800, size: "S", caption: "" }
];
