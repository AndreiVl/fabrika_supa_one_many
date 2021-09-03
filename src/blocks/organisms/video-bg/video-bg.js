const videoBg = () => {
	let video = document.getElementById("video-bg-player");

	if (video) {
		video.addEventListener(
			"click",
			function () {
				video.play();
			},
			false
		);
	}
};

export default videoBg;
