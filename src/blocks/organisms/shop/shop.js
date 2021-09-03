import city from "../city/city";
import catItem from "../../molecules/cat-item/cat-item";
import cart from "../../molecules/sidebar/sidebar";
import buyAction from "../../molecules/buy-action/buy-action";

const shop = () => {
	loadShopCatTitles();
	city();
	catItem();
	cart();
	buyAction();
};

function loadShopCatTitles() {
	let catTitles = {
		vengerskij_gulyash: "Суп &laquo;Гуляш с&nbsp;говядиной&raquo;",
		afrikanskij_orekhovyj_sup: "Суп &laquo;Африканский ореховый&raquo;",
		borshch_s_govyadinoj: "Суп &laquo;Борщ Полтавский&raquo;",
		gruzinskij_harcho_s_govyadinoj: "Суп &laquo;Харчо с&nbsp;говядиной&raquo;",
		indijskij_dal: "Суп &laquo;Масурдал&raquo;",
		klem_chauder_s_midiyami: "Суп &laquo;Клэм Чаудер&raquo;",
		lagman: "Суп &laquo;ЛАГМАН с&nbsp;говядиной&raquo;",
		ma_po_s_tof: "Суп &laquo;МА&nbsp;ПО с&nbsp;тофу&raquo;",
		mataj_zhyoltyj_s_kuricej: "Суп &laquo;МАТАЙ желтый с&nbsp;курицей&raquo;",
		mataj_zelenyj_s_tofu: "Суп &laquo;МАТАЙ зеленый с&nbsp;тофу&raquo;",
		mataj_krasnyj_s_govyadinoj: "Суп &laquo;МАТАЙ красный с&nbsp;говядиной&raquo;",
		miso_s_gribami_shiitake: "Суп &laquo;МИСО с&nbsp;грибами шиитаке&raquo;",
		nemeckij_pihelshtajner: "Суп &laquo;Пихельштайнер&raquo;",
		solyanka_sbornaya_myasnaya: "Суп &laquo;Солянка&raquo;",
		sup_lapsha_s_kuricej: "Суп &laquo;Лапша с&nbsp;курицей&raquo;",
		to_yam_nam_kkhon_s_moreproduktami: "Суп &laquo;ТОМ&nbsp;ЯМ с&nbsp;морепродуктами&raquo;",
		tom_yam_s_kuricej_i_gribami: "Суп &laquo;ТОМ&nbsp;ЯМ с&nbsp;курицей и&nbsp;грибами&raquo;",
		tureckij_chechevichnyj_sup: "Суп &laquo;Мерджимек чорбасы&raquo;",
		finskij_lohikejtto_s_semgoj: "Суп &laquo;Лохикейтто&raquo;",
		fo_s_kuricej: "Суп &laquo;ФО&nbsp;с&nbsp;курицей&raquo;",
		francuzskij_lukovyj_s_grenkami: "Суп &laquo;Французский луковый с гренками&raquo;",
	};

	localStorage.setItem("catTitles", JSON.stringify(catTitles));
}

export default shop;
