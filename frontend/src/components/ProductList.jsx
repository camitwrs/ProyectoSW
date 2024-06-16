import React from 'react';

function ProductList() {
  return (
    <div className="w-full md:w-1/2 p-4">
      <h2 className="text-center mb-4">Vista productos</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {/* Aquí irán los productos */}
        {Array(12).fill().map((_, i) => (
          <div key={i} className="p-2 border rounded-md text-center">
            <div className="mb-2 bg-gray-200 h-24"></div>
            <p>Nombre [Código]</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
