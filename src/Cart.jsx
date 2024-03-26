// Cart.jsx
import React from 'react';
import { useHistory } from 'react-router-dom';
import CartWidget from './CartWidget';
import CheckoutForm from './Components/CheckoutForm';
import { useCart } from './Components/CartContext';

const Cart = () => {
  const { cartState, dispatch } = useCart();
  const history = useHistory();

  const handleGoBack = () => {
    history.push('/');
  };

  const handleRemoveFromCart = (productId) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: productId });
  };

  return (
    <div>
      <h2>Carrito de Compras</h2>
      <CartWidget />
      <ul>
        {cartState.cartItems.map((item) => (
          <li key={item.id}>
            {item.title} - {item.quantity} unidades - ${item.price * item.quantity}
            <button onClick={() => handleRemoveFromCart(item.id)}>Quitar unidad</button>
          </li>
        ))}
      </ul>
      <button onClick={handleGoBack}>Volver a la página de inicio</button>
      <CheckoutForm />
    </div>
  );
};

export default Cart;
