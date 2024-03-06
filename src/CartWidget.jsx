// CartWidget.jsx
import React from 'react';
import { useCart } from './Components/CartContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const CartWidget = () => {
  const { cartState, calculateTotal } = useCart();
  const cartItemsCount = cartState.cartItems.reduce((count, item) => count + item.quantity, 0);

  return (
    <div>
      <FontAwesomeIcon icon={faShoppingCart} />
      <span>{cartItemsCount > 0 ? cartItemsCount : ''}</span>
    </div>
  );
};

export default CartWidget;
