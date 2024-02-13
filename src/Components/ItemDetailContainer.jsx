// src/components/ItemDetailContainer.jsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProductById } from '../api/asyncMocks';

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

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

  return (
    <div>
      <h2>Detalles del Producto</h2>
      {/* Mostrar detalles del producto */}
      {product && (
        <div>
          <h2>{product.title}</h2>
          <img src={product.image} alt={product.title} />
          <p>{`Precio: $${product.price}, Stock: ${product.stock}`}</p>
          {/* Otros detalles según tus necesidades */}
        </div>
      )}
    </div>
  );
};

export default ItemDetailContainer;
