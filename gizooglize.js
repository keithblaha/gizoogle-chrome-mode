var originalHtml;
var originalTitle;

chrome.runtime.onMessage.addListener(function(request) {
  if(request.isFaded) {
    degizooglize();
  } else {
    originalHtml = $('body').prop('outerHTML');
    originalTitle = $('title').text();
    gizooglize();
  }
});

var textilizer = 'http://gizoogle.net/textilizer.php';
var textilizerPayload = function(text) {
  return {
    translatetext: text
  };
};

var gizooglize = function() {
  var r = Math.floor(Math.random() * 3) + 1;
  $('html').addClass('gizooglizin');
  $('body').prop('outerHTML', '<body class="gizooglizin"><h1>Tranzizzlin dis shiznit ta gangsta...</h1><div class="snoop-dance-' + r + '"></div></body>');
  var arbitraryDelay = $.Deferred();
  setTimeout(arbitraryDelay.resolve, 2000);
  $.when(
    $.post(textilizer, textilizerPayload(originalHtml)),
    $.post(textilizer, textilizerPayload(originalTitle)),
    arbitraryDelay
  ).done(function(htmlRes, titleRes) {
    $('html').removeClass('gizooglizin');
    $('body').prop('outerHTML', getTranzizzled(htmlRes[0]));
    $('title').text(getTranzizzled(titleRes[0]));
  });
};

var degizooglize = function() {
  $('body').html(originalHtml);
  $('title').text(originalTitle);
};

var startSearch = '<textarea type="text" name="translatetext" style="width: 600px; height:250px;"/>';
var endSearch = '</textarea>';

var getTranzizzled = function(res) {
  var i = res.search(startSearch) + startSearch.length;
  var j = res.search(endSearch);
  return res.substr(i, j - i);
}

