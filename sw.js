cachePage = async (data) => {
  const cache = await caches.open("V1");
  return await cache.addAll(data);
};

findCache = async (request) => {
  const cache = await caches.open("V1");
  const cacheReq = await cache.match(request);
  console.log(cacheReq);
  if (cacheReq) return cacheReq;

  return fetch(request);
};

oninstall = (e) => {
  e.waitUntil(cachePage(["/index.html", "/about.html", "/html.js", "/index.js", "/css/bulma.min.css", "/manifest.json"]));
};

onactivate = (e) => {
  console.log("active lah bro");
};

self.addEventListener("fetch", (e) => {
  console.log(e);
  e.respondWith(findCache(e.request));
});
