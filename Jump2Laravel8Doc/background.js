chrome.browserAction.onClicked.addListener(function () {
  const current = JSON.parse(localStorage.getItem('enabled') ?? "true");
  const next = !current;
  if (!next) {
    (async () => {
      await Promise.all([
        chrome.browserAction.setBadgeText({ text: "disabled" }),
      ])
    })()
  } else {
    (async () => {
      await Promise.all([
        chrome.browserAction.setBadgeText({}),
      ])
    })()
  }
  localStorage.setItem('enabled', JSON.stringify(next));
})

chrome.runtime.onMessage.addListener(function(message, _, sendResponse) {
  if (message === "init") {
    sendResponse(JSON.parse(localStorage.getItem('enabled') ?? "true"));
  }
})