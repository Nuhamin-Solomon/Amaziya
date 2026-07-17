const shareBtn = document.getElementById("share-btn");

if (shareBtn) {
  shareBtn.addEventListener("click", async () => {
    const text = translations[currentLanguage];
    const shareData = {
      title: text.shareTitle,
      text: text.shareText,
      url: window.location.href
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch (err) {
        if (err.name !== "AbortError") {
          copyLink(text.shareCopied);
        }
      }
    } else {
      copyLink(text.shareCopied);
    }
  });
}

function copyLink(message) {
  navigator.clipboard.writeText(window.location.href).then(() => {
    const original = shareBtn.innerHTML;
    shareBtn.innerHTML = message;
    setTimeout(() => {
      shareBtn.innerHTML = original;
    }, 2500);
  });
}
