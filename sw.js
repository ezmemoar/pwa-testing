// self.addEventListener("install", () => {
//   // prompt();
//   console.log("installes");
//   clients
// });

oninstall = async (e) => {
  const cache = await caches.open("V1");
  e.waitUntil(
    cache.addAll([
      "/",
      "/index.html",
      "/css/bulma.min.css",
    ])
  )
}

self.addEventListener("activate", () => {
  console.log("activated");
});
