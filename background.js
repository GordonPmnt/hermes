chrome.runtime.onMessage.addListener(
    ({ id, notification }, sender, sendResponse) => {
        console.log(sender.tab 
            ? "from a content script:" + sender.tab.url
            : "from the extension");
        if (id === "hermes") {
            sendResponse({ status: "message received" });
            chrome.notifications.create(id, notification, chrome.notifications.clear(id))
        }
    }
);