var isFadedStore = {};

var isFaded = function(tabId) {
  return typeof isFadedStore[tabId] === 'undefined' ? true : isFadedStore[tabId];
};

var setIsFaded = function(tabId, newIsFaded) {
  isFadedStore[tabId] = newIsFaded;
  return newIsFaded;
};

var toggleIsFaded = function(tabId) {
  return setIsFaded(tabId, !isFaded(tabId));
};

var snoopIcon = chrome.extension.getURL('images/snoop48.png');
var snoopIconFaded = chrome.extension.getURL('images/snoop48-faded.png');
chrome.browserAction.onClicked.addListener(function(tab) {
  var newIsFaded = toggleIsFaded(tab.id);
  chrome.browserAction.setIcon({
    path: newIsFaded ? snoopIconFaded : snoopIcon,
    tabId: tab.id
  });
  chrome.tabs.sendMessage(tab.id, {isFaded: newIsFaded});
});

