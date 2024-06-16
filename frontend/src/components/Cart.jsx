import React from 'react';
import { TrashIcon, MicrophoneIcon, QrcodeIcon } from '@heroicons/react/outline';

function Cart() {
  return (
    <div className="w-full md:w-1/2 p-4">
      <div>
        <label className="block mb-2">Escanear producto:</label>
        <div className="flex items-center mb-4">
          <input type="text" className="flex-grow p-2 border rounded-l-md" />
          <button className="p-2 bg-gray-200 border-l border-gray-300 rounded-r-md">
            <QrcodeIcon className="h-6 w-6 text-gray-700" />
          </button>
        </div>
      </div>
      <div>
        <label className="block mb-2">Ingresar código de producto:</label>
        <div className="flex">
          <input type="text" className="flex-grow p-2 border rounded-l-md" />
          <button className="p-2 bg-gray-200 border-l border-gray-300 rounded-r-md">
            <MicrophoneIcon className="h-6 w-6 text-gray-700" />
          </button>
        </div>
      </div>
      <table className="w-full mt-4 border-collapse">
        <thead>
          <tr>
            <th className="border p-2">Nombre</th>
            <th className="border p-2">Cantidad</th>
            <th className="border p-2">Total</th>
            <th className="border p-2">Acción</th>
          </tr>
        </thead>
        <tbody>
          {/* Aquí irán los productos del carrito */}
          {Array(8).fill().map((_, i) => (
            <tr key={i} className="border-t">
              <td className="border p-2">Producto {i + 1}</td>
              <td className="border p-2 text-center">1</td>
              <td className="border p-2 text-center">$10.00</td>
              <td className="border p-2 text-center">
                <button>
                  <TrashIcon className="h-6 w-6 text-gray-700" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Cart;
