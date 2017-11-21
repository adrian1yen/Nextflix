chrome.storage.sync.get({
	nextFlixSkipIntro: true,
	nextFlixNextEpisode: true,
}, function(items) {
	// Settings
	var skipIntro = items.nextFlixSkipIntro;
	var nextEpisode = items.nextFlixNextEpisode;

	var ancestor = $('body');

	// Classes
	var skipIntroClasses = ['.skip-credits'];
	var nextEpisodeClasses = ['.player-postplay-still-hover-container', '.WatchNext-still-container'];

	// Observer Method
	var ob = new MutationObserver(function() {
		// Skip intro
		if($(skipIntroClasses.join()).length > 0 && skipIntro) {
			$(skipIntroClasses.join()).find('a')[0].click();
		}

		// Next Episode
		if($(nextEpisodeClasses.join()).length > 0 && nextEpisode) {
			$(nextEpisodeClasses.join())[0].click()
		}
	});
	ob.observe(ancestor[0], {
		subtree: true,
		childList: true
	})
});
