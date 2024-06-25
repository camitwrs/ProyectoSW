function ReportFilter() {
    return (
        <div className="bg-white p-6 rounded-md shadow-md mb-4 border border-black">
            <div className="flex space-x-4">
                <div className="flex-1">
                    <label htmlFor="fecha-desde" className="block text-sm font-medium text-gray-700">Fecha desde</label>
                    <input type="date" id="fecha-desde" className="mt-1 p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm" />
                </div>
                <div className="flex-1">
                    <label htmlFor="fecha-hasta" className="block text-sm font-medium text-gray-700">Fecha hasta</label>
                    <input type="date" id="fecha-hasta" className="mt-1 p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm" />
                </div>
                <div className="flex-1">
                    <label htmlFor="empleado" className="block text-sm font-medium text-gray-700">Empleado</label>
                    <select id="empleado" className="mt-1 p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm">
                        <option value="">Seleccionar</option>
                        <option value="empleado1">Empleado 1</option>
                        <option value="empleado2">Empleado 2</option>
                    </select>
                </div>
                <div className="flex-1">
                    <label htmlFor="categoria" className="block text-sm font-medium text-gray-700">Categoría</label>
                    <select id="categoria" className="mt-1 p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm">
                        <option value="">Seleccionar</option>
                        <option value="categoria1">Categoría 1</option>
                        <option value="categoria2">Categoría 2</option>
                    </select>
                </div>
                <div className="flex-1 flex items-end">
                    <button type="button" className="bg-orange-500 text-white font-bold py-2 px-4 rounded hover:bg-orange-700 focus:outline-none focus:shadow-outline w-full">Generar</button>
                </div>
            </div>
        </div>
    );
}

export default ReportFilter;
