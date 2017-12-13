// Saves options to chrome.storage
function save_options() {
	// Get settings
	var skipIntro = document.getElementById('skip_intro').checked;
	var nextEpisode = document.getElementById('next_episode').checked;
	var muteTrailer = document.getElementById('mute_trailer').checked;

	chrome.storage.sync.set({
		nextFlixSkipIntro: skipIntro,
		nextFlixNextEpisode: nextEpisode,
		nextFlixMuteTrailer: muteTrailer,
	}, function() {
		// Update status to let user know options were saved.
		var status = document.getElementById('status');
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
		nextFlixNextEpisode: true,
		nextFlixMuteTrailer: true,
	}, function(items) {
		document.getElementById('skip_intro').checked = items.nextFlixSkipIntro;
		document.getElementById('next_episode').checked = items.nextFlixNextEpisode;
		document.getElementById('mute_trailer').checked = items.nextFlixMuteTrailer;
	});
}
document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click', save_options);
