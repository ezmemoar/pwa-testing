const setCache = async (items) => {
  const cache = await caches.open("V1");
  cache.addAll(items);
};

oninstall = async (e) => {
  e.waitUntil(setCache(["index.html", "about.html"]));
};

self.addEventListener("activate", () => {
  console.log("activated");
});
