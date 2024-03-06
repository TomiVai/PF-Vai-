// CartPage.jsx
import React from 'react';
import CartWidget from '../CartWidget';
import CheckoutForm from './CheckoutForm';
import { useCart } from './CartContext';

const CartPage = () => {
  const { cartState, removeFromCart } = useCart();

  if (!cartState.cartItems.length) {
    return (
      <div>
        <h2>Carrito de Compras</h2>
        <div>El carrito está vacío.</div>
      </div>
    );
  }

  return (
    <div>
      <h2>Carrito de Compras</h2>
      <CartWidget />
      <ul>
        {cartState.cartItems.map((item) => (
          <li key={item.id}>
            {item.title} - {item.quantity} unidades - ${item.price * item.quantity}
            <button onClick={() => removeFromCart(item.id)}>Quitar unidad</button>
          </li>
        ))}
      </ul>
      <CheckoutForm />
    </div>
  );
};

export default CartPage;
