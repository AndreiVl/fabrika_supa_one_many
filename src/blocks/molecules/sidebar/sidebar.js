import headerCart from "../../organisms/header/header--cart";

const cart = (producId) => {
	let cartData = JSON.parse(localStorage.getItem("cartData")) || {};
	let catalogData = JSON.parse(localStorage.getItem("catalogData"));
	let catTitles = JSON.parse(localStorage.getItem("catTitles"));

	// console.log(catalogData);
	if (producId) {
		if (!cartData[producId]) {
			addProduct(producId);
		} else {
			refreshProductCount(producId);
		}

		localStorage.setItem("cartData", JSON.stringify(cartData));
	}

	refreshProductsPrice();
	renderCartList(cartData);
	renderDelivery();
	renderTotal();

	function addProduct(id) {
		cartData[id] = {
			id: id,
			title: catTitles[id],
			price: catalogData[id],
			count: 1,
		};
	}

	function refreshProductCount(id) {
		cartData[id].count += 1;
	}

	function refreshProductsPrice() {
		for (let key in cartData) {
			cartData[key].price = catalogData[key];
		}
	}

	function renderCartList(data) {
		let cartList = $("#shopSidebarList");
		cartList.html("");

		for (let key in data) {
			let li = document.createElement("li");
			li.className = "cart__item";
			li.innerHTML = `
				<div class="order-item">
					<div class="order-item__body">
						<div class="order-item__left">
							<div class="order-item__canceling cartDel" data-id="${data[key].id}">
								<svg class="icon icon--cross icon--18">
									<use xlink:href="images/icons.svg#icon--cross"></use>
								</svg>
							</div>
				
							<div class="order-item__img">
								<img src="images/${data[key].id}.png" alt="${data[key].title}">
							</div>
				
							<div class="order-item__info">
								<span class="text text--22 order-item__title">${data[key].title}</span>
								<span class="text text--22 text--gray order-item__price">${data[key].price} р.</span>
							</div>
						</div>
				
						<div class="order-item__right">
							<div class="order-item__value">
								<div class="quantity quantity--sidebar">
									<div class="quantity-button quantity-down cartMinus" data-id="${data[key].id}"><span>-</span></div>
									<input type="number" min="1" max="1000" step="1" value="${data[key].count}">
									<div class="quantity-button quantity-up cartPlus" data-id="${data[key].id}"><span>+</span></div>
								</div>
							</div>
						</div>
					</div>
				</div>
      `;
			cartList.append(li);
		}
	}

	function renderTotal() {
		let totalSum = 0;

		for (let key in cartData) {
			totalSum += cartData[key].count * cartData[key].price;
		}

		$(".cart__total").html(totalSum + " р.");
	}

	function renderDelivery() {
		let countProduct = 0;

		for (let key in cartData) {
			countProduct += cartData[key].count;
		}

		if (countProduct < 12) {
			$(".cart__delivery").html("300 р.");
		} else {
			$(".cart__delivery").html("0 р.");
		}

		headerCart(countProduct);
	}
};
export default cart;
