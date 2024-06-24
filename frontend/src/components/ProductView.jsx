import React, { useState } from "react";
import Product from "./Product";

function ProductView({ products }) {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;

  const totalPages = Math.ceil(products.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentProducts = products.slice(startIndex, startIndex + itemsPerPage);

  const goToPage = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const previousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div className="container mx-auto p-4 border-black">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Vista productos</h1>
        <select name="" id="" className="rounded">
          <option value="">Todas las categorías</option>
          <option value="">Snack</option>
          <option value="">Bebestible</option>
        </select>
      </div>
      <div className="bg-gray-100 rounded-lg p-4">
        <div className="grid grid-cols-3 gap-4">
          {currentProducts.map((product) => (
            <div key={product.id} className="bg-white rounded-lg p-4 border border-gray-300">
              <Product name={product.name} code={product.code} image={product.image} />
            </div>
          ))}
        </div>
        <div className="flex justify-between mt-4">
          <button
            onClick={previousPage}
            disabled={currentPage === 1}
            className={`bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded ${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
          >
            Anterior
          </button>
          <div className="flex">
            {Array.from({ length: totalPages }, (_, index) => (
              <button
                key={index}
                onClick={() => goToPage(index + 1)}
                className={`ml-2 bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded ${currentPage === index + 1 ? 'bg-gray-700' : ''}`}
              >
                {index + 1}
              </button>
            ))}
          </div>
          <button
            onClick={nextPage}
            disabled={currentPage === totalPages}
            className={`bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded ${currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : ''}`}
          >
            Siguiente
          </button>
        </div>
      </div>
      <div className="flex justify-center mt-4">
        <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded">
          IMPRIMIR
        </button>
      </div>
    </div>
  );
}

export default ProductView;
