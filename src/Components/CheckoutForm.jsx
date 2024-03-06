// CheckoutForm.jsx
import React, { useState } from 'react';
import SweetAlert2 from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import 'sweetalert2/dist/sweetalert2.css';

const MySwal = withReactContent(SweetAlert2);

const CheckoutForm = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [selectedPaymentMethods, setSelectedPaymentMethods] = useState([]);

  const handlePurchase = () => {
    // Validación básica del formulario
    if (!email || !name || selectedPaymentMethods.length === 0) {
      MySwal.fire({
        title: 'Por favor, complete todos los campos',
        icon: 'error',
        confirmButtonText: 'Ok',
      });
      return;
    }

    // Lógica para procesar la compra, puedes enviar los datos a un servidor, etc.

    // Mostrar el mensaje de compra exitosa
    MySwal.fire({
      title: 'Compra realizada con éxito',
      icon: 'success',
      confirmButtonText: 'Ok',
    });
  };

  const handlePaymentMethodChange = (method) => {
    // Lógica para manejar la selección de métodos de pago
    if (selectedPaymentMethods.includes(method)) {
      setSelectedPaymentMethods(selectedPaymentMethods.filter((m) => m !== method));
    } else {
      setSelectedPaymentMethods([...selectedPaymentMethods, method]);
    }
  };

  return (
    <div>
      <h2>Checkout</h2>
      <form>
        <label htmlFor="email">Correo Electrónico:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label htmlFor="name">Nombre:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <h3>Métodos de Pago:</h3>
        <div>
          <label>
            <input
              type="checkbox"
              value="paypal"
              checked={selectedPaymentMethods.includes('paypal')}
              onChange={() => handlePaymentMethodChange('paypal')}
            />
            PayPal
          </label>
        </div>
        <div>
          <label>
            <input
              type="checkbox"
              value="tarjeta"
              checked={selectedPaymentMethods.includes('tarjeta')}
              onChange={() => handlePaymentMethodChange('tarjeta')}
            />
            Tarjeta de Crédito
          </label>
        </div>

        <button type="button" onClick={handlePurchase}>
          Comprar
        </button>
      </form>
    </div>
  );
};

export default CheckoutForm;
