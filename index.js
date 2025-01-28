if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("sw.js")
    .then(async (v) => {
      if (v.installing) {
        console.log("Service worker is installing...");
      } else if (v.waiting) {
        console.log("Service worker is installed.");
      } else if (v.active) {
        console.log("Service worker is active.");
      }

      // const cache = await caches.open("V1");
      // const res = await cache.matchAll();
      // console.log(res);
    })
    .catch((err) => console.log(err));
}
