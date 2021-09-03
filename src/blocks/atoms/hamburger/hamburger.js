const hamburger = () => {
	$(".hamburger").click(function () {
		if ($("body .hamburger--opened").length) {
			$(".header__body").fadeOut(100);
		} else {
			$(".header__body").fadeIn(100);
		}

		$(".header__body").toggleClass("header__mobile");
		$(".header").toggleClass("header--bg");
		$(".hamburger").toggleClass("hamburger--opened");
		$("body").toggleClass("overflow-heidden");
	});
	$(window).resize(function () {
		if ($(window).width() > 1199) {
			$(".hamburger").removeClass("hamburger--opened");
			$(".header").removeClass("header--bg");
		}
	});

	let scrolled = 0;

	changeScrolled();

	$(window).scroll(function () {
		let $this = $(this),
			st = $this.scrollTop();

		menuScrollDesktop(st);
	});

	$(window).resize(function () {
		let st = $(window).width();

		menuDesktopShow(st);
		changeScrolled();
	});

	function menuScrollDesktop(st) {
		if (st > scrolled) {
			$("body").addClass("scrolled");
		} else {
			$("body").removeClass("scrolled");
		}
	}

	function menuDesktopShow(st) {
		if (st > 1200) {
			$(".header__body").attr("style", "");

			if ($(".overflow-heidden").length) {
				$("body").removeClass("overflow-heidden");
			}
		}
	}

	function changeScrolled() {
		scrolled = 0;
	}
};

export default hamburger;