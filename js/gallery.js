const galleryItems = document.querySelectorAll(".gallery-item");

galleryItems.forEach(item => {
  item.addEventListener("click", () => {
    const img = item.querySelector("img");
    if (!img) return;

    const popup = document.createElement("div");
    popup.className = "image-view";
    popup.setAttribute("role", "dialog");
    popup.setAttribute("aria-modal", "true");

    const closeBtn = document.createElement("button");
    closeBtn.className = "close-btn";
    closeBtn.innerHTML = "×";
    closeBtn.setAttribute("aria-label", "Close");

    const popupImg = document.createElement("img");
    popupImg.src = img.src;
    popupImg.alt = img.alt;

    popup.appendChild(closeBtn);
    popup.appendChild(popupImg);
    document.body.appendChild(popup);
    document.body.style.overflow = "hidden";

    function close() {
      popup.remove();
      document.body.style.overflow = "";
    }

    closeBtn.addEventListener("click", e => {
      e.stopPropagation();
      close();
    });

    popup.addEventListener("click", close);

    document.addEventListener("keydown", function onKey(e) {
      if (e.key === "Escape") {
        close();
        document.removeEventListener("keydown", onKey);
      }
    });
  });
});
