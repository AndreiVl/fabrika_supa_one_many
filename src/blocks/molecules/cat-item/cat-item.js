import cart from '../sidebar/sidebar';
import orderListItem from '../order-item/order-item';

const catItem = () => {
  $('.addToCart').on('click', function() {
    let productId = $(this).attr('data-id');
    cart(productId);
    orderListItem();
  });
}

export default catItem;