import orderList from "../../molecules/order-list/order-list";
import orderListItem from "../../molecules/order-item/order-item";
import orderForm from "../../molecules/order-form/order-form";

const order = () => {
	orderList();
	orderListItem();

	let cityName = $(".city-select option:selected").html();
	$('.order-form [name="order_city"]').val(cityName);

	$("#orderDone").on("click", function (e) {
		e.preventDefault();

		if (orderForm()) {
			$(".order").html("");
			// console.log("orderDone");
		} else {
			// console.log("orderFalse");
		}
	});
};

export default order;
