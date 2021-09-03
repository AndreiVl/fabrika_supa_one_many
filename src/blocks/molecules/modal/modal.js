export function modalVedeoAutoPlay() {
	$("a[data-video='youtube-video']").on("click", function () {
		let $videoStart = $("#video-start"),
			src = $videoStart.attr("src");
		$videoStart.attr("src", src + "&autoplay=1");
	});
	$("#modal-video").on($.modal.BEFORE_CLOSE, function (event, modal) {
		let $videoStart = $("#video-start"),
			src = $videoStart.attr("src").replace("&autoplay=1", "");
		$videoStart.attr("src", src);
	});
}
