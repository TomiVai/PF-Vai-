import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './NavBar';
import ItemListContainer from './Components/ItemListContainer';
import ItemDetailContainer from './Components/ItemDetailContainer';
import { CartProvider } from './Components/CartContext';
import Cart from './Cart';
import CheckoutForm from './Components/CheckoutForm';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics"; 

import 'firebase/database'; 

const firebaseConfig = {
  apiKey: "AIzaSyD_q6ORfIf1MEhIAjiEovSmOFONdEX777Q",
  authDomain: "mi-tienda-4864a.firebaseapp.com",
  projectId: "mi-tienda-4864a",
  storageBucket: "mi-tienda-4864a.appspot.com",
  messagingSenderId: "269413971014",
  appId: "1:269413971014:web:abc97e638fdf4271e4c647",
  measurementId: "G-THW0FXS1K5"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const Home = () => {
  return (
    <div>
      <h1>Bienvenido a Mi Tienda</h1>
      <p>Aquí puedes encontrar una gran variedad de productos.</p>
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <CartProvider>
        <div>
          <Navbar />
          <Switch>
            <Route path="/cart" component={Cart} />
            <Route path="/checkout" component={CheckoutForm} />
            <Route path="/placas-de-video" render={() => <ItemListContainer category="placas-de-video" />} />
            <Route path="/monitores" render={() => <ItemListContainer category="monitores" />} />
            <Route path="/otros" render={() => <ItemListContainer category="otros" />} />
            <Route path="/item/:id" component={ItemDetailContainer} />
            <Route exact path="/" component={Home} />
          </Switch>
        </div>
      </CartProvider>
    </Router>
  );
};

export default App;
