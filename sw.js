cachePage = async (data) => {
  const cache = await caches.open("V1");
  return await cache.addAll(data);
};

findCache = async (request) => {
  const cacheReq = await caches.match(request);
  if (cacheReq) return cacheReq;

  return fetch(request);
};

oninstall = (e) => {
  e.waitUntil(cachePage(["/index.html", "/about.html"]));
};

onactivate = (e) => {
  console.log("active lah bro");
};

self.addEventListener("fetch", (e) => {
  e.respondWith(caches.match(e.request));
})