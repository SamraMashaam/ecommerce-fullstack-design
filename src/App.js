import './App.css';
import Home from './pages/Home';
import ProductDetail from './pages/ProductDetail';
import ProductListing from './pages/ProductListing';
import Cart from './pages/Cart';
import Login from './pages/Login';
import Signup from './pages/Signup';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductListing />} />
        <Route path="/products/:id" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>

  );
}

export default App;
