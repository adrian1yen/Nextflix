chrome.storage.sync.get({
	nextFlixSkipIntro: true,
	nextFlixSkipIntroTime: 0,
	nextFlixNextEpisode: true,
	nextFlixNextEpisodeTime: 0
}, function(items) {
	var skipIntro = items.nextFlixSkipIntro;
	var skipIntroTime = items.nextFlixSkipIntroTime;
	var nextEpisode = items.nextFlixNextEpisode;
	var nextEpisodeTime = items.nextFlixNextEpisodeTime;
	var ancestor = $('body');
	var ob = new MutationObserver(function() {
		if($('.skip-credits').length > 0 && skipIntro) {
			setTimeout(function() {
				if($('.skip-credits').length > 0) {
					$('.skip-credits').find('a')[0].click();
				}
			}, skipIntroTime * 1000)
		}
		//if($('.player-postplay-still-hover-container').length > 0 && nextEpisode) {
			//console.log('what');
			//setTimeout(function() {
				//if($('.player-postplay-still-hover-container').length > 0) {
					//console.log('huh');
					//$('.player-postplay-still-hover-container')[0].click();
				//} else {
					//console.log('no click');
				//}
			//}, nextEpisodeTime * 1000)
		//} else {
			//console.log($('.player-postplay-still-hover-container').length);
		//}
		if($('.player-postplay-still-hover-container').length > 0) {
			$('.player-postplay-still-hover-container')[0].click();
		}
	});
	ob.observe(ancestor[0], {
		subtree: true,
		childList: true
	})
});
