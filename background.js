chrome.runtime.onMessage.addListener(
    (request, sender, sendResponse) => {
        console.log(sender.tab 
            ? "from a content script:" + sender.tab.url 
            : "from the extension");
        if (request.id === "hermes") {
            sendResponse({status: "message received"});
        }
    }
);