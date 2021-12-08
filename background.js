chrome.browserAction.onClicked.addListener(function() {
	chrome.tabs.query({
		currentWindow: true,
		active: true
	}, function(tab) {
		var domain = tab[0].url.split("/")[2].replaceAll(".","-");
		var ext = tab[0].url.slice(tab[0].url.indexOf("/",domain.length+4));
		var shitballs = "https://" +domain+".translate.goog" + ext + "?_x_tr_sl=jp&_x_tr_tl=en&_x_tr_hl=en"
		chrome.tabs.create({
			"url": shitballs
		});
	});
});