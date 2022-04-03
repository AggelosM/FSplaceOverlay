// ==UserScript==
// @name         FS Overlay
// @namespace    https://github.com/r-PlaceTux/place_tux
// @version      1.0.8
// @description  FLOSS forever!
// @author       r/PlaceTux
// @match        https://hot-potato.reddit.com/embed*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=reddit.com
// @grant        none
// @license      GPL-3.0
// ==/UserScript==
if (window.top !== window.self) {
  window.addEventListener(
    "load",
    () => {
      document
        .getElementsByTagName("mona-lisa-embed")[0]
        .shadowRoot.children[0].getElementsByTagName("mona-lisa-canvas")[0]
        .shadowRoot.children[0].appendChild(
          (function () {
            const i = document.createElement("img");
            i.src = "https://raw.githubusercontent.com/AggelosM/FSplaceOverlay/main/imageoverlay.png";
            i.style =
              "position: absolute;left: 0;top: 0;image-rendering: pixelated;width: 1000px;height: 1000px;";
            console.log(i);
            return i;
          })()
        );
    },
    false
  );
  window.addEventListener(
    "load",
    () => {
      document
        .getElementsByTagName("mona-lisa-embed")[0]
        .shadowRoot.children[0].getElementsByTagName("mona-lisa-canvas")[0]
        .shadowRoot.children[0].appendChild(
          (function () {
            const j = document.createElement("img");
            j.src = "https://raw.githubusercontent.com/AggelosM/FSplaceOverlay/main/imageoverlay.png";
            j.style =
              "position: absolute;left: 0;top: 0;image-rendering: pixelated;width: 2000px;height: 1000px;";
            console.log(j);
            return j;
          })()
        );
    },
    false
  );
}
