import hamburger from "./atoms/hamburger/hamburger";
import videoBg from "./organisms/video-bg/video-bg";
import { modalVedeoAutoPlay } from "./molecules/modal/modal";
import menu from "./molecules/menu/menu";
import order from "./organisms/order/order";
import shop from "./organisms/shop/shop";
import form from "./molecules/form/form";
import tabsHeader from "./molecules/tabs-header/tabs-header";
import map from "./molecules/map/map";

window.addEventListener("DOMContentLoaded", () => {
	$("#clearData").on("click", function () {
		localStorage.clear();
		location.reload();
	});
	// form();
	hamburger();
	videoBg();
	modalVedeoAutoPlay();
	menu();
	shop();
	order();
	tabsHeader();
});

window.onload = function () {
	if ($('.map').length) {
		map();
	}
};