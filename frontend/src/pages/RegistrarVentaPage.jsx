import React from 'react';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import ProductList from '../components/ProductList';
import Cart from '../components/Cart';
import Summary from '../components/Summary';
import Buttons from '../components/Buttons';

function RegistrarVentaPage() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex flex-col w-full">
        <Header />
        <div className="flex flex-wrap">
          <Cart />
          <ProductList />
        </div>
        <Summary />
        <Buttons />
      </div>
    </div>
  );
}

export default RegistrarVentaPage;
