/*
    Listen messages coming from content scripts and send a response
*/
browser.runtime.onMessage.addListener(
    ({ id, notification }, sender, sendResponse) => {
        console.log(sender.tab 
            ? "from a content script:" + sender.tab.url
            : "from the extension");
        if (id === "hermes") {
            sendResponse({ status: "message received" });
            browser.notifications.create(id, notification, browser.notifications.clear(id))
        }
    }
);

/*
    Allows extension to popup on odyssey.wildcodeschool.com domain
*/
browser.runtime.onInstalled.addListener(() => {
    browser.declarativeContent.onPageChanged.removeRules(undefined, function() {
      browser.declarativeContent.onPageChanged.addRules([{
        conditions: [ new browser.declarativeContent.PageStateMatcher({
          pageUrl: { hostEquals: 'odyssey.wildcodeschool.com' },
        })
        ],
            actions: [ new browser.declarativeContent.ShowPageAction() ]
      }]);
    });
  });