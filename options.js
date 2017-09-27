// Saves options to chrome.storage
function save_options() {
	// Get settings
	var skipIntro = document.getElementById('skip_intro').checked;
	var skipIntroTime = document.getElementById('skip_intro_time').value;
	skipIntroTime = skipIntroTime > 3 ? 3 : skipIntroTime;
	skipIntroTime = skipIntroTime < 0? 0 : skipIntroTime;
	var nextEpisode = document.getElementById('next_episode').checked;
	var nextEpisodeTime = document.getElementById('next_episode_time').value;
	nextEpisodeTime = nextEpisodeTime > 10 ? 10 : nextEpisodeTime;
	nextEpisodeTime = nextEpisodeTime < 0 ? 0 : nextEpisodeTime;

	chrome.storage.sync.set({
		nextFlixSkipIntro: skipIntro,
		nextFlixSkipIntroTime: skipIntroTime,
		nextFlixNextEpisode: nextEpisode,
		nextFlixNextEpisodeTime: nextEpisodeTime
	}, function() {
		// Update status to let user know options were saved.
		var status = document.getElementById('status');
		document.getElementById('skip_intro_time').value = skipIntroTime;
		document.getElementById('next_episode_time').value = nextEpisodeTime;
		status.textContent = 'Options saved.';
		setTimeout(function() {
			status.textContent = '';
		}, 750);
	});
}

	// Restores select box and checkbox state using the preferences
	// stored in chrome.storage.
	function restore_options() {
		// Use default value color = 'red' and likesColor = true.
		chrome.storage.sync.get({
		nextFlixSkipIntro: true,
		nextFlixSkipIntroTime: 0,
		nextFlixNextEpisode: true,
		nextFlixNextEpisodeTime: 0
	}, function(items) {
		document.getElementById('skip_intro').checked = items.nextFlixSkipIntro;
		document.getElementById('skip_intro_time').value = items.nextFlixSkipIntroTime;
		document.getElementById('next_episode').checked = items.nextFlixNextEpisode;
		document.getElementById('next_episode_time').value = items.nextFlixNextEpisodeTime;
	});
}
document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click', save_options);
