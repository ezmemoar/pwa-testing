if ("serviceWorker" in navigator) {
  const sw = await navigator.serviceWorker.register("/sw.js");
  if (sw.installing) {
    console.log("Service worker is installing...");
  }
  else if (sw.waiting) {
    console.log("Service worker is installed.");
  }
  else if (sw.active) {
    console.log("Service worker is active.");
  }
}
