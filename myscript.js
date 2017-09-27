chrome.storage.sync.get({
	nextFlixSkipIntro: true,
	nextFlixSkipIntroTime: 0,
	nextFlixNextEpisode: true,
	nextFlixNextEpisodeTime: 0
}, function(items) {
	// Settings
	var skipIntro = items.nextFlixSkipIntro;
	var skipIntroTime = items.nextFlixSkipIntroTime;
	var nextEpisode = items.nextFlixNextEpisode;
	var nextEpisodeTime = items.nextFlixNextEpisodeTime;

	var ancestor = $('body');

	// Classes
	var skipIntroClasses = ['.skip-credits'];
	var nextEpisodeClasses = ['.player-postplay-still-hover-container', '.WatchNext-still-container'];

	// Observer Method
	var ob = new MutationObserver(function() {
		// Skip intro
		if($(skipIntroClasses.join()).length > 0 && skipIntro) {
			setTimeout(function() {
				if($(skipIntroClasses.join()).length > 0) {
					$(skipIntroClasses.join()).find('a')[0].click();
				}
			}, skipIntroTime * 1000)
		}

		// Next Episode
		if($(nextEpisodeClasses.join()).length > 0 && nextEpisode) {
			setTimeout(function() {
				if($(nextEpisodeClasses.join()).length > 0) {
					$(nextEpisodeClasses.join())[0].click();
				}
			}, nextEpisodeTime * 1000)
		}
	});
	ob.observe(ancestor[0], {
		subtree: true,
		childList: true
	})
});
