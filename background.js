var isFadedStore = {};

var isFaded = function(tabId) {
  return typeof isFadedStore[tabId] === 'undefined' ? true : isFadedStore[tabId];
}

var setIsFaded = function(tabId, newIsFaded) {
  isFadedStore[tabId] = newIsFaded;
  return newIsFaded;
}

var toggleIsFaded = function(tabId) {
  return setIsFaded(tabId, !isFaded(tabId));
}

var gizoogleUrl = 'http://www.gizoogle.net';
var gizooglizeUrl = gizoogleUrl + '/xfer.php?link=';
var isGizoogle = function(url) {
  return url.substr(0, gizoogleUrl.length) === gizoogleUrl;
};
var gizooglize = function(url) {
  return gizooglizeUrl + url;
};
var degizooglize = function(url) {
  return url.substr(gizooglizeUrl.length);
};

chrome.webNavigation.onBeforeNavigate.addListener(function(details) {
  if(!isFaded(details.tabId) && !isGizoogle(details.url)) {
    chrome.tabs.update(details.tabId, {url: gizooglize(details.url)});
  }
  else if(isFaded(details.tabId) && isGizoogle(details.url)) {
    chrome.tabs.update(details.tabId, {url: degizooglize(details.url)});
  }
});

var snoopIcon = chrome.extension.getURL('snoop48.png');
var snoopIconFaded = chrome.extension.getURL('snoop48-faded.png');
chrome.browserAction.onClicked.addListener(function(tab) {
  toggleIsFaded(tab.id);
  chrome.tabs.reload(tab.id);
});

chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
  if(typeof changeInfo.url !== 'undefined') {
    chrome.browserAction.setIcon({
      path: isFaded(tabId) ? snoopIconFaded : snoopIcon,
      tabId: tabId
    });
  }
});

