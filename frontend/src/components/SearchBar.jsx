import React from 'react';

function SearchBar() {
    return (
        <div className="py-4">
            <div className="grid grid-cols-5 gap-5">
                <div className="col-span-1">
                    <label htmlFor="nombre" className="block text-sm font-medium text-gray-700">Nombre</label>
                    <input type="text" id="nombre" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                </div>
                <div className="col-span-1">
                    <label htmlFor="codigo" className="block text-sm font-medium text-gray-700">Codigo</label>
                    <input type="text" id="codigo" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                </div>
                <div className="col-span-1">
                    <label htmlFor="categoria" className="block text-sm font-medium text-gray-700">Categoria</label>
                    <select id="categoria" className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                        <option>Categoria 1</option>
                        <option>Categoria 2</option>
                        <option>Categoria 3</option>
                    </select>
                </div>
                <div className="col-span-1">
                    <label htmlFor="disponibilidad" className="block text-sm font-medium text-gray-700">Disponibilidad</label>
                    <select id="disponibilidad" className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                        <option>Disponible</option>
                        <option>No Disponible</option>
                    </select>
                </div>
                <button type="button" className="border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-orange-500 hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500">
                    Consultar
                </button>
            </div>
        </div>
    );
}

export default SearchBar;
