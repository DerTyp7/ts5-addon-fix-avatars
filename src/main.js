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

window.addEventListener("blur", fixAvatars);
