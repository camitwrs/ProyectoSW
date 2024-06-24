function InventoryView() {
    return (
        <div>
            <div class="container mx-auto px-4 sm:px-6 lg:px-8">
                <div class="py-4">
                    <div class="grid grid-cols-5 gap-4">
                        <div class="col-span-1">
                            <label for="nombre" class="block text-sm font-medium text-gray-700">Nombre</label>
                            <input type="text" id="nombre" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"/>
                        </div>
                        <div class="col-span-1">

                            <label for="codigo" class="block text-sm font-medium text-gray-700">Codigo</label>

                            <input type="text" id="codigo" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"/>

                        </div>

                        <div class="col-span-1">

                            <label for="categoria" class="block text-sm font-medium text-gray-700">Categoria</label>

                            <select id="categoria" class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">

                                <option>Categoria 1</option>

                                <option>Categoria 2</option>

                                <option>Categoria 3</option>

                            </select>

                        </div>

                        <div class="col-span-1">

                            <label for="disponibilidad" class="block text-sm font-medium text-gray-700">Disponibilidad</label>

                            <select id="disponibilidad" class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">

                                <option>Disponible</option>

                                <option>No Disponible</option>

                            </select>

                        </div>

                        <div class="col-span-1">

                            <button type="button" class="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">

                                Consultar

                            </button>

                        </div>

                    </div>

                </div>


                <div class="py-4">

                    <div class="overflow-x-auto">

                        <table class="min-w-full divide-y divide-gray-200">

                            <thead class="bg-gray-50">

                                <tr>

                                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nombre</th>

                                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Codigo</th>

                                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Categoria</th>

                                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Precio venta</th>

                                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Disponibilidad</th>

                                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Stock</th>

                                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Accion</th>

                                </tr>

                            </thead>

                            <tbody class="bg-white divide-y divide-gray-200">

                                <tr>

                                    <td class="px-6 py-4 whitespace-nowrap">

                                        <div class="text-sm text-gray-900">Nombre 1</div>

                                    </td>

                                    <td class="px-6 py-4 whitespace-nowrap">

                                        <div class="text-sm text-gray-900">Codigo 1</div>

                                    </td>

                                    <td class="px-6 py-4 whitespace-nowrap">

                                        <div class="text-sm text-gray-900">Categoria 1</div>

                                    </td>

                                    <td class="px-6 py-4 whitespace-nowrap">

                                        <div class="text-sm text-gray-900">Precio venta 1</div>

                                    </td>

                                    <td class="px-6 py-4 whitespace-nowrap">

                                        <div class="flex items-center">

                                            <input type="checkbox" class="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"/>

                                        </div>

                                    </td>

                                    <td class="px-6 py-4 whitespace-nowrap">

                                        <div class="text-sm text-gray-900">Stock 1</div>

                                    </td>

                                    <td class="px-6 py-4 whitespace-nowrap">

                                        <button type="button" class="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">

                                            Mod.

                                        </button>

                                    </td>

                                </tr>

                                <tr>

                                    <td class="px-6 py-4 whitespace-nowrap">

                                        <div class="text-sm text-gray-900">Nombre 2</div>

                                    </td>

                                    <td class="px-6 py-4 whitespace-nowrap">

                                        <div class="text-sm text-gray-900">Codigo 2</div>

                                    </td>

                                    <td class="px-6 py-4 whitespace-nowrap">

                                        <div class="text-sm text-gray-900">Categoria 2</div>

                                    </td>

                                    <td class="px-6 py-4 whitespace-nowrap">

                                        <div class="text-sm text-gray-900">Precio venta 2</div>

                                    </td>

                                    <td class="px-6 py-4 whitespace-nowrap">

                                        <div class="flex items-center">

                                            <input type="checkbox" class="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"/>

                                        </div>

                                    </td>

                                    <td class="px-6 py-4 whitespace-nowrap">

                                        <div class="text-sm text-gray-900">Stock 2</div>

                                    </td>

                                    <td class="px-6 py-4 whitespace-nowrap">

                                        <button type="button" class="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">

                                            Mod.

                                        </button>

                                    </td>

                                </tr>

                                <tr>

                                    <td class="px-6 py-4 whitespace-nowrap">

                                        <div class="text-sm text-gray-900">Nombre 3</div>

                                    </td>

                                    <td class="px-6 py-4 whitespace-nowrap">

                                        <div class="text-sm text-gray-900">Codigo 3</div>

                                    </td>

                                    <td class="px-6 py-4 whitespace-nowrap">

                                        <div class="text-sm text-gray-900">Categoria 3</div>

                                    </td>

                                    <td class="px-6 py-4 whitespace-nowrap">

                                        <div class="text-sm text-gray-900">Precio venta 3</div>

                                    </td>

                                    <td class="px-6 py-4 whitespace-nowrap">

                                        <div class="flex items-center">

                                            <input type="checkbox" class="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"/>

                                        </div>

                                    </td>

                                    <td class="px-6 py-4 whitespace-nowrap">

                                        <div class="text-sm text-gray-900">Stock 3</div>

                                    </td>

                                    <td class="px-6 py-4 whitespace-nowrap">

                                        <button type="button" class="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">

                                            Mod.

                                        </button>

                                    </td>

                                </tr>

                                <tr>

                                    <td class="px-6 py-4 whitespace-nowrap">

                                        <div class="text-sm text-gray-900">Nombre 4</div>

                                    </td>

                                    <td class="px-6 py-4 whitespace-nowrap">

                                        <div class="text-sm text-gray-900">Codigo 4</div>

                                    </td>

                                    <td class="px-6 py-4 whitespace-nowrap">

                                        <div class="text-sm text-gray-900">Categoria 4</div>

                                    </td>

                                    <td class="px-6 py-4 whitespace-nowrap">

                                        <div class="text-sm text-gray-900">Precio venta 4</div>

                                    </td>

                                    <td class="px-6 py-4 whitespace-nowrap">

                                        <div class="flex items-center">

                                            <input type="checkbox" class="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"/>

                                        </div>

                                    </td>

                                    <td class="px-6 py-4 whitespace-nowrap">

                                        <div class="text-sm text-gray-900">Stock 4</div>

                                    </td>

                                    <td class="px-6 py-4 whitespace-nowrap">

                                        <button type="button" class="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">

                                            Mod.

                                        </button>

                                    </td>

                                </tr>

                                <tr>

                                    <td class="px-6 py-4 whitespace-nowrap">

                                        <div class="text-sm text-gray-900">Nombre 5</div>

                                    </td>

                                    <td class="px-6 py-4 whitespace-nowrap">

                                        <div class="text-sm text-gray-900">Codigo 5</div>

                                    </td>

                                    <td class="px-6 py-4 whitespace-nowrap">

                                        <div class="text-sm text-gray-900">Categoria 5</div>

                                    </td>

                                    <td class="px-6 py-4 whitespace-nowrap">

                                        <div class="text-sm text-gray-900">Precio venta 5</div>

                                    </td>

                                    <td class="px-6 py-4 whitespace-nowrap">

                                        <div class="flex items-center">

                                            <input type="checkbox" class="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"/>

                                        </div>

                                    </td>

                                    <td class="px-6 py-4 whitespace-nowrap">

                                        <div class="text-sm text-gray-900">Stock 5</div>

                                    </td>

                                    <td class="px-6 py-4 whitespace-nowrap">

                                        <button type="button" class="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">

                                            Mod.

                                        </button>

                                    </td>

                                </tr>

                                <tr>

                                    <td class="px-6 py-4 whitespace-nowrap">

                                        <div class="text-sm text-gray-900">Nombre 6</div>

                                    </td>

                                    <td class="px-6 py-4 whitespace-nowrap">

                                        <div class="text-sm text-gray-900">Codigo 6</div>

                                    </td>

                                    <td class="px-6 py-4 whitespace-nowrap">

                                        <div class="text-sm text-gray-900">Categoria 6</div>

                                    </td>

                                    <td class="px-6 py-4 whitespace-nowrap">

                                        <div class="text-sm text-gray-900">Precio venta 6</div>

                                    </td>

                                    <td class="px-6 py-4 whitespace-nowrap">

                                        <div class="flex items-center">

                                            <input type="checkbox" class="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"/>

                                        </div>

                                    </td>

                                    <td class="px-6 py-4 whitespace-nowrap">

                                        <div class="text-sm text-gray-900">Stock 6</div>

                                    </td>

                                    <td class="px-6 py-4 whitespace-nowrap">

                                        <button type="button" class="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">

                                            Mod.

                                        </button>

                                    </td>

                                </tr>

                                <tr>

                                    <td class="px-6 py-4 whitespace-nowrap">

                                        <div class="text-sm text-gray-900">Nombre 7</div>

                                    </td>

                                    <td class="px-6 py-4 whitespace-nowrap">

                                        <div class="text-sm text-gray-900">Codigo 7</div>

                                    </td>

                                    <td class="px-6 py-4 whitespace-nowrap">

                                        <div class="text-sm text-gray-900">Categoria 7</div>

                                    </td>

                                    <td class="px-6 py-4 whitespace-nowrap">

                                        <div class="text-sm text-gray-900">Precio venta 7</div>

                                    </td>

                                    <td class="px-6 py-4 whitespace-nowrap">

                                        <div class="flex items-center">

                                            <input type="checkbox" class="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"/>

                                        </div>

                                    </td>

                                    <td class="px-6 py-4 whitespace-nowrap">

                                        <div class="text-sm text-gray-900">Stock 7</div>

                                    </td>

                                    <td class="px-6 py-4 whitespace-nowrap">

                                        <button type="button" class="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">

                                            Mod.

                                        </button>

                                    </td>

                                </tr>

                                <tr>

                                    <td class="px-6 py-4 whitespace-nowrap">

                                        <div class="text-sm text-gray-900">Nombre 8</div>

                                    </td>

                                    <td class="px-6 py-4 whitespace-nowrap">

                                        <div class="text-sm text-gray-900">Codigo 8</div>

                                    </td>

                                    <td class="px-6 py-4 whitespace-nowrap">

                                        <div class="text-sm text-gray-900">Categoria 8</div>

                                    </td>

                                    <td class="px-6 py-4 whitespace-nowrap">

                                        <div class="text-sm text-gray-900">Precio venta 8</div>

                                    </td>

                                    <td class="px-6 py-4 whitespace-nowrap">

                                        <div class="flex items-center">

                                            <input type="checkbox" class="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"/>

                                        </div>

                                    </td>

                                    <td class="px-6 py-4 whitespace-nowrap">

                                        <div class="text-sm text-gray-900">Stock 8</div>

                                    </td>

                                    <td class="px-6 py-4 whitespace-nowrap">

                                        <button type="button" class="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">

                                            Mod.

                                        </button>

                                    </td>

                                </tr>

                            </tbody>

                        </table>

                    </div>

                </div>


                <div class="py-4">

                    <div class="flex justify-end">

                        <div class="flex items-center space-x-4">

                            <button type="button" class="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">

                                1

                            </button>

                            <button type="button" class="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">

                                2

                            </button>

                            <button type="button" class="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">

                            </button>

                        </div>

                    </div>

                </div>


                <div class="py-4">

                    <div class="text-sm text-gray-700">

                        Mostrando 8 de 8 registros

                    </div>

                </div>

            </div>
        </div>
    );
}

export default InventoryView;