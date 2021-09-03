import cart from "../../molecules/sidebar/sidebar";
import order from "../../organisms/order/order";

const refreshData = (state) => {
	let currentCity = localStorage.getItem("cityName");
	let catalogData = localStorage.getItem("catalogData");

	citySelectRefresh(currentCity);
	catalogRefresh(catalogData);
	catalogProductRefresh(catalogData);
	cartRefresh();
	orderRefresh();
};

function citySelectRefresh(city) {
	$(".city-select option[value=" + city + "]").prop("selected", true);
	$(".city-select option[value=select_city]").remove();
}


function catalogProductRefresh(catalogData) {
	let catalog = JSON.parse(catalogData);
	let cart = JSON.parse(localStorage.getItem('cartData')) || {};

	if ($('.buy-action').length) {
		for (let key in catalog) {
			$('.buy-action[data-id=' + key + ']').find('.buy-action__price span').html(catalog[key]);
		}
	}

	if (!$.isEmptyObject(cart)) {
		for (let key in cart) {
			cart[key].price = catalog[key];
		}
	}

	localStorage.setItem('cartData', JSON.stringify(cart));
}


function catalogRefresh(catalogData) {
	let catalog = JSON.parse(catalogData);
	let cart = JSON.parse(localStorage.getItem("cartData")) || {};

	for (let key in catalog) {
		$("#" + key)
			.find(".cat-item__price span")
			.html(catalog[key]);
	}

	if (!$.isEmptyObject(cart)) {
		for (let key in cart) {
			cart[key].price = catalog[key];
		}
	}

	localStorage.setItem("cartData", JSON.stringify(cart));
}
function orderRefresh(catalogData) {
	order();
}
function cartRefresh() {
	cart();
}
function cartCityRefresh(catalogData) { }

export default refreshData;
