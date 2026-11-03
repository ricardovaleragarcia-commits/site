/* Datos del portafolio.
   - cover: portada (ya está en el repo, assets/covers/)
   - items: archivos de la ventana de cada proyecto. Al principio apuntan a la CDN de
     Framer; ejecuta descargar-assets.sh para bajarlos al repo y cambiar las rutas.
   - tablet: orden de los proyectos en tablet (810–1199 px).
*/
var BASE = "assets/media/";

var PROJECTS = [
  {
    title: "Alba Fingerboards, 2022",
    cover: "assets/covers/albafingerboards.webp",
    tablet: 1,
    lineHeight: 1.1,
    info: "Alba Fingerboards.\nCreative Direction and Brand Identity.\nLocation: Lima, Peru.\nYear: 2022.",
    desc: `Alba began as a way out. After a long time of not finding my place, I looked back for something that once brought me joy and remembered fingerboarding. It became my first venture into entrepreneurship, my first time in the public eye on social media, and the first time I was creating something I truly loved: a turning point in deciding what I wanted to do with my life.

My focus was to deliver a quality product, from the shape to the concept behind every deck, treating each one as a small piece of art with a message behind every launch. The first launch, New Beginning, was exactly that. The second main launch took its name from resilience, from facing the challenges of building a company day by day.

That human, organic quality shapes the identity. The logotype is custom, interlocked and fragmented, and the brandmark reinterprets Cesare Ripa’s Crepuscolo della Mattina as a female figure: the dawn (l'alba) as a force of rebirth and, as its name says, a chance to start again each day. The packaging includes a frame that displays the deck as a work of art, a homage to craftsmanship and manual labor.

Two main editions of three screen-printed decks each (two with the logo in two colors, one with an illustration) were followed by standard editions with laser engraving and acrylic paint in silver and gold. In its first year Alba became a recognized name in the global fingerboard community. It is now paused, with no return date.`,
    items: [
      ["Social Media Asset", "91h2pY8v9yjENs6G1ZKknm5nlhA.mp4"],
      ["Frame Structure (Packaging)", "7uS9Ky4tYCqCZDm4V7JIuZF9MCI.webp"],
      ["Logotype", "I3lWhPEVrMGmQthwYnMZUMPmAo.webp"],
      ["Setups", "TlesBX9jiYNiz2gAnRl5i1bRVX4.webp"],
      ["Packaging", "opKlBRspIKy2CSP9HqR2Ep07nE.webp"],
      ["Brand Illustration", "sc1K1xJgR9Fn8f51qeNdVTdgDOM.mp4"],
      ["Brandmark", "LI7pFc2KEC0hq6U8PMjjar3tbo.webp"],
      ["New Beginning Edition", "fPrTf98WTGAb6RW7CzN3c2sE04.webp"],
      ["Screen Printing Film Positives", "eikDLvMrxPcvPgcmUyAhbk7HRXg.webp"],
      ["Standard Edition", "i2B6ZKoeWWf2T9UTQLffTRdod68.webp"],
      ["Brand Essence", "Vg0ufT2FnkbfM8s1zNLMiVQ2eg.webp"]
    ]
  },
  {
    title: "VSTG, 2025",
    cover: "assets/covers/vestige_cover_d.webp",
    tablet: 2,
    lineHeight: 1.1,
    info: "VSTG.\nCreative and Art Direction.\nLocation: Barcelona, Spain.\nElisava – Beyond Branding.\nYear: 2025.",
    desc: `What happens to the futures that never happened? VSTG is an archive of them: futures imagined, planned or expected that never came to pass, and that still shape individuals, societies and history. I call them “failed futures”, a term that came out of my own research. Reclaiming failure requires confronting it, and that begins by naming it.

Originating in 2025 in the Beyond Branding master at Elisava and Folch, the project is in continuous development and has two parts: an editorial piece with no beginning or end, and a digital platform that works as a condensed version of it. Its endless scroll carries the same idea: failure was, is and will be present, and it has to be dignified to find what can be learned from it.

The interface works as an open-access archive under a museographic framework. It opens blurred, evoking discovery and mystery, until hovering over a record reveals its image, and every item must come with a narrative explaining its context and the failed future behind it, bridging historical speculation with human experience.

Publication is planned for 2027.`,
    items: [
      ["Identity and Taxonomy", "vestige_1.webp"],
      ["Platform (Currently in Development)", "vestige_2.webp"],
      ["Archive's Code System", "vestige_3.webp"],
      ["Statement", "vestige_4.webp"],
      ["Monogram", "vestige_5.webp"],
      ["Site Title", "vestige_6.webp"],
      ["Print Media", "vestige_7.webp"],
      ["Platform Test", "vestige_8.mp4"]
    ]
  },
  {
    title: "Lapsus Records, 2026",
    cover: "assets/covers/lapsusrecordslpsps20.webp",
    tablet: 3,
    lineHeight: 1.1,
    info: "Lapsus Records.\nPerennial Series & LPS-PS20.\nGraphic Design.\nLocation: Barcelona, Spain.\nDone at Basora Studio.\nYear: 2026.",
    desc: `The Perennial Series, Lapsus Records’ line dedicated to timeless electronic music (previously unreleased vinyl masterings, long-discontinued reissues and contemporary classics), needed a premium identity that wouldn’t touch the original covers. Until then these editions were printed in a single color on cardboard; the goal was an identity closer to what they are, collector’s pieces. The project was developed under Josep Basora’s creative direction.

After extensive testing and many iterations, the answer was a custom OBI strip: a protective, non-intrusive element that marks the release as a Perennial Series edition and keeps the front cover unobstructed. An editorial typographic system carries the series information and exclusive album and artist details, over a solid background color drawn from the original artwork, with crisp silver typography and graphics.

LPS-PS20, the first release with the new identity, also got an album redesign that preserves the essence of the original: a subtly adjusted cover, a back cover that adapts the original tracklist to the vinyl format, and labels that carry the cover’s aesthetic, with the artist portraits from the strip on the B-sides. The edition is printed and on sale.`,
    items: [
      ["Perennial Series OBI Strip", "mU4Ns6GcyrTtKiuaS5fykhPUto.webp"],
      ["Vinyl", "lpsps20_5.mp4"],
      ["OBI Strip Silver Finish", "WzAc1pBbbggRs4bi7uTYoZCjBg.mp4"],
      ["Open Cover", "yoEuPr5qkW2K91C1HU1uO2W7Q8.webp"],
      ["Back Cover", "uQNqHef5knaPkoumU7oN9FoS20.webp"],
      ["Labels", "pkzzx9LsGfjQ6mm5K5Urph0Hl4.webp"]
    ]
  },
  {
    title: "Hausmann, 2026",
    cover: "assets/covers/hausmanncatalogue.webp",
    tablet: 4,
    lineHeight: 1.1,
    info: "Hausmann.\nCatalogue 2026-2027.\nEditorial Design.\nLocation: Barcelona, Spain.\nDone at Basora Studio.\nYear: 2026.",
    desc: `Hausmann makes premium wood furniture, and its 2026–2027 collection needed a catalogue as refined as the pieces. Developed at Basora under Josep Basora’s creative direction, I was in charge of the catalogue focused on the products and its final layout.

The brief was a modern, premium publication that presents each piece with its dimensions and details. The horizontal format lets the photoshoot imagery run large, so each opening gives a single photograph room to stand across two pages. A digital version was also shared.`,
    items: [
      ["Hausmann", "zQSskLRkWHRCuUAIpFU47wqFB0.webp"],
      ["Introduction", "edQUsQoEqK2Grnd3kWHYuJfr5A.webp"],
      ["Page Layout", "pozQCUJCr2GelNmnsNdPIBNM.webp"],
      ["Pages Layout", "pIVE1tk9sJvUnzyXUIH30iAAs.webp"],
      ["Pages Layout", "Nigkyl9SKzYjEllvFI24g5AFjI.webp"],
      ["Index", "QAs8QZsFrr1S9MxBhgqoDXZakeE.webp"],
      ["Contact Page", "eQYUAKZY3LhQRV8vVcg65Umj00.webp"]
    ]
  },
  {
    title: "Soul Arts Productions, 2025",
    cover: "assets/covers/soulartsproductionsdecks.webp",
    tablet: 5,
    lineHeight: 1.1,
    info: "Soul Arts Productions.\nPresentation Design and Graphic Design.\nLocation: Mexico (Remote).\nYear: 2025.",
    desc: `Soul Arts Productions is the producer behind 'Despertares®', the world’s largest ballet show, and the agency representing principal dancers Isaac Hernández and Esteban Hernández. It needed to present them, and the show, in the most premium way to investors, partners and brands. I took on the project from the very beginning and designed every deck from start to finish.

The answer was a modern, elegant visual system that adapts to each brand and each artist, with a photographic treatment adjusted for every deck and style. That flexibility lets the work co-exist seamlessly with luxury brand identities.

The decks were used throughout the 2025–2026 season for the company’s projects, ambassador agreements and contracts for principal dancer Isaac Hernández, and sponsorship acquisition for the 2025 show.`,
    items: [
      ["Principal Dancer Isaac Hernández – Book", "fk2koKOGiClxrCy3l2KiTsFzMw.webp"],
      ["Principal Dancer Isaac Hernández – Prada Ambassador", "2WSBhbJhicmKChwLg5CdEpAccY.webp"],
      ["Principal Dancer Isaac Hernández – Hugo Boss Ambassador", "8aHxQFxc883dsO8ULZ36u0nweY.webp"],
      ["Principal Dancer Isaac Hernández – Tiffany & Co. Ambassador", "x6Luq3JLg2kzqGKywJ4M0R40z8o.webp"],
      ["Principal Dancer Isaac Hernández – Tiffany & Co.", "DqarWghiIvdvpymd7sTzEvE.webp"],
      ["Principal Dancer Esteban Hernández – Book", "minWX681Y65OssE2YwzVj5T74.webp"],
      ["Principal Dancer Esteban Hernández – Book", "4PpmPAulJYXQTt8YegFpB2y8O0U.webp"]
    ]
  },
  {
    title: "Off Script, 2025",
    cover: "assets/covers/offscript.webp",
    tablet: 6,
    lineHeight: 1.1,
    info: "Off Script.\nCreative Direction and Art Direction.\nSpeculative Project.\nLocation: Barcelona, Spain.\nYear: 2025.",
    desc: `What does a classic tragedy look like today? Off Script is a speculative answer: an invented collective that stages classic plays in contemporary situations, here through three of them, Romeo and Juliet, The Seagull and Oedipus Rex. I developed its identity and the art and creative direction.

Instead of literal or staged representations, graphic construction carries the meaning, and the written word assumes a physical body. Typography is the unifying element: set in grey, it keeps the feeling of a classic text, while each play takes its own bright background color that places it in the present. Its scale, fragmentation and position in space communicate what verbal language can only suggest.

These plays endure because guilt, loss and the impossibility of choice are still ours. The classics stay untouched, because tragedy was never a matter of form but of the inevitability of human suffering; what shifts is only the mirror reflecting it.`,
    items: [
      ["Collective Identity", "keSFvxbqN1LoPuhuWdR7zLmW3I.webp"],
      ["Romeo & Juliet Poster", "j5g99JgWBgDagoRUE9E7GcU9w.webp"],
      ["Plays", "8rPcaj3kKORJz06RCRpCRINtqBY.webp"],
      ["The Seagull Poster", "ojf2t3V9fpFz6i4MBsOoaEZNJWk.webp"],
      ["Reimagined Concept", "hYGBZXDDtZ7NIqR8yAz8R2NEs.webp"],
      ["Oedipus Rex Poster", "zvCr0HcjOyleFnyflNffo6RU.webp"],
      ["Communication", "4biHeSucyRPgC7PcEazYri76o.webp"],
      ["Classics Reimagined", "OPM6loyWpmGSpOUJE5wGXKqlQi0.webp"],
      ["Titles", "n3wMReR0EX26DvwUdyxnJUYiI.webp"],
      ["Merchandising", "gt0iR5bLmeBWDKaSeVQUOkrUwxU.webp"]
    ]
  },
  {
    title: "Despertares, 2025",
    cover: "assets/covers/despertaresmedia.webp",
    tablet: 8,
    lineHeight: 1.1,
    info: "Despertares 2025.\nMultimedia Design.\nLocation: Mexico (Remote).\nYear: 2025.",
    desc: `Multimedia content for the 2025 edition of the 'Despertares®' show. The challenge was unity: the raw material came from many places, and I gave all of it one visual treatment, from a custom photographic treatment for the dancer portraits to the teaser and official trailer I created, plus reels, promotional material, and animation of texts and logos.

It ran on TV, on the show’s and the producer’s social media, and on the audiovisual displays inside the Auditorio Nacional in Mexico City.`,
    items: [
      ["Photo Edition", "3iI6v3WHp6lbfBDRvf3BxR3thM4.webp"],
      ["Photo Edition", "yDF1VIEaK2YShVfJTgGshcyc.webp"],
      ["Multimedia Design", "fh9bdv5yXEbCBxAwsoYaLnf8Fg.mp4"],
      ["Multimedia Design", "NhBBKBp1aX6bJzMLkVAtNusRvIY.mp4"],
      ["Multimedia Design", "VA2rXX3h8JKMwdRtbr0sLMeBLsI.mp4"],
      ["Multimedia Design", "C9qbNNfpb3gCGJehNbgMtgCack.mp4"],
      ["Photo Edition - Carousel", "fX9ji3VUzsEvfnTqntzpAByyU0.webp"],
      ["Multimedia Design", "D0etnL20K6hgaP6ZyLNcSB9U.mp4"]
    ]
  },
  {
    title: "The Midnight Hound, 2024",
    cover: "assets/covers/themidnighthound.webp",
    tablet: 7,
    lineHeight: 1.1,
    info: "The Midnight Hound.\nArt Direction.\nLocation: Brazil (Remote).\nYear: 2024.",
    desc: `The brief was to show what a film is about without telling it. This project was commissioned to direct the art and visual identity for an auteur psychological horror short film produced in Brazil, working from the film’s concept rather than the literal.

To evoke a subtle yet persistent emotional uncertainty, the design relies on a minimalist two-tone palette. The client first imagined warm and cool colors to mark the film’s duality, but that duality ran deeper than a blue and a red could express, so the palette was built to hold quiet tension instead. A customized, dramatic serif, modified to give it a thriller accent while staying elegant and reflecting the story’s mature character, sits against low-detail, heavily processed film photography.`,
    items: [
      ["Stamp", "g3pZqtB3Cj7BOAAT0Aavs1Kax8Y.webp"],
      ["Titles", "galpmg2W4f3IdLyhgM1HzdlirfA.webp"],
      ["Credits", "cIlVKEcCTQBI1s1QWM1tRFNT9Y.webp"],
      ["Poster", "dYyoFImCaaYEzzwJbK1RoQA0zg.webp"],
      ["Poster", "M50uMclfawM8GoSXjS7b5CsoI4.webp"],
      ["Asset", "tbF0JCS5TUFDuV1qpMfwCU4c0.webp"],
      ["Synopsis", "Kx2OQwGekvKWNw21LB6t4f2tcqA.webp"]
    ]
  },
  {
    title: "Parachilna, 2024",
    cover: "assets/covers/parachilnaasset.webp",
    tablet: 9,
    lineHeight: 1.1,
    info: "Parachilna.\nB15 T V GR Reel.\nCreative Direction.\nIn collaboration with Annie Pearlman and Rafaela Barros.\nLocation: Barcelona, Spain.\nElisava – Beyond Branding.\nYear: 2024.",
    desc: `Beauty in Destruction shows the B15 table lamp by Jordi Veciana emerging from the destruction that held it, as a piece that endures, has character and is beautiful. It is a 3D digital concept made as the final project of Elisava’s Creative Direction in CGI course, inspired by Parachilna’s industrial roots and its devotion to human craftsmanship.

The direction starts from the material. The lamp’s extruded glass, with its patterns, textures and forms, reflects light in interesting ways, so the piece is built on close-up material explorations and the interplay of light. By bridging physical craft with digital expression, it reinforces Parachilna’s human-centric identity. It was published on Parachilna’s Instagram.`,
    items: [
      ["3D Animation by Mimitos (@mimitos.online)", "YgUefuHTa1nwnGGd26KawO43Zxk.mp4"],
      ["Storyboard", "ceXl0DAorlANZLjh0mo2tVzUf0.webp"],
      ["Moodboard", "wGNIrhSabcCPDxzz0Tpj26bZwyk.webp"]
    ]
  },
  {
    title: "TV Globo, 2025",
    cover: "assets/covers/tvglobodiversidade.webp",
    tablet: 10,
    lineHeight: 1.2,
    info: "TV Globo.\nComitê de Diversidade.\nGraphic Design.\nIn collaboration with Rafaela Barros.\nLocation: Brazil (Remote).\nYear: 2025.",
    desc: `TV Globo’s Diversity Committee (Comitê de Diversidade) needed an identity that represents diversity in a less expected way. I designed its logotype and a series of custom symbols for the committee’s key pillars (Black empowerment, feminism, neurodiversity, and broad spectrum diversity), supported by an institutional visual system. It is now the committee’s identity.

The logotype stays coherent with TV Globo’s own, with a playful twist that fits an internal committee created to celebrate diversity. In collaboration with Rafaela Barros, the symbols take a conceptual route: drawn from old or related meanings of each theme and abstracted, they read as one family that accompanies the logo.`,
    items: [
      ["Logo Comitê de Diversidade", "SHHwu1qvf57jJZqpa3Em7wHEgHU.mp4"],
      ["Symbols", "QRBqcJnuAugrQoFqbN049J15LiA.webp"],
      ["Folders", "cAsXR3sp0y8rXeXdp3pF2paWA.webp"]
    ]
  },
  {
    title: "DiskoSlice, 2026",
    cover: "assets/covers/diskoslice.webp",
    tablet: 12,
    lineHeight: 1.1,
    info: "DiskoSlice.\nBrand Identity.\nLocation: Barcelona, Spain.\nDone at Basora Studio.\nYear: 2026.",
    desc: `Diskoteka Pizza is a Prague pizzeria where music is part of the dining experience. DiskoSlice was born as part of its ecosystem: a shop focused exclusively on selling pizza slices, with an identity of its own that still shares core elements with Diskoteka.

Under Josep Basora’s creative and art direction, everything revolves around the triangle as the anchor element: the foundation to imagine a wide range of applications. An 80s–90s pop culture aesthetic blends with it, so coasters leave standard formats for custom triangular shapes, and the pizza boxes carry iconic references: Pac-Man whose open mouth forms a slice, the peace sign with a missing slice, an Imperial Star Destroyer shaped as a pizza slice.

That visual freedom is the concept behind DiskoSlice, a pizzeria unlike any other.`,
    items: [
      ["Logotype", "C1EV02IqkguibgBx88iaZYUI.webp"],
      ["Cap", "WsaEqPkCn0jxTOfmaoLerbwqNU.webp"],
      ["Badge", "qfgotEBUaWbfmh3d6zWHkmOa8as.webp"],
      ["Coasters A", "hBJEIy7BdsJvgRptk1qK8YlPACM.webp"],
      ["Coasters B", "smKke6wJoLQifHuFC5ooYZhRk4.webp"],
      ["Pizza Box Graphics", "4cJNp8Ul2V6nepz5cGyVWzsBreU.webp"],
      ["Pizza Boxes A", "1tnTG2TTHZH3i0H1AwkvNn1IA.webp"],
      ["Pizza Boxes B", "ZSRrf1swIURLZua8DyLlxsEa2E.webp"],
      ["Information Card", "qN6bbjoqkfZhBblKDx6zrM2R4LU.webp"],
      ["Pizza Cone Head", "Z7MlvAGPIPcVaGQL8kkmoVoE9s.webp"],
      ["T-Shirt", "M7vvImXGPinud5iCiMF6xFKhxA0.webp"]
    ]
  },
  {
    title: "Lapsus Records, 2026",
    cover: "assets/covers/lapsusrecordslps46.webp",
    tablet: 11,
    lineHeight: 1.1,
    info: "Lapsus Records.\nLPS46.\nGraphic Design.\nLocation: Barcelona, Spain.\nDone at Basora Studio.\nYear: 2026.",
    desc: `Phenomena is the collaborative album by R-010 and Venerandi, developed from the atmosphere of the music and the artists’ visual aesthetic. I was in charge of the design.

Based on the client’s concept, the design draws on Chladni patterns, the shapes that sound vibrations form in sand. These forms dictated the layout of both sides of the album cover and label: the front prioritizes a modern, clean composition, balancing the main artist information and logo alongside the generative form, while the back features a sharper shape defined by a bold, solid white. The result is a visual translation of what the artists express musically, built through extensive visual exploration.`,
    items: [
      ["Phenomena by R-010 & Venerandi", "V5H4716RFCdRUhQDitoC3SiiQ.webp"],
      ["Front and Back Cover", "sIsYdvQojNlmlhpvZxcLu4hSoOQ.webp"],
      ["Vinyl Label", "wT8rA2gs4xyiQIcFstAou5WyUE.webp"],
      ["Graphics", "sccOTF0rFW4mCK24OiSZBlbKVhU.webp"],
      ["Front and Back Vinyl Label", "h1gsivBCYIBYpS92GRDeCJN6wFM.webp"],
      ["Tests", "7WclQOxXNCAnGDIllKBEotAmBk.webp"]
    ]
  }
];

/* Convierte [caption, archivo] en {caption, media} con la ruta completa. */
PROJECTS.forEach(function (p) {
  p.items = p.items.map(function (it) {
    return { caption: it[0], media: BASE + it[1] };
  });
});
