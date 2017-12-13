chrome.storage.sync.get({
	nextFlixSkipIntro: true,
	nextFlixNextEpisode: true,
	nextFlixMuteTrailer: true,
}, function(items) {
	// Settings
	var skipIntro = items.nextFlixSkipIntro;
	var nextEpisode = items.nextFlixNextEpisode;
	var muteTrailer = items.nextFlixMuteTrailer;

	var ancestor = $('body');

	// Classes
	var skipIntroClasses = ['.skip-credits'];
	var nextEpisodeClasses = ['.player-postplay-still-hover-container', '.WatchNext-still-container'];

	// Variables
	var clicking = false;

	// Observer Method
	var ob = new MutationObserver(function() {
		// Skip intro
		if($(skipIntroClasses.join()).length > 0 && skipIntro && !clicking) {
			clicking = true;
			$(skipIntroClasses.join()).find('a')[0].click();
			setTimeout(function() {
				clicking = false;
			}, 500);
		}

		// Next Episode
		if($(nextEpisodeClasses.join()).length > 0 && nextEpisode && !clicking) {
			clicking = true;
			$(nextEpisodeClasses.join())[0].click();
			setTimeout(function() {
				clicking = false;
			}, 500);
		}
		
		if($('.billboard').find('.audio-btn').length > 0 && $('.billboard').find('.icon-button-audio-on').length > 0 && muteTrailer) {
			$('.billboard').find('.audio-btn')[0].click();
		}
	});
	ob.observe(ancestor[0], {
		subtree: true,
		childList: true
	})
});
