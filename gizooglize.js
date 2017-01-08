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

var textilizer = 'https://keithblaha.com/gizoogle/textilizer';

var gizooglize = function() {
  var r = Math.floor(Math.random() * 3) + 1;
  $('html').addClass('gizooglizin');
  $('body').prop('outerHTML', '<body class="gizooglizin"><h1>Tranzizzlin dis shiznit ta gangsta...</h1><div class="snoop-dance-' + r + '"></div></body>');
  var arbitraryDelay = $.Deferred();
  setTimeout(arbitraryDelay.resolve, 2000);
  $.when(
    $.ajax({
			type: 'POST',
			url: textilizer,
			data: originalHtml,
			dataType: 'text',
			contentType: 'text/plain; charset=utf-8'
		}),
    $.ajax({
			type: 'POST',
			url: textilizer,
			data: originalTitle,
			dataType: 'text',
			contentType: 'text/plain; charset=utf-8'
		}),
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

