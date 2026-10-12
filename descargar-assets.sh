#!/bin/sh
# Descarga los archivos de la ventana de cada proyecto (imágenes, GIF y vídeos)
# a assets/media/ y cambia las rutas de projects.js para que sean locales.
# Ejecútalo UNA vez, desde la carpeta del sitio:   sh descargar-assets.sh
cd "$(dirname "$0")" || exit 1
mkdir -p assets/media
BASE="https://framerusercontent.com/assets/"
fallos=0

for f in $(grep -o '"[A-Za-z0-9_.-]*\.\(png\|gif\|mp4\|webm\|jpg\)"' projects.js | tr -d '"' | sort -u); do
  if [ -s "assets/media/$f" ]; then continue; fi
  echo "Descargando $f"
  if ! curl -fL --retry 3 -o "assets/media/$f" "$BASE$f"; then
    echo "  ERROR con $f"
    rm -f "assets/media/$f"
    fallos=$((fallos + 1))
  fi
done

if [ "$fallos" -eq 0 ]; then
  sed -i.bak 's#^var BASE = .*#var BASE = "assets/media/";#' projects.js && rm -f projects.js.bak
  echo "Listo: todo descargado y rutas cambiadas a assets/media/."
else
  echo "Faltaron $fallos archivos; projects.js NO se ha modificado. Vuelve a ejecutar el script."
  exit 1
fi
