// ItemListContainer.jsx
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Products from '../Products';
import { useCart } from './CartContext';

const ItemListContainer = ({ category }) => {
  const { dispatch } = useCart(); // Cambiado de addToCart a dispatch

  const handleAddToCart = (product) => {
    dispatch({ type: 'ADD_TO_CART', payload: product });
    // Puedes redirigir al usuario a la página del carrito aquí si es necesario
    // history.push('/cart');
  };

  const products = [
    {
      id: 1,
      title: "Tarjeta grafica Rx 6700Xt",
      price: 350000,
      stock: 5,
      image: "https://m.media-amazon.com/images/I/81L7-qPS0ZL._AC_SL1500_.jpg",
      category: "placas-de-video"
    },
    {
      id: 2,
      title: "Monitor MSI Optix MPG321UR-QD",
      price: 2000000,
      stock: 3,
      image: "https://m.media-amazon.com/images/I/815WGHE6DVL.jpg",
      category: "monitores"
    },
    {
      id: 3,
      title: "Disco SSD NVME M.2 SAMSUNG 980 PRO",
      price: 150000,
      stock: 15,
      image: "https://tienda.starware.com.ar/wp-content/uploads/2021/07/disco-solido-ssd-nvme-m2-samsung-980-evo-pro-1tb-pcie-40-2333-3865.jpg",
      category: "otros"
    },
    {
      id: 4,
      title: "Memoria Ram 16GB DDR5 5200 ADATA XPG LANCER",
      price: 100000,
      stock: 18,
      image: "https://fullh4rd.com.ar/img/productos/4/memoria-16gb-ddr5-5200-adata-xpg-lancer-0.jpg",
      category: "otros"
    },
    {
      id: 5,
      title: "Auriculares Hyperx Cloud Flight",
      price: 130000,
      stock: 20,
      image: "https://hard-digital.com.ar/public/files/Auricular%20Inalambrico%20Hyperx%20Cloud%20Flight%20Hx-Hscf-Bk-Am%20Negro/6.webp",
      category: "otros"
    }
  ];

  const filteredProducts = category
    ? products.filter(product => product.category === category)
    : products;


  return (
    <Container>
      <Row>
        {filteredProducts.map((product) => (
          <Col key={product.id} md={4}>
            <Products
              title={product.title}
              img={product.image}
              description={`Precio: $${product.price}, Stock: ${product.stock}`}
              addToCart={() => handleAddToCart(product)}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ItemListContainer;
