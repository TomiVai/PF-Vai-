// ItemQuantitySelector.jsx
import React from 'react';

const ItemQuantitySelector = ({ quantity, onChange }) => {
  return (
    <div>
      <label>Quantity:</label>
      <input
        type="number"
        value={quantity}
        onChange={(e) => onChange(parseInt(e.target.value, 10))}
      />
    </div>
  );
};

export default ItemQuantitySelector;
