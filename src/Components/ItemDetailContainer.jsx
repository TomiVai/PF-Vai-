import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProductById } from '../api/asyncMocks';
import ItemQuantitySelector from './ItemQuantitySelector';
import Description from './Description';
import AddItemButton from './AddItemButton';
import { useCart } from '../CartContext';

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const productData = await getProductById(id);
        setProduct(productData);
      } catch (error) {
        console.error('Error fetching product:', error);
      }
    };

    fetchProduct();
  }, [id]);

  const handleQuantityChange = (newQuantity) => {
    setQuantity(newQuantity);
  };

  const handleAddToCart = () => {
    addToCart(product, quantity);
    console.log(`Added ${quantity} ${product.title} to cart`);
  };

  return (
    <div>
      <h2>Detalles del Producto</h2>
      {product && (
        <div>
          <h2>{product.title}</h2>
          <img src={product.image} alt={product.title} />
          <p>{`Precio: $${product.price}, Stock: ${product.stock}`}</p>
          <ItemQuantitySelector quantity={quantity} onChange={handleQuantityChange} />
          <Description description={product.description} />
          <AddItemButton onClick={handleAddToCart} />
        </div>
      )}
    </div>
  );
};

export default ItemDetailContainer;
