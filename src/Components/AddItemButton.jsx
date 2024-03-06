// AddItemButton.jsx
import React from 'react';

const AddItemButton = ({ onClick }) => {
  return (
    <button onClick={onClick} type="button">
      Agregar al carrito
    </button>
  );
};

export default AddItemButton;
