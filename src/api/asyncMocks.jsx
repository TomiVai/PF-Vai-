export const getAllProducts = async () => {
  return [
    {
      id: '1',
      title: 'Tarjeta gráfica Rx 6700Xt',
      price: 350000,
      stock: 5,
      image: 'https://m.media-amazon.com/images/I/81L7-qPS0ZL._AC_SL1500_.jpg',
    },
    {
      id: '2',
      title: 'Monitor MSI Optix MPG321UR-QD',
      price: 2000000,
      stock: 3,
      image: 'https://m.media-amazon.com/images/I/815WGHE6DVL.jpg',
    },
    {
      id: '3',
      title: 'Disco SSD NVME M.2 SAMSUNG 980 PRO',
      price: 150000,
      stock: 15,
      image: 'https://tienda.starware.com.ar/wp-content/uploads/2021/07/disco-solido-ssd-nvme-m2-samsung-980-evo-pro-1tb-pcie-40-2333-3865.jpg',
    },
    {
      id: '4',
      title: 'Memoria Ram 16GB DDR5 5200 ADATA XPG LANCER',
      price: 100000,
      stock: 18,
      image: 'https://fullh4rd.com.ar/img/productos/4/memoria-16gb-ddr5-5200-adata-xpg-lancer-0.jpg',
    },
    {
      id: '5',
      title: 'Auriculares Hyperx Cloud Flight',
      price: 130000,
      stock: 20,
      image: 'https://hard-digital.com.ar/public/files/Auricular%20Inalambrico%20Hyperx%20Cloud%20Flight%20Hx-Hscf-Bk-Am%20Negro/6.webp',
    },
  ];
};

export const getProductsByCategory = async (category) => {
  const allProducts = await getAllProducts();
  return allProducts.filter((product) => product.category === category);
};

export const getProductById = async (id) => {
  const allProducts = await getAllProducts();
  return allProducts.find((product) => product.id === id) || null;
};
