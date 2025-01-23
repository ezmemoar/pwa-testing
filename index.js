if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("/sw.js")
    .then((v) => {
      if (v.installing) {
        console.log("Service worker is installing...");
      } else if (v.waiting) {
        console.log("Service worker is installed.");
      } else if (v.active) {
        console.log("Service worker is active.");
      }
    })
    .catch((err) => console.log(err));
}
