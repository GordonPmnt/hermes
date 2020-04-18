/*
    Listen messages coming from content scripts and send a response
*/
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

/*
    Allows extension to popup on odyssey.wildcodeschool.com domain
*/
chrome.runtime.onInstalled.addListener(() => {
    chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
      chrome.declarativeContent.onPageChanged.addRules([{
        conditions: [ new chrome.declarativeContent.PageStateMatcher({
          pageUrl: { hostEquals: 'odyssey.wildcodeschool.com' },
        })
        ],
            actions: [ new chrome.declarativeContent.ShowPageAction() ]
      }]);
    });
  });