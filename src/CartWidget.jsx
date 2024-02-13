// src/components/CartWidget.jsx
// src/components/CartWidget.jsx
import React from 'react';
import { BsCart } from 'react-icons/bs';
import { Badge, Nav } from 'react-bootstrap';

const CartWidget = ({ cartItemsCount }) => {
  return (
    <Nav.Link href="#carrito" className="text-light">
      <div>
        <BsCart size={30} />
        <Badge bg="secondary">{cartItemsCount}</Badge>
      </div>
    </Nav.Link>
  );
};

export default CartWidget;

