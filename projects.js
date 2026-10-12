/* Datos del portafolio.
   - cover: portada (ya está en el repo, assets/covers/)
   - items: archivos de la ventana de cada proyecto. Al principio apuntan a la CDN de
     Framer; ejecuta descargar-assets.sh para bajarlos al repo y cambiar las rutas.
   - tablet: orden de los proyectos en tablet (810–1199 px).
*/
var BASE = "https://framerusercontent.com/assets/";

var PROJECTS = [
  {
    title: "Alba Fingerboards, 2022",
    cover: "assets/covers/ClTlH4VwFsTmSyP8HS3Ejfew7yE.png",
    tablet: 1,
    lineHeight: 1.1,
    info: "Alba Fingerboards.\nCreative Direction and Brand Identity.\nLocation: Lima, Peru.\nYear: 2022.",
    desc: `Alba Fingerboards is far more than an identity project; for me, it marked a defining turning point in deciding what I wanted to do with my life. It was my first venture into entrepreneurship, my first time stepping into the public eye on social media, and the first time I was creating something I truly loved. Reaching a moment where I could no longer endure the discomfort of who I was and what I was doing, I left everything behind to look into my past for something that once brought me joy. I remembered my passion for fingerboarding and playing with them. That memory gave birth to this independent brand, centered on crafting what I loved while honoring the defining traits of my personality: a commitment to pouring absolute passion and emotional weight into every detail.

In a world where emotions are often sidelined by haste and detachment, Alba was created to carve out the necessary time to craft, building from pure feeling while delivering exceptional quality where the hours spent are immediately visible. Alba is, and always will be, a brand, but above all, a clear statement. As its name suggests, there is always a new dawn, that first light of day we can witness until the end of life, reminding us that each day offers a chance to experiment, feel, and express something new.

This human, organic quality is preserved in the custom typography of the logotype, interlocked, fragmented, yet distinctly expressive. To translate this core concept into visual metaphors, the brand drew inspiration from historical iconography, reinterpreting Cesare Ripa’s Crepuscolo della Mattina in a female personification. This shift to a feminine figure embodies the dawn (l'alba) as a nurturing, generative force of rebirth, a fitting symbol for Alba’s philosophy of starting anew. This humanity is not limited to the brandmark; the packaging design features a framing structure with the same organic language, built to display the deck as a work of art, a homage to craftsmanship, manual labor, and the devotion put into creating with one's hands.`,
    items: [
      ["Social Media Asset", "91h2pY8v9yjENs6G1ZKknm5nlhA.gif"],
      ["Frame Structure (Packaging)", "7uS9Ky4tYCqCZDm4V7JIuZF9MCI.png"],
      ["Logotype", "I3lWhPEVrMGmQthwYnMZUMPmAo.png"],
      ["Setups", "TlesBX9jiYNiz2gAnRl5i1bRVX4.png"],
      ["Packaging", "opKlBRspIKy2CSP9HqR2Ep07nE.png"],
      ["Brand Illustration", "sc1K1xJgR9Fn8f51qeNdVTdgDOM.mp4"],
      ["Brandmark", "LI7pFc2KEC0hq6U8PMjjar3tbo.png"],
      ["New Beginning Edition", "fPrTf98WTGAb6RW7CzN3c2sE04.png"],
      ["Screen Printing Film Positives", "eikDLvMrxPcvPgcmUyAhbk7HRXg.png"],
      ["Standard Edition", "i2B6ZKoeWWf2T9UTQLffTRdod68.png"],
      ["Brand Essence", "Vg0ufT2FnkbfM8s1zNLMiVQ2eg.png"]
    ]
  },
  {
    title: "Vestige, 2025",
    cover: "assets/covers/rXWp5yQlcuYmYKUG9hkA5UBONuc.png",
    tablet: 2,
    lineHeight: 1.1,
    info: "Vestige.\nCreative Direction and Art Direction.\nLocation: Barcelona, Spain.\nElisava - Beyond Branding.\nYear: 2025.",
    desc: `Vestige originated in 2025 and remains in active development, evolving continuously to find its most precise form of expression. It is a digital platform and public archive dedicated to indexing the remnants of futures that never came to pass, what I define as 'failed futures.' Reclaiming and resignifying the concept of failure requires directly confronting it, and confronting it begins by giving it a name.

Designed as an open-access archive operating under a museographic framework, the platform frames user contributions as curated artworks. On the home interface, the collective gallery, entries are initially presented under an intentional blur to evoke an experience of discovery and mystery. Hovering over a record reveals the visual or textual artifact, provided the contributor has set its media visibility to public. Users can submit their vestiges freely or via anonymous profiles, retaining total control over whether their uploaded image or document remains hidden or exposed, while the essential narrative inputs, the explanation of the trace and the account of the failed future, remain accessible to illuminate the record.

The project carries immense emotional weight and humanity, born out of personal experience: losing my father triggered the imperative need for this exploration, as every future I once envisioned with him was permanently severed. Vestige mandates that each cataloged item be accompanied by a narrative explaining its context and the failed future behind it. This deliberate act of writing is essential to understanding grief, processing how these lost trajectories shape our present identity, and normalizing their weight, transforming individual loss into an act of resilience, collective memory, and shared space. The project is currently being developed as an open-access platform for public participation.`,
    items: [
      ["Identity and Taxonomy", "GakNCsNe8ACKxiuuWUBPS1Gro.png"],
      ["Platform (Currently in Development)", "GTMSa4Z2aRL5l5D2i85ObKNeMQ.png"],
      ["Archive's Vestige Code System", "V0L1BxKh4dI5yfIq3GNOTAMNHI.png"],
      ["New Vestige Window (Currently in Development)", "E8OOBX6PwRUDu69IhaFRYOc6k.png"],
      ["Statement", "4Rr9XTomCisp9SVXNI07MbXPPPo.png"],
      ["Print Media", "FFuY1bKN0eCd2ccsDWu5tsZb4KI.png"],
      ["Manifesto", "mFBErPy0L1zNsWpqvHQmElDy4.png"],
      ["Monogram", "53utslpO7dzeK5PhfmDFDxUtyU.png"],
      ["Description", "2eJVwplYryOW6KB1r9oaJ3RgCA.png"]
    ]
  },
  {
    title: "Lapsus Records, 2026",
    cover: "assets/covers/Q6FikpcTMttXxzsyFlKp4YmrzlY.png",
    tablet: 3,
    lineHeight: 1.1,
    info: "Lapsus Records.\nPerennial Series & LPS-PS20.\nGraphic Design.\nLocation: Barcelona, Spain.\nDone at Basora Studio.\nYear: 2026.",
    desc: `This project was structured around two main design fronts. The first was developing a new visual system to launch 'The Perennial Series', a new division of Lapsus Records dedicated to timeless electronic music, bringing together previously unreleased vinyl masterings, long-discontinued reissues, and contemporary classics.

Because these releases are designed as high-end collector's editions, the primary goal was to create a protective yet non-intrusive element that preserved the integrity of the original album art. After extensive testing, we settled on implementing a custom OBI Strip. This allowed us to highlight the release as a special Perennial Series edition while keeping the front cover completely unobstructed. The strip relies on an editorial typographic system where both sides convey key information about the series alongside exclusive album and artist details. To ensure a premium finish, each strip features a solid background color derived from the original artwork, paired with crisp silver typography and graphics.

The second front was the album redesign itself, which preserves the essence of the original release. The color tone of the front cover image was subtly adjusted for distinction, while the back cover scales the original CD tracklist distribution up to the vinyl format. The set includes two records whose labels maintain the main cover’s aesthetic on the front, while their B-sides feature the artist portraits seen on the OBI strip, tying the entire packaging system together into a cohesive object.`,
    items: [
      ["Perennial Series OBI Strip", "mU4Ns6GcyrTtKiuaS5fykhPUto.png"],
      ["OBI Strip Silver Finish", "WzAc1pBbbggRs4bi7uTYoZCjBg.mp4"],
      ["Open Cover", "yoEuPr5qkW2K91C1HU1uO2W7Q8.png"],
      ["Back Cover", "uQNqHef5knaPkoumU7oN9FoS20.png"],
      ["Labels", "pkzzx9LsGfjQ6mm5K5Urph0Hl4.png"]
    ]
  },
  {
    title: "Hausmann, 2026",
    cover: "assets/covers/DoWmh43T2IxDHpF8p0o0U5MJk.png",
    tablet: 4,
    lineHeight: 1.1,
    info: "Hausmann.\nCatalogue 2026-2027.\nEditorial Design.\nLocation: Barcelona, Spain.\nDone at Basora Studio.\nYear: 2026.",
    desc: `This editorial piece is part of a broader project at Basora, where I was tasked with designing the catalog for the new 2026–2027 collection. The core idea was to create a refined, modern publication, using a horizontal format to highlight grouped families of pieces per section. By displaying the photoshoot imagery at a larger scale, the vertical opening of the spreads creates a striking sense of scale and grandeur.`,
    items: [
      ["Hausmann", "zQSskLRkWHRCuUAIpFU47wqFB0.png"],
      ["Introduction", "edQUsQoEqK2Grnd3kWHYuJfr5A.png"],
      ["Page Layout", "pozQCUJCr2GelNmnsNdPIBNM.png"],
      ["Pages Layout", "pIVE1tk9sJvUnzyXUIH30iAAs.png"],
      ["Pages Layout", "Nigkyl9SKzYjEllvFI24g5AFjI.png"],
      ["Index", "QAs8QZsFrr1S9MxBhgqoDXZakeE.png"],
      ["Contact Page", "eQYUAKZY3LhQRV8vVcg65Umj00.png"]
    ]
  },
  {
    title: "Soul Arts Productions, 2025",
    cover: "assets/covers/KQwfTVJRwTyi6MwenRraJ4Fw.png",
    tablet: 5,
    lineHeight: 1.1,
    info: "Soul Arts Productions.\nPresentation Design and Graphic Design.\nLocation: Mexico (Remote).\nYear: 2025.",
    desc: `This section compiles presentation design work developed for Soul Arts Productions, the producer behind 'Despertares®', the world’s largest ballet show, and the agency representing principal dancers Isaac Hernández and Esteban Hernández. A graphic system and photographic style were established to seamlessly co-exist with luxury brand identities such as Prada, Tiffany & Co., and other key partners.

These pitch decks were utilized throughout the 2025–2026 season for Soul Arts Productions' projects, ambassador agreements and contracts for principal dancer Isaac Hernández, and sponsorship acquisition for the 2025 'Despertares®' show.`,
    items: [
      ["Principal Dancer Isaac Hernández – Book", "fk2koKOGiClxrCy3l2KiTsFzMw.png"],
      ["Principal Dancer Isaac Hernández – Prada Ambassador", "2WSBhbJhicmKChwLg5CdEpAccY.png"],
      ["Principal Dancer Isaac Hernández – Hugo Boss Ambassador", "8aHxQFxc883dsO8ULZ36u0nweY.png"],
      ["Principal Dancer Isaac Hernández – Tiffany & Co. Ambassador", "x6Luq3JLg2kzqGKywJ4M0R40z8o.png"],
      ["Principal Dancer Isaac Hernández – Tiffany & Co.", "DqarWghiIvdvpymd7sTzEvE.png"],
      ["Principal Dancer Esteban Hernández – Book", "minWX681Y65OssE2YwzVj5T74.png"],
      ["Principal Dancer Esteban Hernández – Book", "4PpmPAulJYXQTt8YegFpB2y8O0U.png"]
    ]
  },
  {
    title: "Off Script, 2025",
    cover: "assets/covers/wlo7bGVpLJOsL2jAIYgL4rP8SE.png",
    tablet: 6,
    lineHeight: 1.1,
    info: "Off Script.\nCreative Direction and Art Direction.\nSpeculative Project.\nLocation: Barcelona, Spain.\nYear: 2025.",
    desc: `This speculative project proposes a contemporary visual reinterpretation of three classic theatrical works, translating their tragic narratives into a modern editorial language and human context. Rejecting literal or staged representations, the proposal positions graphic construction as the primary vehicle of conceptual meaning, where the written word assumes a physical body. The tension between the classic, foundational texts of the Western tradition, and the contemporary, the materiality of type, its scale, fragmentation, and spatial behavior, creates a space for reflection where viewers do not merely interpret the work, but encounter themselves within it.

These themes endure precisely because they remain embedded in the contemporary human condition: guilt, loss, and the impossibility of choice. Rather than modernizing these narratives to force relevance, the project recognizes that their resonance is already absolute. The classic essence remains untouched because tragedy was never a matter of form, but of the inevitability of human suffering; what shifts is merely the mirror reflecting it.

The architecture of typography, how the word is structured, fragmented, and positioned within space, communicates nuances that verbal language alone can only suggest. Here, typographic construction becomes the very act of translation: the physical materialization of the classic word in our present.`,
    items: [
      ["Collective Identity", "keSFvxbqN1LoPuhuWdR7zLmW3I.png"],
      ["Romeo & Juliet Poster", "j5g99JgWBgDagoRUE9E7GcU9w.png"],
      ["Plays", "8rPcaj3kKORJz06RCRpCRINtqBY.png"],
      ["The Seagull Poster", "ojf2t3V9fpFz6i4MBsOoaEZNJWk.png"],
      ["Reimagined Concept", "hYGBZXDDtZ7NIqR8yAz8R2NEs.png"],
      ["Oedipus Rex Poster", "zvCr0HcjOyleFnyflNffo6RU.png"],
      ["Communication", "4biHeSucyRPgC7PcEazYri76o.png"],
      ["Classics Reimagined", "OPM6loyWpmGSpOUJE5wGXKqlQi0.png"],
      ["Titles", "n3wMReR0EX26DvwUdyxnJUYiI.png"],
      ["Merchandising", "gt0iR5bLmeBWDKaSeVQUOkrUwxU.png"]
    ]
  },
  {
    title: "Despertares, 2025",
    cover: "assets/covers/hYRPVXJ1nZq3v8BSGcf5ZlQ3Bk.png",
    tablet: 8,
    lineHeight: 1.1,
    info: "Despertares 2025.\nMultimedia Design.\nLocation: Mexico (Remote).\nYear: 2025.",
    desc: `This section is a small compilation of multimedia assets produced for and around the 2025 edition of the 'Despertares®' show. My involvement spanned from developing a custom photographic treatment for the dancer portraiture used throughout this season, to directing and editing the teaser, official trailer, and promotional video content for broadcast TV, social media, and on-site audiovisual displays at the Auditorio Nacional in Mexico.`,
    items: [
      ["Photo Edition", "3iI6v3WHp6lbfBDRvf3BxR3thM4.png"],
      ["Photo Edition", "yDF1VIEaK2YShVfJTgGshcyc.png"],
      ["Multimedia Design", "fh9bdv5yXEbCBxAwsoYaLnf8Fg.mp4"],
      ["Multimedia Design", "NhBBKBp1aX6bJzMLkVAtNusRvIY.mp4"],
      ["Multimedia Design", "VA2rXX3h8JKMwdRtbr0sLMeBLsI.mp4"],
      ["Multimedia Design", "C9qbNNfpb3gCGJehNbgMtgCack.mp4"],
      ["Photo Edition - Carousel", "fX9ji3VUzsEvfnTqntzpAByyU0.png"],
      ["Multimedia Design", "D0etnL20K6hgaP6ZyLNcSB9U.mp4"]
    ]
  },
  {
    title: "The Midnight Hound, 2024",
    cover: "assets/covers/pUcylTo57xPIL4r6wJCEgLz1xu0.png",
    tablet: 7,
    lineHeight: 1.1,
    info: "The Midnight Hound.\nArt Direction.\nLocation: Brazil (Remote).\nYear: 2024.",
    desc: `This project was commissioned to direct the art and visual identity for an auteur psychological horror short film produced in Brazil. The creative direction stems directly from the film's narrative core and the specific emotional atmosphere intended for the audience.

To evoke a subtle yet persistent sense of emotional uncertainty, the design relies on a minimalist two-tone chromatic palette engineered to build quiet tension. The accompanying visual assets feature a customized, dramatic serif typeface set against low-detail, heavily processed film photography, preserving the mysterious and restrained essence of the piece.`,
    items: [
      ["Stamp", "g3pZqtB3Cj7BOAAT0Aavs1Kax8Y.png"],
      ["Titles", "galpmg2W4f3IdLyhgM1HzdlirfA.png"],
      ["Credits", "cIlVKEcCTQBI1s1QWM1tRFNT9Y.png"],
      ["Poster", "dYyoFImCaaYEzzwJbK1RoQA0zg.png"],
      ["Poster", "M50uMclfawM8GoSXjS7b5CsoI4.png"],
      ["Asset", "tbF0JCS5TUFDuV1qpMfwCU4c0.png"],
      ["Synopsis", "Kx2OQwGekvKWNw21LB6t4f2tcqA.png"]
    ]
  },
  {
    title: "Parachilna, 2024",
    cover: "assets/covers/IfWWEWNaSUoqtsBozitRzpNRk.png",
    tablet: 9,
    lineHeight: 1.1,
    info: "Parachilna.\nB15 T V GR Reel.\nCreative Direction.\nIn collaboration with Annie Pearlman and Rafaela Barros.\nLocation: Barcelona, Spain.\nElisava – Beyond Branding.\nYear: 2024.",
    desc: `Inspired by Parachilna’s industrial roots near Barcelona and its devotion to human craftsmanship, Beauty in Destruction is a 3D digital concept exploring the intersection between raw environments and luxury lighting. The project centers on the B15 table lamp by Jordi Veciana, translating its geometric purity and extruded glass structure into a captivating motion narrative that reveals elegance through elemental textures and light.

Designed as a high-end digital asset, the creative direction relies on close-up material explorations and light interplay to elevate the fixture into a sculptural centerpiece. By bridging physical craft with digital expression, the proposal reinforces Parachilna’s human-centric identity, showcasing how raw industrial processes yield timeless refinement.`,
    items: [
      ["3D Animation by Mimitos (@mimitos.online)", "YgUefuHTa1nwnGGd26KawO43Zxk.mp4"],
      ["Storyboard", "ceXl0DAorlANZLjh0mo2tVzUf0.png"],
      ["Moodboard", "wGNIrhSabcCPDxzz0Tpj26bZwyk.png"]
    ]
  },
  {
    title: "TV Globo, 2025",
    cover: "assets/covers/TkbKxjK3fKOMN00SwAPnPAGU4U.png",
    tablet: 10,
    lineHeight: 1.2,
    info: "TV Globo.\nComitê de Diversidade.\nGraphic Design.\nIn collaboration with Rafaela Barros.\nLocation: Brazil (Remote).\nYear: 2025.",
    desc: `This project focused primarily on designing the logotype for TV Globo’s Diversity Committee (Comitê de Diversidade), alongside an institutional visual system and a series of custom symbols representing the committee's key pillars: Black empowerment, feminism, neurodiversity, and broad spectrum diversity.

Developed in collaboration with Rafaela Barros, each symbol translates complex social themes into abstract graphic iconography, reclaiming and resignifying these core concepts through a shared visual signifier.`,
    items: [
      ["Logo Comitê de Diversidade", "SHHwu1qvf57jJZqpa3Em7wHEgHU.mp4"],
      ["Symbols", "QRBqcJnuAugrQoFqbN049J15LiA.png"],
      ["Folders", "cAsXR3sp0y8rXeXdp3pF2paWA.png"]
    ]
  },
  {
    title: "DiskoSlice, 2026",
    cover: "assets/covers/TbIsjPqONvejVBBpAmBUrLEQI.png",
    tablet: 12,
    lineHeight: 1.1,
    info: "DiskoSlice.\nBrand Identity.\nLocation: Barcelona, Spain.\nDone at Basora Studio.\nYear: 2026.",
    desc: `This project stems from Diskoteka Pizza, a Prague-based pizzeria where music plays a central role in the overall dining experience. Looking to expand its services, the brand created a second location focused exclusively on selling pizza slices. Building on this premise, the creative and art direction revolves around the triangle as the anchor element, serving as the foundation to imagine and produce a wide range of applications.

This is how DiskoSlice was born, a slice-shop that shares core identity elements with Diskoteka while introducing an 80s–90s pop culture aesthetic blended with the triangular anchor. From this fusion, everything takes shape: coasters deviate from standard formats into custom triangular shapes, and the box packaging incorporates iconic culture references, such as Pac-Man whose open mouth forms a pizza slice, the peace sign modified to feature a missing slice, or an Imperial Star Destroyer shaped as a pizza slice. This visual freedom defines the overarching concept behind DiskoSlice: a uniquely distinct pizzeria.`,
    items: [
      ["Logotype", "C1EV02IqkguibgBx88iaZYUI.png"],
      ["Cap", "WsaEqPkCn0jxTOfmaoLerbwqNU.png"],
      ["Badge", "qfgotEBUaWbfmh3d6zWHkmOa8as.png"],
      ["Coasters A", "hBJEIy7BdsJvgRptk1qK8YlPACM.png"],
      ["Coasters B", "smKke6wJoLQifHuFC5ooYZhRk4.png"],
      ["Pizza Box Graphics", "4cJNp8Ul2V6nepz5cGyVWzsBreU.png"],
      ["Pizza Boxes A", "1tnTG2TTHZH3i0H1AwkvNn1IA.png"],
      ["Pizza Boxes B", "ZSRrf1swIURLZua8DyLlxsEa2E.png"],
      ["Information Card", "qN6bbjoqkfZhBblKDx6zrM2R4LU.png"],
      ["Pizza Cone Head", "Z7MlvAGPIPcVaGQL8kkmoVoE9s.png"],
      ["T-Shirt", "M7vvImXGPinud5iCiMF6xFKhxA0.png"]
    ]
  },
  {
    title: "Lapsus Records, 2026",
    cover: "assets/covers/MdrEVdb8qPEiP4IdwgW71O6Czw.png",
    tablet: 11,
    lineHeight: 1.1,
    info: "Lapsus Records.\nLPS46.\nGraphic Design.\nLocation: Barcelona, Spain.\nDone at Basora Studio.\nYear: 2026.",
    desc: `The collaborative album Phenomena by artists R-010 and Venerandi was developed directly from the music’s atmosphere and the artists' visual aesthetic. Drawing from Chladni patterns, the shapes generated by sound vibrations in sand, these forms dictated the layout for both sides of the album cover and label. The front cover prioritizes a modern, clean composition, balancing the main artist information and logo alongside the generative form, while the back features a sharper shape defined by a bold, solid white.

The project involved extensive visual experimentation. Its strength lay in translating what the artists expressed musically through design, utilizing imagery they provided alongside experimental visuals like the acoustic sand patterns. Ultimately, this exploratory process reshaped my workflow, teaching me how to systematically close design phases and decide on key directions efficiently, without underestimating the value of thorough visual iteration.`,
    items: [
      ["Phenomena by R-010 & Venerandi", "V5H4716RFCdRUhQDitoC3SiiQ.png"],
      ["Front and Back Cover", "sIsYdvQojNlmlhpvZxcLu4hSoOQ.png"],
      ["Vinyl Label", "wT8rA2gs4xyiQIcFstAou5WyUE.png"],
      ["Graphics", "sccOTF0rFW4mCK24OiSZBlbKVhU.png"],
      ["Front and Back Vinyl Label", "h1gsivBCYIBYpS92GRDeCJN6wFM.png"],
      ["Tests", "7WclQOxXNCAnGDIllKBEotAmBk.png"]
    ]
  }
];

/* Convierte [caption, archivo] en {caption, media} con la ruta completa. */
PROJECTS.forEach(function (p) {
  p.items = p.items.map(function (it) {
    return { caption: it[0], media: BASE + it[1] };
  });
});
