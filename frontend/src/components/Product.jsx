import React from 'react';
import { FaHamburger } from "react-icons/fa";

function Product({ name, code, image }) {
  return (
    <div className="bg-white rounded-md border border-gray-300 p-4">
      <div className="flex justify-center">
        {image ? <img src={image} alt={name} className="w-16 h-16" /> : <FaHamburger />}
      </div>
      <div className="text-center mt-2">
        <h2 className="font-bold text-lg">{name}</h2>
        <p className="text-gray-500">[{code}]</p>
      </div>
    </div>
  );
}

export default Product;
