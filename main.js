(function () {
  "use strict";

  var mqMobile = window.matchMedia("(max-width: 768px)");
  var gallery = document.getElementById("gallery");
  var openModal = null; // { root, sheet, close, onKey }

  function el(tag, cls, text) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (text != null) n.textContent = text;
    return n;
  }

  function noMenu(e) { e.preventDefault(); }

  /* Imagen o vídeo según la extensión */
  function makeMedia(src) {
    var node;
    if (/\.(mp4|webm)$/i.test(src)) {
      node = document.createElement("video");
      node.muted = true;
      node.loop = true;
      node.autoplay = true;
      node.playsInline = true;
      node.setAttribute("muted", "");
      node.setAttribute("playsinline", "");
      node.src = src;
    } else {
      node = new Image();
      node.alt = "";
      node.decoding = "async";
      node.draggable = false;
      node.src = src;
    }
    node.className = "media";
    node.addEventListener("contextmenu", noMenu);
    return node;
  }

  /* ---------- Precarga de imágenes ---------- */
  var seen = {};

  function preloadImg(src) {
    if (seen[src] || /\.(mp4|webm)$/i.test(src)) return; // los vídeos no se precargan
    seen[src] = true;
    var im = new Image();
    im.decoding = "async";
    im.src = src;
  }

  function preloadProject(p, count) {
    p.items.slice(0, count || p.items.length).forEach(function (it) {
      preloadImg(it.media);
    });
  }

  function idle(fn) {
    if (window.requestIdleCallback) window.requestIdleCallback(fn, { timeout: 3000 });
    else setTimeout(fn, 600);
  }

  /* Los vídeos se bajan de uno en uno, ya con todas las imágenes descargadas */
  function preloadVideos() {
    var vids = [];
    PROJECTS.forEach(function (p) {
      p.items.forEach(function (it) {
        if (/\.(mp4|webm)$/i.test(it.media) && !seen[it.media]) {
          seen[it.media] = true;
          vids.push(it.media);
        }
      });
    });
    (function next() {
      var src = vids.shift();
      if (!src) return;
      var v = document.createElement("video");
      var finished = false;
      function done() {
        if (finished) return;
        finished = true;
        v.removeAttribute("src");
        v.load();
        next();
      }
      v.muted = true;
      v.preload = "auto";
      v.addEventListener("canplaythrough", done);
      v.addEventListener("error", done);
      setTimeout(done, 25000);
      v.src = src;
    })();
  }

  /* Cuando la página ya cargó, baja todo en segundo plano, proyecto a proyecto.
     Con "ahorro de datos" activado solo baja las 2 primeras imágenes de cada uno,
     y en móvil no se precargan los vídeos. */
  var saveData = !!(navigator.connection && navigator.connection.saveData);

  window.addEventListener("load", function () {
    var queue = PROJECTS.slice();
    (function next() {
      var p = queue.shift();
      if (!p) {
        if (!saveData && !mqMobile.matches) preloadVideos();
        return;
      }
      preloadProject(p, saveData ? 2 : 0);
      idle(next);
    })();
  });

  /* ---------- Rejilla de portadas ---------- */
  PROJECTS.forEach(function (p, index) {
    var art = el("article", "project");
    art.style.setProperty("--tablet", p.tablet);

    var cover = el("div", "cover");
    var img = new Image();
    img.src = p.cover;
    img.alt = p.title;
    img.draggable = false;
    img.decoding = "async";
    if (index > 2) img.loading = "lazy";
    img.addEventListener("contextmenu", noMenu);
    cover.appendChild(img);

    /* Título que sigue al cursor */
    var tip = el("div", "tip", p.title);
    cover.appendChild(tip);

    var s = { x: 0, y: 0, tx: 0, ty: 0, raf: 0, on: false };

    function place() {
      tip.style.transform = "translate(" + s.x + "px," + s.y + "px)";
    }

    function loop() {
      if (!s.on) return;
      s.x += (s.tx - s.x) * 0.32;
      s.y += (s.ty - s.y) * 0.32;
      place();
      s.raf = requestAnimationFrame(loop);
    }

    function target(e) {
      var r = cover.getBoundingClientRect();
      s.tx = e.clientX - r.left + 15;
      s.ty = e.clientY - r.top - 35;
    }

    function hideTip() {
      s.on = false;
      cancelAnimationFrame(s.raf);
      tip.classList.remove("on");
    }

    cover.addEventListener("mouseenter", function (e) {
      preloadProject(p); // todas las imágenes de este proyecto
      if (mqMobile.matches || openModal) return;
      target(e);
      s.x = s.tx;
      s.y = s.ty;
      place();
      s.on = true;
      tip.classList.add("on");
      loop();
    });
    cover.addEventListener("mousemove", function (e) {
      if (mqMobile.matches) return;
      target(e);
    });
    cover.addEventListener("mouseleave", hideTip);
    cover.addEventListener("touchstart", function () { preloadProject(p, 3); }, { passive: true });

    cover.addEventListener("click", function () {
      hideTip();
      open(p);
    });

    art.appendChild(cover);
    art.appendChild(el("p", "project-title", p.title));
    gallery.appendChild(art);
  });

  /* ---------- Ventana inferior ---------- */
  function open(p) {
    if (openModal) return;

    var mobile = mqMobile.matches;
    var n = p.items.length;
    var idx = 0;

    var root = el("div", "modal");
    root.setAttribute("role", "dialog");
    root.setAttribute("aria-modal", "true");
    root.setAttribute("aria-label", p.title);

    var backdrop = el("div", "backdrop");
    var sheet = el("div", "sheet" + (mobile ? " is-mobile" : ""));
    sheet.style.lineHeight = p.lineHeight;

    var closeRow = el("div", "close-row");
    var closeBtn = el("span", "close", "Close");
    closeRow.appendChild(closeBtn);
    sheet.appendChild(closeRow);

    var show = function () {};

    if (mobile) {
      var col = el("div", "m-col");
      col.appendChild(el("div", "m-text", p.info));
      col.appendChild(el("div", "m-text", p.desc));
      var list = el("div", "m-items");
      p.items.forEach(function (it) {
        var wrap = el("div", "m-item");
        var viewer = el("div", "viewer");
        viewer.appendChild(makeMedia(it.media));
        wrap.appendChild(viewer);
        if (it.caption) wrap.appendChild(el("div", "m-caption", it.caption));
        list.appendChild(wrap);
      });
      col.appendChild(list);
      sheet.appendChild(col);
    } else {
      var grid = el("div", "grid");

      var c1 = el("div", "cell");
      c1.appendChild(el("div", "scroll", p.info));
      var c2 = el("div", "cell");
      c2.appendChild(el("div", "scroll", p.desc));

      var c3 = el("div", "col-media");
      var viewer = el("div", "viewer");
      var meta = el("div", "meta");
      var counter = el("div", "counter");
      var caption = el("div", "caption");
      meta.appendChild(counter);
      meta.appendChild(caption);
      c3.appendChild(viewer);
      c3.appendChild(meta);

      show = function () {
        viewer.textContent = "";
        viewer.appendChild(makeMedia(p.items[idx].media));
        counter.textContent = idx + 1 + " / " + n;
        caption.textContent = p.items[idx].caption;
      };

      viewer.addEventListener("click", function (e) {
        if (n <= 1) return;
        var r = viewer.getBoundingClientRect();
        step(e.clientX - r.left > r.width / 2 ? 1 : -1);
      });

      grid.appendChild(c1);
      grid.appendChild(c2);
      grid.appendChild(c3);
      sheet.appendChild(grid);
      show();
    }

    function step(d) {
      if (n <= 1 || mobile) return;
      idx = (idx + d + n) % n;
      show();
    }

    var closing = false;
    function close() {
      if (closing) return;
      closing = true;
      document.removeEventListener("keydown", onKey);
      sheet.classList.remove("in");
      var done = false;
      function remove() {
        if (done) return;
        done = true;
        root.remove();
        openModal = null;
      }
      sheet.addEventListener("transitionend", function (e) {
        if (e.target === sheet && e.propertyName === "transform") remove();
      });
      setTimeout(remove, 700);
    }

    function onKey(e) {
      if (e.key === "Escape") close();
      else if (e.key === "ArrowRight") step(1);
      else if (e.key === "ArrowLeft") step(-1);
    }

    backdrop.addEventListener("click", close);
    closeBtn.addEventListener("click", close);
    document.addEventListener("keydown", onKey);

    root.appendChild(backdrop);
    root.appendChild(sheet);
    document.body.appendChild(root);
    openModal = { root: root };

    /* dos frames para que arranque la transición desde abajo */
    requestAnimationFrame(function () {
      requestAnimationFrame(function () {
        sheet.classList.add("in");
      });
    });
  }

  /* ---------- Panel "about" (clic en el nombre) ---------- */
  var ABOUT = {
    name: "Ricardo Jesús Valera García",
    bio: [
      "Ricardo is an Art Director and Brand Designer specializing in strategic branding, editorial, and multimedia design. He creates emotion-led visual systems that turn complex narrative concepts into precise, memorable identities.",
      "Please for any project contact me, im based in Barcelona and i would love to work with amazing people and pretty cool projects from around or any place in the world!"
    ],
    services: "Creative Direction, Art Direction, Visual Design, Brand Identity, Graphic Design, Editorial Design",
    contact: [
      { label: "(+34) 627791168", href: "tel:+34627791168" },
      { label: "E-mail", href: "mailto:ricardo.valera.garcia@gmail.com" },
      { label: "Are.na", href: "https://www.are.na/ricardo-valera-garcia" },
      { label: "Instagram", href: "https://www.instagram.com/ricardovaleragarcia/" },
      { label: "LinkedIn", href: "https://linkedin.com/in/rvaleragarcia" }
    ],
    personal: [
      { label: "VSTG", href: "https://ricardovaleragarcia-commits.github.io/vstg/" },
      { label: "Creative–Tools", href: "https://ricardovaleragarcia-commits.github.io/creative_tools/tools/disc-viewer/" }
    ],
    experience: "Basora Studio, Soul Arts Productions, Grupo Alternativa Publicitaria, Innovación Corporativa 21, San Ignacio de Loyola University",
    foot: ["This website was designed and developed by me.", "© All rights reserved."]
  };

  /* Bloque "Título:" + líneas (cada línea puede ser un enlace) */
  function aboutBlock(cls, title, lines) {
    var b = el("div", "about-block " + cls);
    b.appendChild(el("div", null, title));
    var wrap = el("div", "about-text");
    lines.forEach(function (ln) {
      if (typeof ln === "string") {
        wrap.appendChild(el("div", null, ln));
        return;
      }
      var row = el("div");
      var a = el("a", null, ln.label);
      a.href = ln.href;
      if (/^https?:/i.test(ln.href)) {
        a.target = "_blank";
        a.rel = "noopener";
      }
      row.appendChild(a);
      wrap.appendChild(row);
    });
    b.appendChild(wrap);
    return b;
  }

  function openAbout() {
    if (openModal) return;

    var mobile = mqMobile.matches;

    var root = el("div", "modal");
    root.setAttribute("role", "dialog");
    root.setAttribute("aria-modal", "true");
    root.setAttribute("aria-label", ABOUT.name);

    var backdrop = el("div", "backdrop");
    var sheet = el("div", "sheet about" + (mobile ? " is-mobile" : ""));
    sheet.style.lineHeight = "1.1";

    var closeRow = el("div", "close-row");
    var closeBtn = el("span", "close", "Close");
    closeRow.appendChild(closeBtn);
    sheet.appendChild(closeRow);

    var body = el("div", "about-body" + (mobile ? " is-mobile" : ""));

    var bio = el("div", "about-bio");
    ABOUT.bio.forEach(function (t) { bio.appendChild(el("p", null, t)); });

    var services = aboutBlock("about-services", "Services:", [ABOUT.services]);
    var experience = aboutBlock("about-experience", "Experience:", [ABOUT.experience]);

    var contact = el("div", "about-contact");
    contact.appendChild(aboutBlock("", "Contact:", ABOUT.contact));
    contact.appendChild(aboutBlock("", "Personal Projects:", ABOUT.personal));

    var foot = el("div", "about-foot");
    ABOUT.foot.forEach(function (t) { foot.appendChild(el("div", null, t)); });

    if (mobile) {
      body.appendChild(el("div", "about-name", ABOUT.name));
      body.appendChild(bio);
      body.appendChild(services);
      body.appendChild(contact);
      body.appendChild(experience);
      body.appendChild(foot);
    } else {
      var top = el("div", "about-top");
      var name = el("div", "about-name");
      name.appendChild(el("span", null, ABOUT.name));
      var arrow = el("span", "about-arrow", "→");
      arrow.setAttribute("aria-hidden", "true");
      name.appendChild(arrow);
      top.appendChild(name);
      top.appendChild(bio);
      body.appendChild(top);

      var cols = el("div", "about-cols");
      var inner = el("div", "about-cols-inner");
      inner.appendChild(services);
      inner.appendChild(contact);
      inner.appendChild(experience);
      cols.appendChild(inner);
      body.appendChild(cols);

      body.appendChild(foot);
    }

    sheet.appendChild(body);

    var closing = false;
    function close() {
      if (closing) return;
      closing = true;
      document.removeEventListener("keydown", onKey);
      sheet.classList.remove("in");
      var done = false;
      function remove() {
        if (done) return;
        done = true;
        root.remove();
        openModal = null;
      }
      sheet.addEventListener("transitionend", function (e) {
        if (e.target === sheet && e.propertyName === "transform") remove();
      });
      setTimeout(remove, 700);
    }

    function onKey(e) {
      if (e.key === "Escape") close();
    }

    backdrop.addEventListener("click", close);
    closeBtn.addEventListener("click", close);
    document.addEventListener("keydown", onKey);

    root.appendChild(backdrop);
    root.appendChild(sheet);
    document.body.appendChild(root);
    openModal = { root: root };

    requestAnimationFrame(function () {
      requestAnimationFrame(function () {
        sheet.classList.add("in");
      });
    });
  }

  var aboutLink = document.getElementById("about-link");
  if (aboutLink) {
    aboutLink.addEventListener("click", function (e) {
      e.preventDefault();
      openAbout();
    });
  }
})();
