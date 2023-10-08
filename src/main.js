function fixAvatars() {
	let avatars = document.querySelectorAll("img[src*='avatar']");
	avatars.forEach(function (avatar) {
		if (avatar.parentNode.querySelectorAll("img").length < 2) {
			let clone = avatar.cloneNode(true);

			let src = clone.src;
			src = src.replace("?ts-frame=1", "");
			clone.src = src;

			avatar.parentNode.appendChild(clone);
			avatar.style.display = "none";
		}
	});
}

// Interval because of new avatars being added to the DOM (e.g. new friend added or new group joined)
setInterval(fixAvatars, 5000);

// Timeout to make sure avatars are loaded before fixing them. If your PC is too slow the interval above will fix them anyway.
setTimeout(fixAvatars, 1000);
