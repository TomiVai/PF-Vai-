// src/components/Products.jsx
import React from 'react';
import { Card, Button } from 'react-bootstrap';

const Products = ({ title, img, description, addToCart }) => {
  console.log('Products render', title);
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Button variant="primary" onClick={addToCart}>
          Agregar al carrito
        </Button>
      </Card.Body>
    </Card>
  );
};

export default Products;
