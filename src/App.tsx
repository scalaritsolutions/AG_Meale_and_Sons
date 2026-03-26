import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './layouts/Layout';
import Home from './pages/Home';
import Shop from './pages/Shop';
import CoffeeShop from './pages/CoffeeShop';
import Nursery from './pages/Nursery';
import PYO from './pages/PYO';
import Contact from './pages/Contact';
import CategoryPage from './pages/CategoryPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="coffee-shop" element={<CoffeeShop />} />
        <Route path="nursery" element={<Nursery />} />
        <Route path="pyo" element={<PYO />} />
        <Route path="contact" element={<Contact />} />
        <Route path="info/:slug" element={<CategoryPage />} />
      </Route>
    </Routes>
  );
}

export default App;
